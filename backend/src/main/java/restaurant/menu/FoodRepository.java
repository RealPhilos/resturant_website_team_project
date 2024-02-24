package restaurant.menu;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Repository interface for managing Food entities in the database.
 */
@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

  Optional<Food> findByName(String food);
}
