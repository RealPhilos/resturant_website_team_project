package restaurant.notification;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller class for managing notification-related requests.
 * 
 * @Author Philip Anaafi Asumadu - zkac229
 */

@RestController
@RequestMapping(path = "/notification")
public class NotificationController {
  /**
   * Calling the NotificationService class.
   */
  private final NotificationService notificationService;

  // This NotificationService is injected into ItemController
  // Indicates that NotificationService will be instantiated and injected into the
  // controller.
  @Autowired
  public NotificationController(NotificationService notificationService) {
    this.notificationService = notificationService;
  }

  /**
   * Get a list of notifications in JSON format.
   *
   * @return List of Notifications.
   */
  @GetMapping
  public List<Notification> getNotifications() {
    return notificationService.getItems();
  }


  /**
   * Retrieves all notification ordered by a specific table.
   * 
   * 
   * @param tableNumber the table number of the table whose notification are to be retrieved.
   * @return list of objects ordered by the specified table in JSON format.
   */
  @GetMapping("getByTable/{tableNumber}")
  public List<Notification> getItemsByTableNumber(@PathVariable String tableNumber) {
    return notificationService.getNotificationByTableNumber(tableNumber);
  }

  /**
   * Add a new notification based on the provided request body.
   *
   * @param notification The notification to be added.
   * @return A success message if the notification is added successfully, or an error message if any
   *         required field is missing.
   */
  @PostMapping(path = "add")
  public String addNewNotification(@RequestBody Notification notification) {

    if (notification.getUsername() == null) {
      return "Please add an username";
    }
    if (notification.getStatus() == null) {
      return "Please input a quantity";
    }
    if (notification.getTableNumber() == null) {
      return "Please input a table number";
    }

    notificationService.addNewNotification(notification);
    return "Notification added successfully";
  }


  /**
   * Change the status of the notification.
   *
   * @param notificationId path variable orderId
   * @param status the updated notification
   */
  @PutMapping(path = "{notificationId}")
  public void updateOrder(@PathVariable("notificationId") Long notificationId,
      @RequestBody String status) {

    System.out.println("Controller value: " + status);
    notificationService.updateNotificationStatus(notificationId, status);
  }

  /**
   * Delete an notification by its ID.
   *
   * @param notificationId The ID of the notification to be canceled.
   * @return A success message if the notification is canceled successfully.
   */
  @DeleteMapping(path = "deleteItemById/{notificationId}")
  public String removeNotification(@PathVariable("notificationId") Long notificationId) {
    notificationService.removeNotification(notificationId);
    return "Item canceled successfully";
  }

  /**
   * Deletes all notifications associated with a given table number.
   *
   * @param tableNumber The table number of the notification to be deleted.
   * @return A success message if the notifications are deleted successfully.
   */
  @DeleteMapping(path = "deleteItemsByUser/{tableNumber}")
  public String deleteItemsByUsername(@PathVariable("tableNumber") String tableNumber) {
    notificationService.deleteNotificationsByTableNumber(tableNumber);
    return "Items canceled successfully";
  }
}


