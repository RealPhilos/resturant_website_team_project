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
public class UserControllerTest {

  @Mock
  private UserService service;

  @InjectMocks
  private UserController controller;

  @Mock
  private UserRepository repository;


  @Test
  public void loginUserTest1() {
    User krish = new User("Krish", "123", "Customer");
    when(service.checkUser(krish)).thenReturn(true);
    when(repository.getUser(krish.getUsername())).thenReturn(Optional.ofNullable(krish));
    assertEquals(krish, controller.loginUser(krish));
  }

  @Test
  public void loginUserTest2() {
    User krish = new User("Krish", "123", "Customer");
    when(service.checkUser(krish)).thenReturn(false);
    assertEquals(null, controller.loginUser(krish));
  }

  @Test
  public void loginWaiterTest1() {
    User krish = new User("Krish", "123", "waiter");
    when(service.checkWaiter(krish)).thenReturn(true);
    assertEquals("Login successful", controller.loginWaiter(krish).getBody());
  }
  
  @Test
  public void loginWaiterTest2() {
    User krish = new User("Krish", "123", "Customer");
    when(service.checkWaiter(krish)).thenReturn(false);
    assertEquals("Login failed", controller.loginWaiter(krish).getBody());
  }
  
  @Test
  public void registerUserTest1() {
    User krish = new User("Krish", "123", "waiter");
    assertEquals("Register successful",controller.registerUser(krish).getBody());
  }
 
}
