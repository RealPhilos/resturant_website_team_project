package restaurant;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

@SpringBootTest(classes=restaurant.ApplicationTests.class)
class ApplicationTests {

  @Autowired
  ApplicationContext applicationContext;

  @Test
  public void contextLoads() {
      assertNotNull(applicationContext);
  }

} 
