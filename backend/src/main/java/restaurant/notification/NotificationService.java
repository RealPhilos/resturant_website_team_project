package restaurant.notification;

import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


// import jakarta.persistence.Entity;

/**
 * service class for call waiter.
 * 
 * @author Philip Anaafi Asumadu - zkac229
 * @author Kasim -zjac003
 */
@Service
public class NotificationService {
  private final NotificationRepository notificationRepository;

  @Autowired // Injects the ItemRepository bean into the service.
  public NotificationService(NotificationRepository notificationRepository) {
    this.notificationRepository = notificationRepository;
  }

  /**
   * Retrieves a list of all notifications.
   *
   * @return A list of notifications.
   */
  public List<Notification> getItems() {
    return notificationRepository.findAll();
  }

  public List<Notification> getNotificationByTableNumber(String tableNumber) {
    return notificationRepository.findByTableNumber(tableNumber);
  }



  /**
   * Adds a new notification and saves it to the repository.
   *
   * @param notification The notification to be added.
   */
  public void addNewNotification(Notification notification) {
    notificationRepository.save(notification);
    System.out.println(notification);
  }

  /**
   * Cancels an notification by its ID.
   *
   * @param notificationId The ID of the notification to be canceled.
   * @throws IllegalStateException if the notification with the specified ID does not exist.
   */
  public void removeNotification(Long notificationId) {
    boolean exists = notificationRepository.existsById(notificationId);
    if (!exists) {
      throw new IllegalStateException("Notification with ID " + notificationId + " does not exist");
    }
    notificationRepository.deleteById(notificationId);
  }

  /**
   * Deletes all notifications associated with a specific tableNumber.
   *
   * @param tableNumber The tableNumber for which notifications should be deleted.
   */
  public void deleteNotificationsByTableNumber(String tableNumber) {
    List<Notification> notificationsToDelete =
        notificationRepository.findByTableNumber(tableNumber);
    notificationRepository.deleteAll(notificationsToDelete);
  }

  /**
   * method for updating the notification entity based on the id.
   * 
   * @param notificationId id of the notification
   * @param status status of the notification
   */
  @Transactional
  public void updateNotificationStatus(Long notificationId, String status) {
    Notification notification = notificationRepository.findById(notificationId).orElseThrow(
        () -> new IllegalStateException("Item with ID " + notificationId + " does not exist"));

    if (status != null) {
      notification.setStatus(status);
    }

    notificationRepository.save(notification);
  }

}
