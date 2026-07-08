package com.cognizant;

import com.cognizant.entity.Country;
import com.cognizant.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {

        System.out.println("------ All Countries ------");
        countryService.getAllCountries().forEach(System.out::println);

        System.out.println("\n------ Find Country (IN) ------");
        System.out.println(countryService.getCountry("IN"));

        System.out.println("\n------ Adding Country ------");
        countryService.addCountry(new Country("BR", "Brazil"));

        System.out.println("\n------ Countries After Adding ------");
        countryService.getAllCountries().forEach(System.out::println);
        System.out.println("\n------ Updating Country ------");

        Country country = countryService.getCountry("IN");
        country.setName("Bharat");

        countryService.updateCountry(country);

        System.out.println("\n------ Countries After Updating ------");
        countryService.getAllCountries().forEach(System.out::println);

        System.out.println("\n------ Deleting Country BR ------");
        countryService.deleteCountry("BR");

        System.out.println("\n------ Countries After Deleting ------");
        countryService.getAllCountries().forEach(System.out::println);
        
        System.out.println("\n------ Search Countries containing 'an' ------");
        countryService.searchCountries("an").forEach(System.out::println);
    }
}