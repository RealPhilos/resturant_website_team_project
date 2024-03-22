package restaurant.table;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller class for table management.
 * 
 * @author Kasim
 */
@RestController
@RequestMapping(path = "Table")
public class TableController {
  private TableService tableService;

  @Autowired
  public TableController(TableService tableService) {
    this.tableService = tableService;
  }

  @GetMapping
  public List<TableReservation> getAllTable() {
    return tableService.getAllTable();
  }

  @PostMapping(path = "/bookTable/{username}/{size}")
  public boolean bookTable(@PathVariable("username") String username,
      @PathVariable("size") int size) {
    return tableService.bookTable(username, size);
  }

  @PostMapping(path = "/tableFinish/{username}")
  public void tableFinish(@PathVariable("username") String username) {
    tableService.tableFinish(username);
  }

  @PostMapping(path = "/tableCleaned/{tableNumber}")
  public void tableCleaned(@PathVariable("tableNumber") int tableNumber) {
    tableService.tableCleaned(tableNumber);
  }

  /**
   * Method for getting all table reservations.
   * 
   * @return list of TableReservations.
   */
  @GetMapping("/all") // Makes a Get request to /Table/all retrieving all table reservations from
  public List<TableReservation> getAllTableReservations() {
    return tableService.getAllTableReservations();
  }
}
