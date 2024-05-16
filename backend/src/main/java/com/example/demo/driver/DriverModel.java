package com.example.demo.driver;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity 
@Table(name="drivers")
public class DriverModel {
    
    public DriverModel() {}

    public DriverModel(String name, String category, String vehicleModel, String plateNumber, String yearOfIssue, String phoneNum, String license) {
        this.name = name;
        this.category = category;
        this.vehicleModel = vehicleModel;
        this.plateNumber = plateNumber;
        this.yearOfIssue = yearOfIssue;
        this.phoneNum = phoneNum;
        this.license = license;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long driverID;

    @Column(name="name")
    private String name;

    @Column(name="category")
    private String category;

    @Column(name="vehicleModel")
    private String vehicleModel;

    @Column(name="plateNumber")
    private String plateNumber;

    @Column(name="yearOfIssue")
    private String yearOfIssue;

    @Column(name="phoneNum")
    private String phoneNum;

    @Column(name="license")
    private String license;

    public long getDriverID() {
        return driverID;
    }

    public void setDriverID(long driverID) {
        this.driverID = driverID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getYearOfIssue() {
        return yearOfIssue;
    }

    public void setYearOfIssue(String yearOfIssue) {
        this.yearOfIssue = yearOfIssue;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }
}
