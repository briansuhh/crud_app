package com.example.demo.userRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.userModel.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{

}
