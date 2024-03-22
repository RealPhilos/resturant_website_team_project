package restaurant.login;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


/**
 * This holds the values of the users.
 * 
 * @author Krish Macwan - Zlac463
 */
@Entity
@Table(name = "Login")
public class User {

  @Id
  private String username;
  private String password;
  private String role;
  
  /**
   * Constructor for the user object.
   * 
   * @param username is a unique value for each user.
   * @param password is made by the user which is kept secret.
   * @param role is given by the restaurant owner.
   */
  public User(String username, String password, String role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public User(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public User() {}

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
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
    return "User [username=" + username + ", password=" + password + ", role=" + role + "]";
  }

}
