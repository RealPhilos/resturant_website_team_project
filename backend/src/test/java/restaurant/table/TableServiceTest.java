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
public class TableServiceTest {

  @InjectMocks
  private TableService service;

  @Mock
  private TableRepository repository;
  
  @Test
  public void getAllTableReservationTest() {
    List<TableReservation> temp = new ArrayList<>();
    TableReservation table1 = new TableReservation(1, 4, TableStatus.OCCUPIED);
    temp.add(table1);
    when(repository.findAll()).thenReturn(temp);
    assertEquals(temp,service.getAllTableReservations());
  }
  
  @Test
  public void bookTableTest1() {
    List<TableReservation> temp = new ArrayList<>();
    TableReservation table1 = new TableReservation(1, 4, TableStatus.FREE);
    temp.add(table1);
    when(repository.findAll()).thenReturn(temp);
    assertEquals(true,service.bookTable(1, "Krish", 4));
  }
  
  
  @Test
  public void bookTableTest2() {
    List<TableReservation> temp = new ArrayList<>();
    TableReservation table1 = new TableReservation(1, 4, TableStatus.OCCUPIED);
    temp.add(table1);
    when(repository.findAll()).thenReturn(temp);
    assertEquals(false,service.bookTable(1, "Krish", 4));
  }
  
  @Test
  public void tableFinishTest() {
    List<TableReservation> temp = new ArrayList<>();
    TableReservation table1 = new TableReservation(1, 4, TableStatus.OCCUPIED);
    table1.setUsername("Krish");
    temp.add(table1);
    when(repository.findAll()).thenReturn(temp);
    service.tableFinish(1);
    Mockito.verify(repository, times(1)).save(table1);

  }
  
  @Test
  public void tableCleanedTest() {
    List<TableReservation> temp = new ArrayList<>();
    TableReservation table1 = new TableReservation(1, 4, TableStatus.OCCUPIED);
    temp.add(table1);
    when(repository.findAll()).thenReturn(temp);
    service.tableCleaned(1);
    Mockito.verify(repository, times(1)).save(table1);

  }
}
