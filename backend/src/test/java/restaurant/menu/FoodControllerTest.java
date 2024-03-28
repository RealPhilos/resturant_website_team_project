package restaurant.menu;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;


@ExtendWith(MockitoExtension.class)
public class FoodControllerTest {

  @Mock
  private FoodService service;

  @InjectMocks
  private FoodController controller;

  @Test
  public void getOrdersTest() {
    Food food1 = new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
    List<Food> temp = new ArrayList<>();
    temp.add(food1);
    when(service.getFoods()).thenReturn(temp);
    assertEquals(temp, controller.getOrders());
  }


  @Test
  public void registerNewFoodTest() {
    Food food1 = new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
    controller.registerNewFood(food1);
    Mockito.verify(service, times(1)).addNewFood(food1);
  }

  @Test
  public void deleteFoodTest() {
    Food food1 = new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
    controller.deleteFood(food1.getFoodId());
    Mockito.verify(service, times(1)).deleteFood(food1.getFoodId());
  }

  @Test
  public void updateOrderTest() {
    Map<String, Object> temp = new HashMap<>();
    temp.put("name", "Burger");
    temp.put("imgPath", "/burger.jpeg");
    temp.put("description", "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion");
    temp.put("category", "Main");
    temp.put("price", "3.4");
    controller.updateOrder(1l,temp);
    Mockito.verify(service, times(1)).updateFood(1l, "Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.4);
  }
}
