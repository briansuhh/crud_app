package com.example.demo.adminRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.adminModel.AdminModel;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel, Long> {

}
