package restaurant.login;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class UserTest {
  @Test
  public void userTest() {
    User krish = new User("krish","123");
    krish.setPassword("123");
    krish.setUsername("Krish");
    krish.setRole("customer");
    assertEquals("Krish",krish.getUsername());
    assertEquals("customer",krish.getRole());
    assertEquals("123",krish.getPassword());
  }
}
