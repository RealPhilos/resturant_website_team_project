package restaurant.login;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * This is to pre-make a table.
 * 
 * @author Krish Macwan - Zlac463
 */
@Configuration
public class UserConfig {

  @Bean
  CommandLineRunner commandLineRunner(UserRepository repository) {
    return args -> {
      User krish = new User("Krish", "123", "Customer");
      User luque = new User("Luque", "123", "Chef");
      User malcolm = new User("Malcolm", "123", "Customer");
      User philip = new User("Philip", "123", "Chef");
      User parvesh = new User("Parvesh", "123", "Waiter");
      User ahmed = new User("Ahmed", "123", "Waiter");
      repository.saveAll(List.of(krish, luque, malcolm, philip, parvesh, ahmed));
    };
  }
}
