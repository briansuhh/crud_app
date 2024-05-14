package com.example.demo.adminController;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.example.demo.adminModel.adminModel;
import com.example.demo.adminRepository.adminRepository;


@RestController
@RequestMapping("/api/v1/")
public class adminController {
	
	
	@Autowired
	private adminRepository repo;

	
	//get all data		
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/admin")
	public List <adminModel> getAllAdmins(){
		return repo.findAll();
	}

	//create 
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/admin")
	public adminModel createAdmin(@RequestBody adminModel admin)
	{
		return repo.save(admin);
	}
	
	// get data by id
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/admin/{id}")
	public ResponseEntity<adminModel> getByID(@PathVariable Long id) {
		adminModel admin = repo.findById(id).orElseThrow(()-> new RuntimeException("Admin with id "+id+"does not exists"));
		return ResponseEntity.ok(admin);
	}

	//update data
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping ("/admin/{id}")
	public ResponseEntity<adminModel> updateAdmin(@PathVariable Long id, @RequestBody adminModel adminDetails){
		adminModel admin = repo.findById(id).orElseThrow(()-> new RuntimeException("Admin with id "+id+"does not exists"));

		admin.setAdminName(adminDetails.getAdminName());
		admin.setAdminPassword(adminDetails.getAdminPassword());

		adminModel updatedAdmin = repo.save(admin);

		return ResponseEntity.ok(updatedAdmin);
	}

	//delete data
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAdmin(@PathVariable Long id){
		adminModel admin = repo.findById(id).orElseThrow(()-> new RuntimeException("Admin with id "+id+"does not exists"));

		repo.delete(admin);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}
}
