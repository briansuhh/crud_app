package com.example.demo.admin;

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

import com.example.demo.exception.ResourceNotFoundException;


@RestController
@RequestMapping("/api/v1/")
public class AdminController {
	
	
	@Autowired
	private AdminRepository repo;

	
	//get all data		
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/admin")
	public List <AdminModel> getAllAdmins(){
		return repo.findAll();
	}

	//create 
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/admin")
	public AdminModel createAdmin(@RequestBody AdminModel admin)
	{
		return repo.save(admin);
	}
	
	// get data by id
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/admin/{id}")
	public ResponseEntity<AdminModel> getByID(@PathVariable Long id) {
		AdminModel admin = repo.findById(id).orElseThrow(()-> new RuntimeException("Admin with id "+id+"does not exists"));
		return ResponseEntity.ok(admin);
	}

	//update data
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping ("/admin/{id}")
	public ResponseEntity<AdminModel> updateAdmin(@PathVariable Long id, @RequestBody AdminModel adminDetails){
		AdminModel admin = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Admin with id "+id+"does not exists"));

		admin.setAdminName(adminDetails.getAdminName());
		admin.setAdminPassword(adminDetails.getAdminPassword());

		AdminModel updatedAdmin = repo.save(admin);

		return ResponseEntity.ok(updatedAdmin);
	}

	//delete data
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAdmin(@PathVariable Long id){
		AdminModel admin = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Admin with id "+id+"does not exists"));

		repo.delete(admin);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}
}
