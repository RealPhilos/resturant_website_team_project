package restaurant.notification;


import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PostPersist;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

/**
 * model class for notification.
 * 
 * @author Philip Anaafi Asumadu - zkac229
 * @author Kasim - zjac003
 */
@Entity // Indicates that this class is an entity to be managed by JPA.
@Table(name = "Notification") // Specifies the name of the database table to map to.

public class Notification {

  @Id // Indicates that this field is the primary key of the entity.
  @GeneratedValue(strategy = GenerationType.IDENTITY) // Specifies how the ID should be generated.
  private Long id; // Unique identifier for the notification.
  private String username; // user of recipient waiter
  private String tableNumber; // table number of the customer
  private LocalDateTime notificationTime;

  @Enumerated(EnumType.STRING) // This will store the enum value as a string in the database
  private NotificationStatus notificationStatus; // Status of the Notification.

  public Notification() {

  }

  /**
   * constructor method for notification.,
   *
   * @param username Customer who called waiter
   * @param tableNumber table number of the customer
   */
  public Notification(String username, String tableNumber) {
    this.username = username;
    this.tableNumber = tableNumber;
    this.notificationStatus = NotificationStatus.WAITING;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getTableNumber() {
    return tableNumber;
  }

  public void setStatus(String status) {
    this.notificationStatus = NotificationStatus.convertFromString(status);
  }

  public NotificationStatus getStatus() {
    return notificationStatus;
  }

  public void setTableNumber(String tableNumber) {
    this.tableNumber = tableNumber;
  }



  public LocalDateTime getNotificationTime() {
    return notificationTime;
  }

  // Automatically set order time just before persisting
  @PostPersist // This method is executed after an entity is persisted to the database.
  protected void onPrePersist() {
    this.notificationTime = LocalDateTime.now(); // Set the current timestamp as the order time.
  }



  @Override
  public String toString() {
    return "Notification{" + "customer='" + username + ", status='" + notificationStatus
        + ", notification time=" + notificationTime + '}';
  }
}
