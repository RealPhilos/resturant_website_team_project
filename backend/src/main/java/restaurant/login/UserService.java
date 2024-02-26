package restaurant.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * This is where all the logic happens.
 * 
 * @author Krish Macwan - Zlac463
 */
@Service
public class UserService {

  private final UserRepository userRepo;

  @Autowired
  public UserService(UserRepository userRepo) {
    this.userRepo = userRepo;
  }

  /**
   * Checks if a user is already in the data base.
   * 
   * @param user is what we are checking for.
   * @return true if user is in the database.
   */
  public boolean checkUser(User user) {
    if (userRepo.existsById(user.getUsername())) {
      return user.getPassword().equals(userRepo.getUser(user.getUsername()).get().getPassword());
    } else {
      return false;
    }
  }

  /**
   * This is to add a user to the database and it knows if it is a customer.
   * 
   * @param user the user to be added.
   */
  public void addUser(User user) {
    User temp;
    if (user.getRole() == null) {
      temp = new User(user.getUsername(), user.getPassword(), "Customer");
    } else {
      temp = new User(user.getUsername(), user.getPassword(), user.getRole());
    }
    userRepo.save(temp);
  }
}
