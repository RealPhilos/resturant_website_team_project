package restaurant.login;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

  @Mock
  private UserRepository repository;

  @InjectMocks
  private UserService service;


  @Test
  public void checkUserTest() {
    User krish = new User("Krish", "123", "Customer");
    when(repository.existsById(krish.getUsername())).thenReturn(true);
    when(repository.getUser(krish.getUsername())).thenReturn(Optional.ofNullable(krish));
    assertEquals(true, service.checkUser(krish));
  }

  @Test
  public void checkWaiterTest1() {
    User krish = new User("Krish", "123", "waiter");
    when(service.checkUser(krish)).thenReturn(true);
    when(repository.getUser(krish.getUsername())).thenReturn(Optional.ofNullable(krish));
    assertEquals(true, service.checkWaiter(krish));
  }

  @Test
  public void checkWaiterTest2() {
    User krish = new User("Krish", "123", "Customer");
    assertEquals(false, service.checkWaiter(krish));
  }

  @Test
  public void addUserTest1() {
    User krish = new User("Krish", "123", "Customer");
    try {
      when(repository.existsById(krish.getUsername())).thenReturn(true);
      service.addUser(krish);
    } catch (Error e) {
      assertEquals("User already existed", e.getMessage());
    }
  }

  @Test
  public void addUserTest2() {
    User krish = new User("Krish", "123", "Customer");
    when(repository.existsById(krish.getUsername())).thenReturn(false);
    service.addUser(krish);
  }

  @Test
  public void addUserTest3() {
    User krish = new User("Krish", "123", null);
    when(repository.existsById(krish.getUsername())).thenReturn(false);
    service.addUser(krish);
  }
}
