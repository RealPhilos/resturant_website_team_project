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

      Food o1 = new Food("Burger", "/burger.jpeg",
          "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion | Allegens - Gluten | Calories - 213 ", "Main", 3.49);
      Food o2 = new Food("Pizza", "/pizza.jpeg",
          "Ingredients - Pizza dough, Mozzarella cheese, Tomato sauce, Pepperoni, Basil | Allegens - Gluten | Calories - 213 ", "Main",
          5.29);
      Food o3 = new Food("Chicken Wings", "/chicken.jpeg",
          "Ingredients - Chicken wings, Hot sauce, Butter, Garlic powder, Salt | Allegens - Gluten | Calories - 522 ", "Sides", 9.99);
      Food o4 = new Food("Tacos", "/tacos.jpeg",
          "Ingredients - Corn tortillas, Shredded chicken, Cheddar cheese, Salsa, Lettuce | Calories - 432 ", "Main",
          6.99);
      Food o5 = new Food("Steak", "/steak.jpeg",
          "Ingredients - Ribeye steak, Salt, Black pepper, Garlic, Butter | Calories - 352 ", "Main", 12.99);
      Food o6 = new Food("Salad", "/salad.jpeg",
          "Ingredients - Mixed greens, Cherry tomatoes, Cucumber, Red onion, Feta cheese | Allegens - Dairy | Calories - 324 ", "Sides",
          5.99);
      repo.saveAll(List.of(o1, o2, o3, o4, o5, o6));
      System.out.println(o1.getFoodId());
      System.out.println(o1.getPrice());
    };
  }
}
