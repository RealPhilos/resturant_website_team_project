package restaurant.table;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
//	@Table(name = "Login")
public class Table {

	@Id	
	private int tableNumber;
	private String username;
	private int tablesize;

	public Table(int tableNumber, int tablesize) {
		this.tableNumber = tableNumber;
		this.tablesize = tablesize;
	}

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

	public int getTablesize() {
		return tablesize;
	}

	public void setTablesize(int tablesize) {
		this.tablesize = tablesize;
	}
	
	@Override
	public String toString() {
		return "Table [tableNumber=" + tableNumber + ", username=" + username + ", tablesize=" + tablesize + "]";
	}

}
