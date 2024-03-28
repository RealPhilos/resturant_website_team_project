package restaurant.notification;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * This class is good.
 * 
 * @author Philip Anaafi Asumadu - zkac229
 * @author Kasim - zjac003
 */
@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

  List<Notification> findByTableNumber(String tableNumber);

}
