package restaurant.notification;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class NotificationServiceTest {
  @InjectMocks
  private NotificationService service;

  @Mock
  private NotificationRepository repository;


  @Test
  public void getItemsTest() {
    List<Notification> temp = new ArrayList<>();
    Notification notification1 = new Notification("Philip", "Table 1");
    temp.add(notification1);
    when(repository.findAll()).thenReturn(temp);
    assertEquals(temp, service.getItems());
  }

  @Test
  public void getNotificationByTableNumberTest() {
    List<Notification> temp = new ArrayList<>();
    Notification notification1 = new Notification("Philip", "Table 1");
    temp.add(notification1);
    when(repository.findByTableNumber("Table 1")).thenReturn(temp);
    assertEquals(temp, service.getNotificationByTableNumber("Table 1"));
  }

  @Test
  public void addNewNotificationTest() {
    Notification notification1 = new Notification("Philip", "Table 1");
    service.addNewNotification(notification1);
    Mockito.verify(repository, times(1)).save(notification1);
  }

  @Test
  public void removeNotificationTest1() {
    when(repository.existsById(1l)).thenReturn(false);
    try {
      service.removeNotification(1l);
    }catch(IllegalStateException e) {
      assertEquals("Notification with ID " + "1" + " does not exist",e.getMessage());
    }
  }

  @Test
  public void removeNotificationTest2() {
    when(repository.existsById(1l)).thenReturn(true);
    service.removeNotification(1l);
    Mockito.verify(repository, times(1)).deleteById(1l);;
  }

  @Test
  public void deleteNotificationsByTableNumberTest() {
    List<Notification> temp = new ArrayList<>();
    Notification notification1 = new Notification("Philip", "Table 1");
    temp.add(notification1);
    when(repository.findByTableNumber("Table 1")).thenReturn(temp);
    service.deleteNotificationsByTableNumber("Table 1");
    Mockito.verify(repository, times(1)).deleteAll(temp);
  }
  
  
  @Test
  public void updateNotificationStatusTest() {
    Notification notification1 = new Notification("Philip", "Table 1");
    when(repository.findById(1l)).thenReturn(Optional.ofNullable(notification1));
    service.updateNotificationStatus(1l, "done");
    Mockito.verify(repository, times(1)).save(notification1);
  }
}
