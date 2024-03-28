package restaurant.menu;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;

public class FoodTest {
  
  
  @Test
  public void foodTest() {
    Food food1 = new Food();
    Food food2 = new Food("burger");
    assertNotNull(food1);
    assertNotNull(food2);
  }
  
  @Test
  public void setFoodId() {
    Food food1 = new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
    food1.setFoodId(1l);
    assertEquals(1l,food1.getFoodId());
  }
  
  @Test
  public void toStringTest() {
    Food food1 = new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
    assertEquals("Menu [food = Burger, category Main, price 3.49]",food1.toString());
  }
}
