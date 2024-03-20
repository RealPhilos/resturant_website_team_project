package restaurant.notif;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/** This class is good.
 * @author Kasim - zjac003
 */
@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

}
