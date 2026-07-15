package com.cognizant.service;

import java.util.List;

import com.cognizant.entity.Employee;
import com.cognizant.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getEmployeesUsingHQL() {
        return repository.getAllEmployeesHQL();
    }

    public List<Employee> getEmployeesUsingNativeQuery() {
        return repository.getAllEmployeesNative();
    }
}