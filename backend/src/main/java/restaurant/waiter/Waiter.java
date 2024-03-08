package restaurant.waiter;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;
import restaurant.order.Item;

@Entity
@Table(name = "Waiter")
public class Waiter {
  @Id
  private String username;
  private String password;
  private String role;
  //marks the items field as the managed side of the relationship with Item entities for JSON format
  @JsonManagedReference
  @OneToMany(mappedBy = "Waiter")//one-to-many relationship between Waiter and Item entities.
  private List<Item> items;

  /**
   * Constructor for the Waiter object.
   * 
   * @param username is a unique value for each Waiter which is also a key.
   * @param password is made by the Waiter which is kept secret.
   * @param role is given by the restaurant owner.
   */
  public Waiter(String username, String password, String role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public Waiter(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public Waiter() {}

  public List<Item> getItems() {
    return items;
  }

  public void setItems(List<Item> items) {
    this.items = items;
  }

  public String getUsername() {
    return username;
  }

  public void setWaitername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  @Override
  public String toString() {
    return "Waiter [Waitername=" + username + ", password=" + password + ", role=" + role + "]";
  }

}
