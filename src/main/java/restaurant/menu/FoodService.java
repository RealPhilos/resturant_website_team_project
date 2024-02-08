package restaurant.menu;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

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

  public void addNewFood(Food food) {
    Optional<Food> foodOptional = foodRepo.findByName(food.getName());
    if (foodOptional.isPresent()) {
      throw new IllegalStateException("Food already exists");
    }
    foodRepo.save(food);
  }

  public void deleteFood(Long foodId) {
    boolean exists = foodRepo.existsById(foodId);
    if (!exists) {
      throw new IllegalStateException("Food with ID " + foodId + " does not exist");
    }
    foodRepo.deleteById(foodId);
  }

  @Transactional
  public void updateFood(Long foodId, String foodName, String description, String category,
      Double price) {
    Food food = foodRepo.findById(foodId).orElseThrow(
        () -> new IllegalStateException("Food with ID " + foodId + " does not exist"));

    if (food != null && foodName != null &&food.getName().length() > 0
        && !Objects.equals(food.getName(), foodName)) {
      food.setName(foodName);
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
