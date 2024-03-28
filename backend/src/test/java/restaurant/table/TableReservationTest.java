package restaurant.table;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class TableReservationTest {

  @Test
  public void tableReservationTest() {
    TableReservation table1 = new TableReservation(1, 4, TableStatus.OCCUPIED);
    TableReservation table = new TableReservation();
    table1.setTableNumber(1);
    table1.setTableSize(10);
    assertEquals(1,table1.getTableNumber());
    assertEquals(10,table1.getTableSize());
    assertEquals("Table [tableNumber=0, username=null, tableSize=0, tableStatus=null]",table.toString());
  }
}
