package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TempController {

    @GetMapping("")
    public String hom() {
        return "home";
    }

    @GetMapping("tabulator")
    public String tabulator() {
        return "tabulator/test";
    }

    @GetMapping("jspreadsheet")
    public String test() {
        return "jspreadsheet/test";
    }
}
