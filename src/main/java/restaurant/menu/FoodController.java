package restaurant.menu;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
  
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

  @PutMapping(path = "{foodId}")
  public void updateOrder(@PathVariable("foodId") Long foodId,
      @RequestParam(required = false) String food, 
      @RequestParam(required = false) String imgPath, 
      @RequestParam(required = false) String description, 
      @RequestParam(required = false) String category, 
      @RequestParam(required = false) Double price){
    foodService.updateFood(foodId, food,imgPath,description, category, price);

  }


}
