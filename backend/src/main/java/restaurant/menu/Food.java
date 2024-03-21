package restaurant.menu;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

/**
 * Represents an order at a restaurant.
 * 
 * @author Luque van der Merwe - ZLAC180
 * @author Philip Anaafi Asumadu -ZKAC229
 */

@Entity
@Table(name = "Menu")
public class Food {
  @Id
  @SequenceGenerator(name = "food_sequence", sequenceName = "food_sequence", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "food_sequence")
  private Long foodId;
  private String name;
  private String imgPath;
  private String description;
  private String category;
  private Double price;

  public Food() {}

  public Food(String food) {
    this.name = food;
  }

  /**
   * constructor method for the Food.
   *
   * @param name food name
   * @param imgPath path of the image
   * @param description description for the food
   * @param category category name for the food
   * @param price price of the food
   */
  public Food(String name, String imgPath, String description, String category, Double price) {
    this.name = name;
    this.imgPath = imgPath;
    this.description = description;
    this.category = category;
    this.price = price;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getImgPath() {
    return imgPath;
  }

  public void setImgPath(String imgPath) {
    this.imgPath = imgPath;
  }

  public String getCategory() {
    return this.category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public Double getPrice() {
    return this.price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "Menu [food = " + name + ", category " + category + ", price " + price + "]";
  }

  public Long getFoodId() {
    return foodId;
  }

  public void setFoodId(Long foodId) {
    this.foodId = foodId;
  }
}
