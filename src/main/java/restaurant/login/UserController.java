package restaurant.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/login")
public class UserController {

  private UserService userservice;
  
  @Autowired
  public UserController(UserService userservice) {
    this.userservice = userservice;
  }
  
  @GetMapping("check")
  public boolean checkUser(@RequestBody User user) {
    return userservice.checkUser(user);
  }
  
  @PostMapping("add")
  public void addUser(@RequestBody User user) {
    if( !checkUser(user)) {
      
    }
  }
}
