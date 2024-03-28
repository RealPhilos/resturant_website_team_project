package restaurant.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * A controller connecting the logic with the api.
 * 
 * @author Krish Macwan - Zlac463
 * @author Ahmed Alyami - Wlis021
 */

@RestController
@RequestMapping(path = "/user")
public class UserController {

  private UserService userservice;
  private final UserRepository userRepo;

  @Autowired
  public UserController(UserService userservice, UserRepository userRepo) {
    this.userservice = userservice;
    this.userRepo = userRepo;
  }

 


  /**
   * handler method for user login.
   * 
   * @param user is the object that will be checked.
   */
  @PostMapping("login")
  public User loginUser(@RequestBody User user) {
    if (userservice.checkUser(user)) {
      return (userRepo.getUser(user.getUsername()).get());
    }
    return null;
  }

  /**
   * handler method for waiter login.
   * 
   * @param user is the object that will be checked.
   */
  @PostMapping("waiter/login")
  public ResponseEntity<String> loginWaiter(@RequestBody User user) {
    if (userservice.checkWaiter(user)) {
      return new ResponseEntity<>("Login successful", HttpStatus.OK);
    }
    return new ResponseEntity<>("Login failed", HttpStatus.BAD_REQUEST);
  }

  /**
   * This will add a user to the database.
   * 
   * @param user is the object that will be created when the user makes a account.
   */
  @PostMapping("register")
  public ResponseEntity<String> registerUser(@RequestBody User user) {
    try {
      userservice.addUser(user);
      return new ResponseEntity<>("Register successful", HttpStatus.OK);
    } catch(Exception e) {
      System.out.println(e);
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
  }
}
