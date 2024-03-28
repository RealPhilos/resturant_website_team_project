package restaurant.menu;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class FoodServiceTest {
  @InjectMocks
  private FoodService service;

  @Mock
  private FoodRepository repository;

  @Test
  public void getFoodsTest() {
    when(repository.findAll()).thenReturn(Stream.of(new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49)).collect(Collectors.toList()));
        assertEquals(1,service.getFoods().size());
  }

  @Test
  public void addNewFoodsTest1() {
    Food food1 = new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
    service.addNewFood(food1);
    Mockito.verify(repository, times(1)).save(food1);
  }

  @Test
  public void addNewFoodsTest2() {
    Food food1 = new Food("Burger", "/burger.jpeg",
        "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
    when(repository.findByName(food1.getName())).thenReturn(Optional.ofNullable(food1));
    try {
      service.addNewFood(food1);
    } catch (IllegalStateException e) {
      System.out.print(e);
    }
  }


  @Test
  public void deleteFoodTest1() {
    when(repository.existsById(1l)).thenReturn(true);
    assertAll(() -> service.deleteFood(1l));
    
  }

  @Test
  public void deleteFoodTest2() {
    try {
      service.deleteFood(1l);
    } catch (IllegalStateException e) {
      assertEquals("Food with ID " + "1" + " does not exist",e.getMessage());
    }
  }
  
  @Test
  public void updateFoodTest1() {
    try {
      Food food1 = new Food("Burger", "/burger.jpeg",
          "Ingredients - Beef patty, Cheddar cheese, Lettuce, Tomato, Onion", "Main", 3.49);
      when(repository.findById(1l)).thenReturn(Optional.ofNullable(food1));
      service.updateFood(1l, "pizza", "/pizza.jpeg", "Ingredients - pizza bread, Cheddar cheese, Lettuce, Tomato, Onion", "side", 2.00);
    }catch( IllegalStateException e) {
      assertEquals("Food with ID " + "1" + " does not exist",e.getMessage());
    }
  }
}
