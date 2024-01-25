package restaurant;


/** Represents a table in the restaurant.
 * 
 * @author Luque van der Merwe - ZLAC180
 */
public class Table {
  private TableState state;
  
  public Table() {
    this.state = TableState.FREE;
  }

  
  /** Used to fetch the current state of a table.
   * 
   * @return State of the table (Free, Occupied, Needs cleaning)
   */
  public TableState getState() {
    return this.state;
  }


  
  /** Used to set the current state of a table.
   * 
   * @param state An ENUM representing the current state of a table
   */
  public void setState(TableState state) {
    this.state = state;
  } 
}
