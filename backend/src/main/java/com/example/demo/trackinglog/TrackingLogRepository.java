package com.example.demo.trackinglog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrackingLogRepository extends JpaRepository<TrackingLogModel, Long> {

}
