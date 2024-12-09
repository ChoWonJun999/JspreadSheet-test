package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ApiService;

@RestController
@RequestMapping("/api/")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("data")
    public ResponseEntity<?> data() {
        try {
            List<Map<String, Object>> data = apiService.selectAllData();

            return ResponseEntity.ok(data);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("실패");
        }
    }
}