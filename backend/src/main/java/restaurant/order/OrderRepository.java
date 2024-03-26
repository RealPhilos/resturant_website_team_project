package restaurant.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurant.notif.Order;

/** 
 * Provides the repository interface for managing {@link restaurant.order.Order} entities. 
 * 
 * @author Kasim - zjac003
 */
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // You can add custom methods here if needed
}