package restaurant.notification;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class NotificationControllerTest {

  @Mock
  private NotificationService service;

  @InjectMocks
  private NotificationController controller;
  
  @Test
  public void getNotificationTest() {
    List<Notification> temp = new ArrayList<>();
    Notification notification1 = new Notification("Philip", "Table 1");
    temp.add(notification1);
    when(service.getItems()).thenReturn(temp);
    assertEquals(temp,controller.getNotifications());
  }
  
  @Test
  public void getItemsByTableNumberTest() {
    List<Notification> temp = new ArrayList<>();
    Notification notification1 = new Notification("Philip", "Table 1");
    temp.add(notification1);
    when(service.getNotificationByTableNumber("Table 1")).thenReturn(temp);
    assertEquals(temp,controller.getItemsByTableNumber("Table 1"));
  }
  
  @Test
  public void addNewNotificationTest() {
    Notification notification = new Notification("Philip", "Table 1");
    notification.setStatus("done");
    notification.setUsername("Phillip");
    notification.setTableNumber("Table 1");
    notification.getNotificationTime();
    Notification notification1 = new Notification(null, "Table 1");
    Notification notification2 = new Notification("Philip", null);
    assertEquals("Notification added successfully",controller.addNewNotification(notification));
    assertEquals("Please add an username",controller.addNewNotification(notification1));
    assertEquals("Please input a table number",controller.addNewNotification(notification2));
  }
  
  @Test
  public void updateOrderTest() {
    controller.updateOrder(1l,"waiting");
    Mockito.verify(service, times(1)).updateNotificationStatus(1l,"waiting");
  }
  
  @Test
  public void removeNotificationTest() {
    assertEquals("Item canceled successfully",controller.removeNotification(1l));
    Mockito.verify(service, times(1)).removeNotification(1l);
  }
  
  @Test
  public void deleteItemsByUsernameTest() {
    assertEquals("Items canceled successfully",controller.deleteItemsByUsername("Table 1"));
    Mockito.verify(service, times(1)).deleteNotificationsByTableNumber("Table 1");
  }
}
