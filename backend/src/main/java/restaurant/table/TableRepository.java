package restaurant.table;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for managing Food entities in the database.
 */
@Repository
public interface TableRepository extends JpaRepository<TableReservation, Long> {

}
