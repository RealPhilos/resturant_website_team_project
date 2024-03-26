package restaurant.notif;

//import java.time.LocalDateTime;
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import restaurant.customer.User;
//import restaurant.customer.UserRepository;

/**
 * service class for notification.
 * @author kasim
 */
@Service
public class NotificationService {

//  private UserRepository userRepository;
//
//  @Autowired
//  public NotificationService(UserRepository userRepository) {
//    this.userRepository = userRepository;
//  }
//
//  public void sendNotificationToWaiters(String notificationContent) {
//    List<User> waiters = userRepository.findByRole("waiter"); // Assuming "WAITER" is the role
//                                                              // assigned to waiters
//    for (User waiter : waiters) {
//      // Create and send notification to each waiter
//      Notification notification = new Notification();
//      notification.setContent(notificationContent);
//      notification.setRecipient(waiter.getUsername());
//      notification.setTimestamp(LocalDateTime.now());
//
//      // You may implement the logic to send the notification to the waiter here
//      // For example, you could use WebSocket to send real-time notifications
//    }
//  }
}
