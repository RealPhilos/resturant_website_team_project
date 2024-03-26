package restaurant.table;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Entity class for table reservation.
 *
 * @author Luque van der Merwe - ZLAC180 Entity class representing a table reservation in the
 *         restaurant.
 */
@Entity
public class TableReservation {

  @Id
  private int tableNumber;
  private String username;
  private int tableSize;
  private TableStatus tableStatus;

  /**
   * constructor method to create a new table for tableReservation.
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

  /**
   * Default constructor.
   */
  public TableReservation() {}

  /**
   * Getter method for tableNumber.
   * 
   * @return the unique number of the table.
   */
  public int getTableNumber() {
    return tableNumber;
  }

  /**
   * Setter method for tableNumber.
   * 
   * @param tableNumber the unique number of the table to set.
   */
  public void setTableNumber(int tableNumber) {
    this.tableNumber = tableNumber;
  }

  /**
   * Getter method for username.
   * 
   * @return the associated username for the table reservation.
   */
  public String getUsername() {
    return username;
  }

  /**
   * Setter method for username.
   * 
   * @param username the username to set.
   */
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   * Getter method for tableSize.
   * 
   * @return the size or capacity of the table.
   */
  public int getTableSize() {
    return tableSize;
  }

  /**
   * Setter method for tableSize.
   * 
   * @param tableSize the size or capacity of the table to set.
   */
  public void setTableSize(int tableSize) {
    this.tableSize = tableSize;
  }

  /**
   * Getter method for tableStatus.
   * 
   * @return the current status of the table.
   */
  public TableStatus getTableStatus() {
    return tableStatus;
  }

  /**
   * Setter method for tableStatus.
   * 
   * @param tableStatus the status of the table to set.
   */
  public void setTableStatus(TableStatus tableStatus) {
    this.tableStatus = tableStatus;
  }

  /**
   * Returns the string representation of the table reservation.
   * 
   * @return a string representation of the table reservation.
   */
  @Override
  public String toString() {
    return "Table [tableNumber=" + tableNumber + ", username=" + username + ", tableSize="
        + tableSize + ", tableStatus=" + tableStatus + "]";
  }

}
