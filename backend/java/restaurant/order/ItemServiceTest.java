package restaurant.order;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ItemServiceTest {
  @InjectMocks
  private ItemService service;

  @Mock
  private ItemRepository repository;

  @Test
  public void getItemsTest() {
    when(repository.findAll()).thenReturn(Stream.of(new Item("sushi", 3, "table 1", "Malcolm")
   ).collect(Collectors.toList()));
        assertEquals(1,service.getItems().size());
  }

  @Test
  public void getItemsByUsernameTest() {
    when(repository.findByUsername("Malcolm")).thenReturn(Stream.of(new Item("sushi", 3, "table 1", "Malcolm")
   ).collect(Collectors.toList()));
        assertEquals(1,service.getItemsByUsername("Malcolm").size());
  }

  @Test
  public void getItemsByTableNumberTest() {
    when(repository.findByTableNumber("table 1")).thenReturn(Stream.of(new Item("sushi", 3, "table 1", "Malcolm")
   ).collect(Collectors.toList()));
        assertEquals(1,service.getItemsByTableNumber("table 1").size());
  }

  @Test
  public void addNewItemTest() {
    Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
    service.addNewItem(sushi);
    Mockito.verify(repository, times(1)).save(sushi);
  }

  @Test
  public void cancelItemTest1() {
    when(repository.existsById(3l)).thenReturn(true);
    service.cancelItem(3l);
    Mockito.verify(repository, times(1)).deleteById(3l);
  }

  @Test
  public void cancelItemTest2() {
    when(repository.existsById(3l)).thenReturn(false);
    try {
    service.cancelItem(3l);
    }
    catch(IllegalStateException e) {
      assertEquals("Item with ID " + "3" + " does not exist",e.getMessage());
    }
  }

  @Test
  public void deleteItemsByUsernameTest() {
    List<Item> temp = new ArrayList<>();
    temp.add(new Item("sushi", 3, "table 1", "Malcolm"));
    when(repository.findByUsername("Malcolm")).thenReturn(temp);
    service.deleteItemsByUsername("Malcolm");
    Mockito.verify(repository, times(1)).deleteAll(temp);
  }
}
