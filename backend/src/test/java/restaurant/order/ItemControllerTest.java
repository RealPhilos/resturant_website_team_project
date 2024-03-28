package restaurant.order;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ItemControllerTest {

  @Mock
  private ItemService service;

  @InjectMocks
  private ItemController controller;
  
  @Test
  public void getItemsTest() {
    List<Item> temp = new ArrayList<>();
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    temp.add(sushi);
    when(service.getItems()).thenReturn(temp);
    assertEquals(temp,controller.getItems());
  }
  
  @Test
  public void getItemsByUsernameTest() {
    List<Item> temp = new ArrayList<>();
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    temp.add(sushi);
    when(service.getItemsByUsername("Malcolm")).thenReturn(temp);
    assertEquals(temp,controller.getItemsByUsername("Malcolm"));
  }
  
  @Test
  public void getItemsByTableNumberTest() {
    List<Item> temp = new ArrayList<>();
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    temp.add(sushi);
    when(service.getItemsByTableNumber("table 1")).thenReturn(temp);
    assertEquals(temp,controller.getItemsByTableNumber("table 1"));
  }
  
  @Test
  public void addNewItemTest() {
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    Item sushi1 = new Item(null, 3, "table 1", "Malcolm");
    Item sushi2 = new Item("sushi", null, "table 1", "Malcolm");
    Item sushi3 = new Item("sushi", 3, null, "Malcolm");
    assertEquals("Item added successfully",controller.addNewItem(sushi));
    assertEquals("Please choose an item",controller.addNewItem(sushi1));
    assertEquals("Please input a table number",controller.addNewItem(sushi3));
    assertEquals("Please input a quantity",controller.addNewItem(sushi2));
  }
  
  @Test
  public void cancelItemTest() {
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    assertEquals("Item canceled successfully",controller.cancelItem(sushi.getId()));
  }
  
  @Test
  public void cancelItemByUsernmeTest() {
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    assertEquals("Items canceled successfully",controller.deleteItemsByUsername(sushi.getUsername()));
  }
}
