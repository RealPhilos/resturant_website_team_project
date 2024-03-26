package restaurant.login;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * This is to add out own querys for our database.
 * 
 * @author Krish Macwan - Zlac463
 */
public interface UserRepository extends JpaRepository<User, String> {

  // Method to find users by their role
  List<User> findByRole(String role);

  @Query("SELECT u FROM User u WHERE u.username = ?1")
  Optional<User> getUser(String username);

}

