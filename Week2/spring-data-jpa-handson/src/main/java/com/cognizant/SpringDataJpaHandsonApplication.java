package com.cognizant;

import com.cognizant.entity.Employee;
import com.cognizant.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringDataJpaHandsonApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService service;

    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaHandsonApplication.class, args);
    }

    @Override
    public void run(String... args) {

        System.out.println("===== HQL Query =====");

        for (Employee emp : service.getEmployeesUsingHQL()) {
            System.out.println(emp.getId() + "  "
                    + emp.getName() + "  "
                    + emp.getSalary());
        }

        System.out.println();

        System.out.println("===== Native SQL Query =====");

        for (Employee emp : service.getEmployeesUsingNativeQuery()) {
            System.out.println(emp.getId() + "  "
                    + emp.getName() + "  "
                    + emp.getSalary());
        }
    }
}