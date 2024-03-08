package restaurant.table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TableService {
	private final TableRepository tableRepo;

	@Autowired
	public TableService(TableRepository tableRepo) {
		this.tableRepo = tableRepo;
	}
	
	public void addUsername(int table,String username) {
	}
}
