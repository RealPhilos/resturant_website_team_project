import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import restaurant.Table;
import restaurant.TableState;

class TableTest {
  Table t1;

  @BeforeEach
  void setup() {
    t1 = new Table();
  }

  
  @Test // 1 - Default construction test
  void tableCreation() {
    assertNotNull(t1);
  }
  
  @Test // 2 - Check new tables are free
  void tableGetState() {
    assertEquals(t1.getState(), TableState.FREE);
  }
  
  @Test // 3 - Check tables can change state
  void tableSetState() {
    t1.setState(TableState.OCCUPIED);
    assertEquals(t1.getState(), TableState.OCCUPIED);
    t1.setState(TableState.DONE);
    assertEquals(t1.getState(), TableState.DONE);
    t1.setState(TableState.FREE);
    assertEquals(t1.getState(), TableState.FREE);
  }
}
