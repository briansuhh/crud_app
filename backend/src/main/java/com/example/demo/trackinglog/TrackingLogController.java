package com.example.demo.trackinglog;

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
public class TrackingLogController {

    @Autowired
    private TrackingLogRepository trackingLogRepository;

    // Get all tracking logs
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/trackinglogs")
    public List<TrackingLogModel> getAllTrackingLogs() {
        return trackingLogRepository.findAll();
    }

    // Create tracking log
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/trackinglogs")
    public TrackingLogModel createTrackingLog(@RequestBody TrackingLogModel trackingLog) {
        return trackingLogRepository.save(trackingLog);
    }

    // Get tracking log by id
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/trackinglogs/{id}")
    public ResponseEntity<TrackingLogModel> getTrackingLogByID(@PathVariable Long id) {
        TrackingLogModel trackingLog = trackingLogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("TrackingLog with id " + id + " does not exist"));
        return ResponseEntity.ok(trackingLog);
    }

    // Update tracking log
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/trackinglogs/{id}")
    public ResponseEntity<TrackingLogModel> updateTrackingLogByID(@PathVariable Long id, @RequestBody TrackingLogModel trackingLogDetails) {
        TrackingLogModel trackingLog = trackingLogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("TrackingLog with id " + id + " does not exist"));

        trackingLog.setDate(trackingLogDetails.getDate());
        trackingLog.setTime(trackingLogDetails.getTime());
        trackingLog.setLocation(trackingLogDetails.getLocation());
        trackingLog.setActivity(trackingLogDetails.getActivity());
        trackingLog.setResponsibility(trackingLogDetails.getResponsibility());

        TrackingLogModel updatedTrackingLog = trackingLogRepository.save(trackingLog);

        return ResponseEntity.ok(updatedTrackingLog);
    }

    // Delete tracking log
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/trackinglogs/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTrackingLog(@PathVariable Long id) {
        TrackingLogModel trackingLog = trackingLogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("TrackingLog with id " + id + " does not exist"));

        trackingLogRepository.delete(trackingLog);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
