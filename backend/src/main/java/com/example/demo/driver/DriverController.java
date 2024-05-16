package com.example.demo.driver;

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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class DriverController {

    @Autowired
    private DriverRepository driverRepository;
    
    // Get all drivers
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/drivers")
    public List<DriverModel> getAllDrivers() {
        return driverRepository.findAll();
    }

    // Create a new driver
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/drivers")
    public DriverModel createDriver(@RequestBody DriverModel driver) {
        return driverRepository.save(driver);
    }

    // Get driver by ID
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/drivers/{id}")
    public ResponseEntity<DriverModel> getDriverByID(@PathVariable Long id) {
        DriverModel driver = driverRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Driver with id " + id + " does not exist"));
        return ResponseEntity.ok(driver);
    }

    // Update driver by ID
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/drivers/{id}")
    public ResponseEntity<DriverModel> updateDriverByID(@PathVariable Long id, @RequestBody DriverModel driverDetails) {
        DriverModel driver = driverRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Driver with id " + id + " does not exist"));

        driver.setName(driverDetails.getName());
        driver.setCategory(driverDetails.getCategory());
        driver.setVehicleModel(driverDetails.getVehicleModel());
        driver.setPlateNumber(driverDetails.getPlateNumber());
        driver.setYearOfIssue(driverDetails.getYearOfIssue());
        driver.setPhoneNum(driverDetails.getPhoneNum());
        driver.setLicense(driverDetails.getLicense());

        DriverModel updatedDriver = driverRepository.save(driver);

        return ResponseEntity.ok(updatedDriver);
    }

    // Delete driver by ID
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/drivers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDriver(@PathVariable Long id) {
        DriverModel driver = driverRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Driver with id " + id + " does not exist"));

        driverRepository.delete(driver);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
