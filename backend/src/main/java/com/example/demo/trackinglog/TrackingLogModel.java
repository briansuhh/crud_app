package com.example.demo.trackinglog;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity 
@Table(name="trackinglogs")
public class TrackingLogModel {
	
	public TrackingLogModel() {}
	
	public TrackingLogModel(String date, String time, String location, String activity, String responsibility) {
		this.date = date;
		this.time = time;
		this.location = location;
		this.activity = activity;
		this.responsibility = responsibility;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long trackingID;
	
	@Column(name="date")
	private String date;

	@Column(name="time")
	private String time;

	@Column(name="location")
	private String location;

	@Column(name="activity")
	private String activity;

	@Column(name="responsibility")
	private String responsibility;

	public long getTrackingID() {
		return trackingID;
	}

	public void setTrackingID(long trackingID) {
		this.trackingID = trackingID;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public String getResponsibility() {
		return responsibility;
	}

	public void setResponsibility(String responsibility) {
		this.responsibility = responsibility;
	}
}
