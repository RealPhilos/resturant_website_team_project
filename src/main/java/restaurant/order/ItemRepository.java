package restaurant.order;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for managing Item entities in the database.
 * 
 * @Author Malcolm Berset -Zlac157
 * 
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{
	
     //SELECT * FROM item WHERE name = ?
	@Query("SELECT i FROM Item i WHERE i.name = ?1")
	Optional<Item> findItemByName(String name);
}

