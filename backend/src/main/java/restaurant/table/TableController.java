package restaurant.table;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * This is the Controller class to handle HTTP requests related to restaurants'
 * tables.
 * 
 * @author Kasim
 * @author Luque van der Merwe - ZLAC180
 */
@RestController
@RequestMapping(path = "table")
public class TableController {
  private TableService tableService;
  
  /**
   * Constructor injection of {@link restaurant.table.TableService}.
   * 
   * @param tableService the service responsible for table operations.
   */
  @Autowired
  public TableController(TableService tableService) {
    this.tableService = tableService;
  }
  
  /**
   * Endpoint to get all table reservations.
   * 
   * @return a list of {@link restaurant.table.TableReservation}.
   */
  @GetMapping
  public List<TableReservation> getAllTable() {
    return tableService.getAllTableReservations();
  }
  
  /**
   * EndPoint to book a table for a specific user and size.
   * 
   * @param tableNumber the number of the table to be booked.
   * @param username the username of the user booking the table.
   * @param size the size of the table to be booked.
   * @return {@code true} if the table was successfully booked, {@code false} otherwise.
   */
  @PostMapping(path = "/bookTable/{tableNumber}/{username}/{size}")
  public boolean bookTable(@PathVariable("tableNumber") int tableNumber,
      @PathVariable("username") String username, @PathVariable("size") int size) {
    return tableService.bookTable(tableNumber, username, size);
  }

  /**
   * Endpoint to mark a table as finished.
   * 
   * @param tableNumber the table number who finished dining.
   */
  @PostMapping(path = "/tableFinish/{tableNumber}")
  public void tableFinish(@PathVariable("tableNumber") int tableNumber) {
    tableService.tableFinish(tableNumber);
  }
  
  /**
   * Endpoint to mark a table as cleaned.
   * 
   * @param tableNumber the number of the table to be marked as cleaned.
   */
  @PostMapping(path = "/tableCleaned/{tableNumber}")
  public void tableCleaned(@PathVariable("tableNumber") int tableNumber) {
    tableService.tableCleaned(tableNumber);
  }
  
}
