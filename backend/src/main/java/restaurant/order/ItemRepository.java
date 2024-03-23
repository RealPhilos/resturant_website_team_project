package restaurant.order;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for managing Item entities in the database.
 * 
 * @Author Malcolm Berset -Zlac157
 * 
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

  List<Item> findByUsername(String username);

  List<Item> findByTableNumber(String tableNumber);

}

