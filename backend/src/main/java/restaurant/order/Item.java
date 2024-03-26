package restaurant.order;


import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PostPersist;
import jakarta.persistence.Table;
import java.time.LocalDateTime;


/**
 * Represents an item ordered in a restaurant.
 * 
 * @author Malcolm Berset - Zlac157
 * @author Luque van der Merwe - ZLAC180
 */
@Entity // Indicates that this class is an entity to be managed by JPA.
@Table(name = "Orders") // Specifies the name of the database table to map to.
public class Item {

  @Id // Indicates that this field is the primary key of the entity.
  @GeneratedValue(strategy = GenerationType.IDENTITY) // Specifies how the ID should be generated.
  private Long id; // Unique identifier for the item.
  private String name;
  private Integer quantity;
  private String tableNumber;
  private LocalDateTime orderTime; // Timestamp when the item was ordered.

  @Enumerated(EnumType.STRING) // This will store the enum value as a string in the database
  private OrderStatus orderStatus; // Status of the order.
  private String username;

  // Default constructor
  public Item() {}

  /**
   * Item constructor.
   */
  public Item(String name, Integer quantity, String tableNumber, String username) {
    this.name = name;
    this.quantity = quantity;
    this.tableNumber = tableNumber;
    this.username = username;
    this.orderStatus = OrderStatus.ORDERED;
  }

  // Getters and Setters

  public void setStatus(String status) {
    System.out.println(OrderStatus.convertFromString(status));
    this.orderStatus = OrderStatus.convertFromString(status);
  }

  public OrderStatus getStatus() {
    return orderStatus;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public String getTableNumber() {
    return tableNumber;
  }

  public void setTableNumber(String tableNumber) {
    this.tableNumber = tableNumber;
  }

  public LocalDateTime getOrderTime() {
    return orderTime;
  }

  // Automatically set order time just before persisting
  @PostPersist // This method is executed after an entity is persisted to the database.
  protected void onPrePersist() {
    this.orderTime = LocalDateTime.now(); // Set the current timestamp as the order time.
  }


  @Override
  public String toString() {
    return "Item{" + "id= " + id + ", name= " + name + ", quantity= " + quantity + ", tableNumber= "
        + tableNumber + ", orderTime= " + orderTime + ", orderStatus= " + orderStatus
        + ", username= " + username + '}';
  }
}

