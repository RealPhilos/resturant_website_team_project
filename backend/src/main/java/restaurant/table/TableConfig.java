package restaurant.table;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import restaurant.menu.FoodRepository;

@Configuration
public class TableConfig {
	@Bean
	CommandLineRunner orderCommandLineRunner(FoodRepository repo) {
		return args -> {
			
		};
	}
}
