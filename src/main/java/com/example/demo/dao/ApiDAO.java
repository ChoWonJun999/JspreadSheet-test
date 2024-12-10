package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ApiDAO {
    @Autowired
    protected SqlSessionTemplate sqlSession;

    public List<Map<String, Object>> selectInitData() {
        return sqlSession.selectList("api.selectInitData");
    }

    public List<Map<String, Object>> selectAllData() {
        return sqlSession.selectList("api.selectAllData");
    }

    public void insertData(Map<String, Object> param) {
        sqlSession.insert("api.insertData", param);
    }
}
