package restaurant.menu;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * FoodConfig class to add configurations to the food controller.
 */
@Configuration
public class FoodConfig {

  @Bean
  CommandLineRunner orderCommandLineRunner(FoodRepository repo) {
    return args -> {
      Food o1 = new Food("Burger", "", "", "Main", 3.49);
      Food o2 = new Food("Pizza", "", "", "Main", 5.29);
      Food o3 = new Food("Chicken Wings", "src/resources/SOMEIMAGE.jpg", " ", "Sides", 9.99);
      Food o4 = new Food("Tacos", "src/resources/SOMEIMAGE.jpg", " ", "Main", 6.99);
      Food o5 = new Food("Steak", "src/resources/SOMEIMAGE.jpg", " ", "Main", 12.99);
      Food o6 = new Food("Salad", "src/resources/SOMEIMAGE.jpg", " ", "Sides", 5.99);
      repo.saveAll(List.of(o1, o2, o3, o4, o5, o6));
      System.out.println(o1.getFoodId());
      System.out.println(o1.getPrice());
    };
  }
}
