package restaurant.order;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class ItemTest {
  
  @Test
  public void itemTest() {
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    sushi.setName("sushi");
    sushi.setQuantity(3);
    sushi.setStatus("done");
    sushi.setTableNumber("table 1");
    sushi.setUsername("Malcolm");
    assertEquals(null,sushi.getOrderTime());
    assertEquals(3,sushi.getQuantity());
    assertEquals("sushi",sushi.getName());
    assertEquals(OrderStatus.DONE,sushi.getStatus());
    assertEquals("table 1",sushi.getTableNumber());
    assertEquals("Malcolm",sushi.getUsername());
  }
}
