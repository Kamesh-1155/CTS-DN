package com.cognizant.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoan(@PathVariable String number) {

        Map<String, Object> loan = new HashMap<>();

        loan.put("number", number);
        loan.put("type", "Home Loan");
        loan.put("amount", 500000);

        return loan;
    }
}