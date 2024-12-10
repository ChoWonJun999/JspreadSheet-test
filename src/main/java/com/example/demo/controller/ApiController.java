package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ApiService;

@RestController
@RequestMapping("/api/")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("selectInitData")
    public ResponseEntity<?> selectInitData() {
        try {
            Map<String, Object> data = new HashMap<String, Object>();

            data.put("data", apiService.selectInitData());
            data.put("currentRevisionCnt", 0);

            return ResponseEntity.ok(data);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("실패");
        }
    }

    @GetMapping("data")
    public ResponseEntity<?> selectAllData() {
        try {
            List<Map<String, Object>> data = apiService.selectAllData();

            return ResponseEntity.ok(data);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("실패");
        }
    }

    @PostMapping("save")
    public ResponseEntity<?> insertData(@RequestBody List<Map<String, Object>> params) {
        try {
            apiService.insertData(params);

            return ResponseEntity.ok("");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("실패");
        }
    }
}
