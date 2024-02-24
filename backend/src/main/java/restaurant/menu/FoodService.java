package restaurant.menu;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * FoodService class to access data layer regarding food.
 */
@Service
public class FoodService {

  private final FoodRepository foodRepo;

  @Autowired
  public FoodService(FoodRepository foodRepo) {
    this.foodRepo = foodRepo;
  }

  public List<Food> getFoods() {
    return foodRepo.findAll();
  }

  /**
   * method for adding new food to the database.
   * @param food food object to be added.
   */
  public void addNewFood(Food food) {
    Optional<Food> foodOptional = foodRepo.findByName(food.getName());
    if (foodOptional.isPresent()) {
      throw new IllegalStateException("Food already exists");
    }
    foodRepo.save(food);
  }

  /**
   * method for deleting a food entity from the database.
   * @param foodId id of the food to be deleted
   */
  public void deleteFood(Long foodId) {
    boolean exists = foodRepo.existsById(foodId);
    if (!exists) {
      throw new IllegalStateException("Food with ID " + foodId + " does not exist");
    }
    foodRepo.deleteById(foodId);
  }

  /**
   * method for updating the food entity based on the id.
   * @param foodId id of the food
   * @param foodName name of the food
   * @param imgPath path of the image for the food
   * @param description description 
   * @param category category 
   * @param price price 
   */
  @Transactional
  public void updateFood(Long foodId, String foodName, String imgPath, String description,
      String category, Double price) {
    Food food = foodRepo.findById(foodId)
        .orElseThrow(() -> new IllegalStateException("Food with ID " + foodId + " does not exist"));

    if (food != null && foodName != null && food.getName().length() > 0
        && !Objects.equals(food.getName(), foodName)) {
      food.setName(foodName);
    }

    if (imgPath != null && imgPath.length() > 0 && !Objects.equals(food.getImgPath(), imgPath)) {
      food.setImgPath(imgPath);
    }

    if (description != null && description.length() > 0
        && !Objects.equals(food.getDescription(), description)) {
      food.setDescription(description);
    }

    if (category != null && category.length() > 0
        && !Objects.equals(food.getCategory(), category)) {
      food.setCategory(category);
    }

    if (price != null && price > 0 && !Objects.equals(food.getPrice(), price)) {
      food.setPrice(price);
    }


  }
}
