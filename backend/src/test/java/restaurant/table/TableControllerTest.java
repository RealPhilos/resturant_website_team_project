package restaurant.table;

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
public class TableControllerTest {

  @Mock
  private TableService service;

  @InjectMocks
  private TableController controller;
  
  @Test
  public void getAllTableTest() {
    List<TableReservation> temp = new ArrayList<>();
    TableReservation table1 = new TableReservation(1, 4, TableStatus.OCCUPIED);
    temp.add(table1);
    when(service.getAllTableReservations()).thenReturn(temp);
    assertEquals(temp,controller.getAllTable());
  }
  
  @Test
  public void bookTableTest() {
    when(service.bookTable(1,"Krish",4)).thenReturn(true);
    assertEquals(true,controller.bookTable(1,"Krish",4));
  }
  
  @Test
  public void tableFinishTest() {
    controller.tableFinish(1);
    Mockito.verify(service, times(1)).tableFinish(1);;
  }
  
  @Test
  public void tableCleanedTest() {
    controller.tableCleaned(1);
    Mockito.verify(service, times(1)).tableCleaned(1);;;
  }
}
