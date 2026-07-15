package com.cognizant.controller;

import com.cognizant.model.AuthenticationRequest;
import com.cognizant.model.AuthenticationResponse;
import com.cognizant.util.JwtUtil;

import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @PostMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest request) {

        if ("user".equals(request.getUsername())
                && "pwd".equals(request.getPassword())) {

            String token = JwtUtil.generateToken(request.getUsername());

            return new AuthenticationResponse(token);
        }

        throw new RuntimeException("Invalid Username or Password");
    }
}