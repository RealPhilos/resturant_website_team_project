package restaurant.table;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Service class for table management.
 */
@Service
public class TableService {
  private final TableRepository tableRepo;

  @Autowired
  public TableService(TableRepository tableRepo) {
    this.tableRepo = tableRepo;
  }

  /**
   * Method for getting table list of reservations.
   *
   * @return the list of all table reservations
   */
  public List<TableReservation> getAllTableReservations() {
    return tableRepo.findAll();
  }

  /**
   * Method for booking a table.
   *
   * @param tableNumber number of the desired table 
   * @param username username of the customer
   * @param size size of the group
   * @return true if table booking is successful, false if not
   */
  public boolean bookTable(int tableNumber, String username, int size) {
    List<TableReservation> allList = tableRepo.findAll();
    for (TableReservation i : allList) {
      if (i.getTableNumber() == tableNumber && i.getTableSize() == size
          && i.getTableStatus().equals(TableStatus.FREE)) {
        i.setUsername(username);
        i.setTableStatus(TableStatus.OCCUPIED);
        tableRepo.save(i);
        return true;
      }
    }
    return false;
  }

  /**
   * method for handling table finish.
   *
   * @param tableNumber number of the table to be cleaned
   */
  public void tableFinish(int tableNumber) {
    List<TableReservation> allList = tableRepo.findAll();
    for (TableReservation i : allList) {
      if (i.getTableNumber() == tableNumber) {
        i.setTableStatus(TableStatus.CLEANING);
        tableRepo.save(i);
      }
    }
  }

  /**
   * method for handling table cleaned.
   *
   * @param tableNumber number of the table to be freed
   */
  public void tableCleaned(int tableNumber) {
    List<TableReservation> allList = tableRepo.findAll();
    for (TableReservation i : allList) {
      if (i.getTableNumber() == tableNumber) {
        i.setTableStatus(TableStatus.FREE);
        tableRepo.save(i);
      }
    }
  }

}
