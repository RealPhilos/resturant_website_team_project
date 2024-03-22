package restaurant.table;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service class fot table.
 */
@Service
public class TableService {
  private final TableRepository tableRepo;

  @Autowired
  public TableService(TableRepository tableRepo) {
    this.tableRepo = tableRepo;
  }

  public List<TableReservation> getAllTable() {
    return tableRepo.findAll();
  }

  /**
   * method for booking table.
   * @param username username of the customer
   * @param size size of the table
   * @return true if the booking is successful, false if not
   */
  public boolean bookTable(String username, int size) {
    List<TableReservation> allList = tableRepo.findAll();
    for (TableReservation i : allList) {
      if (i.getTableSize() == size && i.getTableStatus().equals(TableStatus.FREE)) {
        i.setUsername(username);
        i.setTableStatus(TableStatus.INUSE);
        tableRepo.save(i);
        return true;
      }
    }
    return false;
  }

  /**
   * method after finishing the table.
   *
   * @param username username of the customer
   */
  public void tableFinish(String username) {
    List<TableReservation> allList = tableRepo.findAll();
    for (TableReservation i : allList) {
      if (Objects.equals(i.getUsername(), username)) {
        i.setUsername(null);
        i.setTableStatus(TableStatus.CLEANING);
        tableRepo.save(i);
      }
    }
  }

  /**
   * method for handling after table is cleaned.
   *
   * @param tableNumber number of the table
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

  public List<TableReservation> getAllTableReservations() {
    // TODO Auto-generated method stub
    return null;
  }
}
