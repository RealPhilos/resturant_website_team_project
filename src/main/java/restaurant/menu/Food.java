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
@Table
public class Food {
  @Id
  @SequenceGenerator(name = "food_sequence", sequenceName = "food_sequence", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "food_sequence")
  private Long foodId;
  private int qty;
  private String name;
  private String description;
  private String category;
  private Double price;

  public Food() {}

  public Food(int qty, String food) {
    this.qty = qty;
    this.name = food;
  }

  public Food(int qty, String name, String description, String category, Double price) {
    this.qty = qty;
    this.name = name;
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

  public int getQty() {
    return qty;
  }

  public void setQty(int qty) {
    this.qty = qty;
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
    return "Menu [food = " + name + ", qty = " + qty + ", category " + category + ", price " + price + "]";
  }

  public Long getFoodId() {
    return foodId;
  }

  public void setFoodId(Long foodId) {
    this.foodId = foodId;
  }
}
