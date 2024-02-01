package restaurant.menu;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FoodConfig {
  
  @Bean
  CommandLineRunner orderCommandLineRunner(FoodRepository repo) {
    return args -> {
      Food o1 = new Food(999, "Burger");
      Food o2 = new Food(999, "Pizza");
      repo.saveAll(List.of(o1, o2));
    };
  }
}

