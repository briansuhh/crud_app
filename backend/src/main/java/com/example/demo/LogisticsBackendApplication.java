package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
public class LogisticsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LogisticsBackendApplication.class, args);
	}

}
