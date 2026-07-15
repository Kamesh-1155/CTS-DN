package com.cognizant.repository;

import java.util.List;

import com.cognizant.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // HQL Query
    @Query("FROM Employee")
    List<Employee> getAllEmployeesHQL();

    // Native SQL Query
    @Query(value = "SELECT * FROM employee", nativeQuery = true)
    List<Employee> getAllEmployeesNative();
}