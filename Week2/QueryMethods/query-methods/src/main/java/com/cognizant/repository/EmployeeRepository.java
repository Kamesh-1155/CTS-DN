package com.cognizant.repository;

import com.cognizant.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // Search by containing text
    List<Employee> findByNameContainingIgnoreCase(String text);

    // Starting text
    List<Employee> findByNameStartingWith(String prefix);

    // Sorting
    List<Employee> findAllByOrderByNameAsc();

    // Greater than
    List<Employee> findBySalaryGreaterThan(Double salary);

    // Less than
    List<Employee> findBySalaryLessThan(Double salary);

    // Between dates
    List<Employee> findByJoiningDateBetween(LocalDate start, LocalDate end);

    // Top 3
    List<Employee> findTop3ByOrderBySalaryDesc();
}