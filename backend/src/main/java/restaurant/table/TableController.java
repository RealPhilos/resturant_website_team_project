package restaurant.table;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller class for managing tables.
 * @author Kasim
 * @author Luque van der Merwe - ZLAC180
 */
@RestController
@RequestMapping(path = "table")
public class TableController {
  private TableService tableService;

  @Autowired
  public TableController(TableService tableService) {
    this.tableService = tableService;
  }

  @GetMapping
  public List<TableReservation> getAllTable() {
    return tableService.getAllTableReservations();
  }

  @PostMapping(path = "/bookTable/{tableNumber}/{username}/{size}")
  public boolean bookTable(@PathVariable("tableNumber") int tableNumber,
      @PathVariable("username") String username, @PathVariable("size") int size) {
    return tableService.bookTable(tableNumber, username, size);
  }

  @PostMapping(path = "/tableFinish/{username}")
  public void tableFinish(@PathVariable("username") String username) {
    tableService.tableFinish(username);
  }

  @PostMapping(path = "/tableCleaned/{tableNumber}")
  public void tableCleaned(@PathVariable("tableNumber") int tableNumber) {
    tableService.tableCleaned(tableNumber);
  }
}
