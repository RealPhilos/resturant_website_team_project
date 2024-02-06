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
      Food o3 = new Food(999, "Chicken Wings", " ", "Sides", 9.99);
      Food o4 = new Food(999, "Tacos", " ", "Main", 6.99);
      Food o5 = new Food(999, "Steak", " ", "Main", 12.99);
      Food o6 = new Food(999, "Salad", " ", "Sides", 5.99);
      repo.saveAll(List.of(o1, o2, o3, o4, o5, o6));
      System.out.println(o1.getFoodId());
      System.out.println(o1.getPrice());
    };
  }
}
