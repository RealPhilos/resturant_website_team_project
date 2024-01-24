package restaurant;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import java.io.FileNotFoundException;
import restaurant.Login;

public class LoginTest {
  
  
  //Test 1 
  void testContructor() throws FileNotFoundException {
    Login login = new Login();
    assertNotNull(login); 
  }
}
