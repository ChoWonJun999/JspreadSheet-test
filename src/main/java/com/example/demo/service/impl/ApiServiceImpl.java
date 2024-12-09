package com.example.demo.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ApiDAO;
import com.example.demo.service.ApiService;

@Service("ApiService")
public class ApiServiceImpl implements ApiService {
    @Autowired
    private ApiDAO apiDao;

    public List<Map<String, Object>> selectAllData() throws Exception {
        return apiDao.selectAllData();
    }
}
