package com.cognizant;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {
	public static void displayDate() {
    	ApplicationContext context =new ClassPathXmlApplicationContext("date-format.xml");
    	SimpleDateFormat sdf =context.getBean("dateFormat", SimpleDateFormat.class);
		System.out.println(sdf.format(new Date()));
}
	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayDate();
}
}
