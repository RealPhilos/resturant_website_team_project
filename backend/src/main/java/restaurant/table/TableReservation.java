package restaurant.table;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * entity class for table reservation.
 */
@Entity
public class TableReservation {
  
  @Id
  private int tableNumber;
  private String username;
  private int tableSize;
  private TableStatus tableStatus;

  /**
   * constructor method for tableReservation.
   *
   * @param tableNumber number of the table
   * @param tableSize size of the table
   * @param tableStatus status of the table
   */
  public TableReservation(int tableNumber, int tableSize, TableStatus tableStatus) {
    this.tableNumber = tableNumber;
    this.tableSize = tableSize;
    this.tableStatus = tableStatus;
  }

  public TableReservation() {}

  public int getTableNumber() {
    return tableNumber;
  }

  public void setTableNumber(int tableNumber) {
    this.tableNumber = tableNumber;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public int getTableSize() {
    return tableSize;
  }

  public void setTableSize(int tableSize) {
    this.tableSize = tableSize;
  }

  public TableStatus getTableStatus() {
    return tableStatus;
  }

  public void setTableStatus(TableStatus tableStatus) {
    this.tableStatus = tableStatus;
  }

  @Override
  public String toString() {
    return "Table [tableNumber=" + tableNumber + ", username=" + username + ", tableSize="
        + tableSize + ", tableStatus=" + tableStatus + "]";
  }

}
