package restaurant.table;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

	public void tableFinish(String username) {
		List<TableReservation> allList = tableRepo.findAll();
		for (TableReservation i : allList) {
			if (Objects.equals(i.getUsername() , username)) {
				i.setUsername(null);
				i.setTableStatus(TableStatus.CLEANING);
				tableRepo.save(i);
			}
		}
	}
	
	public void tableCleaned(int tableNumber) {
		List<TableReservation> allList = tableRepo.findAll();
		for(TableReservation i : allList) {
			if(i.getTableNumber() == tableNumber) {
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
