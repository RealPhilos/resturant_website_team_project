package restaurant.order;


import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import restaurant.menu.Food;

/**
 * Represents an order at a restaurant.
 * 
 * @author Luque van der Merwe - ZLAC180
 */

@Entity
@Table
public class Order {
  @Id
  @SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence",
      allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_sequence")
  private Long TableId;

  private ArrayList<Food> foodList = new ArrayList<Food>();


  public Order() {}

  public Order(Long TableId, ArrayList<Food> foodList) {
    this.foodList = foodList;
  }

  public ArrayList<Food> getFoodList() {
    return foodList;
  }

  public void setFoodList(ArrayList<Food> foodList) {
    this.foodList = foodList;
  }

  public Long getTableId() {
    return TableId;
  }

  public void setTableId(Long tableId) {
    TableId = tableId;
  }

  @Override
  public String toString() {
    return "Order [foodList = " + foodList + ", TableId = " + TableId + "]";
  }



}
