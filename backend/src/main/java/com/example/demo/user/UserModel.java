package com.example.demo.user;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;


@Entity 
@Table(name="users")
public class UserModel {
	
	public UserModel() {}
	
	public UserModel(String firstName, String lastName, String phoneNum, String email, String address, String role, String responsibility) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNum = phoneNum; 
		this.email = email;
		this.address = address;
		this.role = role;
		this.responsibility = responsibility;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userID;
	
	@Column(name="firstName")
	private String firstName;

	@Column(name="lastName")
	private String lastName;

	@Column(name="phoneNum")
	private String phoneNum;

	@Column(name="email")
	private String email;

	@Column(name="address")
	private String address;

	@Column(name="role")
	private String role;

	@Column(name="responsibility")
	private String responsibility;


	public long getUserID() {
		return userID;
	}
	public void setId(long userID) {
		this.userID = userID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getResponsibility() {
		return responsibility;
	}

	public void setResponsibility(String responsibility) {
		this.responsibility = responsibility;
	}


}