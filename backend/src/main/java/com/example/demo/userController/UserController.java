package com.example.demo.userController;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.userModel.UserModel;
import com.example.demo.userRepository.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	//get all data
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users")
	public List <UserModel> getAllUsers(){
		return userRepository.findAll();
	}  
	
	
	
	//create 
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/users")
	public UserModel createUser(@RequestBody UserModel user)
	{
		return userRepository.save(user);
	}
	
	
	// get data by id 
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users/{id}")
	public ResponseEntity<UserModel> getByID(@PathVariable Long id) {
		UserModel user = userRepository.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("User with id "+id+"does not exists"));
		return ResponseEntity.ok(user);
	}
	
	
	//update data 
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping ("/users/{id}")
	public ResponseEntity<UserModel> updateEmployeeByID(@PathVariable Long id, @RequestBody UserModel userDetails){
		UserModel user = userRepository.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("User with id "+id+"does not exists"));
		
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setPhoneNum(userDetails.getPhoneNum());
		user.setEmail(userDetails.getEmail());
		user.setAddress(userDetails.getAddress());
		user.setRole(userDetails.getRole());
		user.setResponsibility(userDetails.getResponsibility());

		UserModel updatedUser=userRepository.save(user);
		
		return ResponseEntity.ok(updatedUser);
}
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/users/{id}")
	public ResponseEntity <Map<String, Boolean> >deleteEmployee(@PathVariable Long id){
		
		
		UserModel user = userRepository.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("User with id "+id+"does not exists"));
		
		userRepository.delete(user);
		
		Map<String, Boolean>  response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	
}
	
}