package com.example.demo.employee;

import java.util.HashMap;
import java.util.List;
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
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all data
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/employees")
	public List <EmployeeModel> getAllEmployees(){
		return employeeRepository.findAll();
	}  
	
	
	
	//create 
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/employees")
	public EmployeeModel createEmployee(@RequestBody EmployeeModel employee)
	{
		return employeeRepository.save(employee);
	}
	
	
	// get data by id 
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/employees/{id}")
	public ResponseEntity<EmployeeModel> getByID(@PathVariable Long id) {
		EmployeeModel employee = employeeRepository.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("Employee with id "+id+"does not exists"));
		return ResponseEntity.ok(employee);
	}
	
	
	//update data 
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping ("/employees/{id}")
	public ResponseEntity<EmployeeModel> updateEmployeeByID(@PathVariable Long id, @RequestBody EmployeeModel employeeDetails){
		EmployeeModel employee = employeeRepository.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("Employee with id "+id+"does not exists"));
		
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmail(employeeDetails.getEmail());
		employee.setDepartment(employeeDetails.getDepartment());
		employee.setDesignation(employeeDetails.getDesignation());
		employee.setJoiningDate(employeeDetails.getJoiningDate());
		employee.setSalary(employeeDetails.getSalary());
		
		EmployeeModel updatedEmployee=employeeRepository.save(employee);
		
		return ResponseEntity.ok(updatedEmployee);
}
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/employees/{id}")
	public ResponseEntity <Map<String, Boolean> >deleteEmployee(@PathVariable Long id){
		
		
		EmployeeModel employee = employeeRepository.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("Employee with id "+id+"does not exists"));
		
		employeeRepository.delete(employee);
		
		Map<String, Boolean>  response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	
}
	
}