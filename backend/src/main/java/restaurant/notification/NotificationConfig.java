package restaurant.notification;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


/**
 * Configuration class for initializing notifications and associating them with users.
 * 
 * @author Philip Anaafi Asumadu - zkac229
 */
@Configuration // Indicates that this class is a Spring configuration class.
public class NotificationConfig {

  /**
   * Initializes notifications and associates them with users.
   *
   * @param notificationRepository The repository for managing notifications.
   * @param userRepository The repository for managing users.
   * @return A CommandLineRunner for initializing notifications and user associations.
   */
  @Bean
  CommandLineRunner notificationDataInitializer(NotificationRepository notificationRepository) {
    return args -> {
      Notification notification1 = new Notification("Philip", "Table 1");
      Notification notification2 = new Notification("Krish", "Table 2");
      Notification notification3 = new Notification("Philip", "Table 1");
      Notification notification4 = new Notification("Krish", "Table 2");
      notification4.setStatus("done");


      notificationRepository
          .saveAll(List.of(notification1, notification2, notification3, notification4));
    };
  }
}
