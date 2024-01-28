package restaurant.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepo;
  
  @Autowired
  public UserService(UserRepository userRepo) {
    this.userRepo = userRepo;
  }
  
  public boolean checkUser(User user) {
    if (userRepo.existsById(user.getUsername())) {
      return user.getPassword().equals(userRepo.getUser(user.getUsername()).get().getPassword());
    }else {
      return false;
    }
  }
}
