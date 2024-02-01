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

  public Food() {}

  public Food(int qty, String food) {
    this.qty = qty;
    this.name = food;
  }

  public Food(Long foodId, int qty, String name) {
    this.foodId = foodId;
    this.qty = qty;
    this.name = name;
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

  @Override
  public String toString() {
    return "Menu [food = " + name + ", qty = " + qty + "]";
  }

  public Long getFoodId() {
    return foodId;
  }

  public void setFoodId(Long foodId) {
    this.foodId = foodId;
  }
}
