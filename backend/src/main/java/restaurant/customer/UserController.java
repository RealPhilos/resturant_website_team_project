package restaurant.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * A controller connecting the logic with the api.
 * 
 * @author Krish Macwan - Zlac463
 */
@RestController
@RequestMapping(path = "/customer")
public class UserController {

  private UserService userservice;

  @Autowired
  public UserController(UserService userservice) {
    this.userservice = userservice;
  }

  @PostMapping("login")
  public boolean loginUser(@RequestBody User user) {
    return userservice.checkUser(user);
  }

  /**
   * This will add a user to the database.
   * 
   * @param user is the object that will be created when the user makes a account.
   */
  @PostMapping("register")
  public String addUser(@RequestBody User user) {
    if (!loginUser(user)) {
      userservice.addUser(user);
      return "User added";
    } else {
      return "Username already in use";
    }
  }
}
