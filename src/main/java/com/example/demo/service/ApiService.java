package com.example.demo.service;

import java.util.List;
import java.util.Map;

public interface ApiService {

    public List<Map<String, Object>> selectInitData() throws Exception;

    public List<Map<String, Object>> selectAllData() throws Exception;

    public void insertData(List<Map<String, Object>> params) throws Exception;
}
