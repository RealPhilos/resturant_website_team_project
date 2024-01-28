package restaurant.login;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User,String> {

  @Query("SELECT u FROM User u WHERE u.username = ?1")
  Optional<User>getUser(String username);
}
