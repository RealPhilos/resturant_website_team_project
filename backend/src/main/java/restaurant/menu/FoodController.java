package restaurant.menu;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * FoodController class to handle the requests regarding food.
 * 
 * @author Zkac229 - Philip Anaafi Asumadu
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "foods")
public class FoodController {

  private final FoodService foodService;

  @Autowired
  public FoodController(FoodService foodService) {
    this.foodService = foodService;
  }

  @GetMapping
  public List<Food> getOrders() {
    return foodService.getFoods();
  }

  @PostMapping
  public void registerNewFood(@RequestBody Food food) {
    foodService.addNewFood(food);
  }

  @DeleteMapping(path = "{foodId}")
  public void deleteFood(@PathVariable("foodId") Long foodId) {
    foodService.deleteFood(foodId);
  }

  /**
   * update Order by using foodid.
   * 
   * @param foodId
   * 
   * @param foodBody
   * 
   */
  @PutMapping(path = "{foodId}")
  public void updateOrder(@PathVariable("foodId") Long foodId,
      @RequestBody(required = false) Map<String, Object> foodBody) {

    String food = (String) foodBody.get("name");
    String imgPath = (String) foodBody.get("imgPath");
    String description = (String) foodBody.get("description");
    String category = (String) foodBody.get("category");
    Double price = null;
    if (foodBody.get("price") != null) {
      price = Double.parseDouble((String) foodBody.get("price"));
    }
    // System.out.println("foodId: " + foodId);
    // System.out.println("food: " + food);
    // System.out.println("imgPath: " + imgPath);
    // System.out.println("description: " + description);
    // System.out.println("category: " + category);
    // System.out.println("price: " + price);
    foodService.updateFood(foodId, food, imgPath, description, category, price);
  }

}
