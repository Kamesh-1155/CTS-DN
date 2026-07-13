package com.cognizant;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class SpringLearnApplication {
	public static void displayDate() {
		LOGGER.info("START");
    	ApplicationContext context =new ClassPathXmlApplicationContext("date-format.xml");
    	SimpleDateFormat sdf =context.getBean("dateFormat", SimpleDateFormat.class);
		Date date = new Date();
		LOGGER.debug("Current Date : {}", sdf.format(date));
		LOGGER.info("END");
}
	private static final Logger LOGGER =LoggerFactory.getLogger(SpringLearnApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayDate();
}
}
