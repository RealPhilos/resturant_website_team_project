package restaurant.notif;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurant.order.OrderStatus;

// import jakarta.persistence.Entity;

/**
 * service class for call waiter.
 * @author Kasim -zjac003
 */
@Service
public class CallWaiterService {

  private final OrderRepository orderRepository;


  @Autowired
  public CallWaiterService(OrderRepository orderRepository) {
    this.orderRepository = orderRepository;
  }

  /**
   * method to handle call waiter request.
   * @param orderId id for order
   */
  public void handleCallWaiterRequest(Long orderId) {
    Order order = orderRepository.findById(orderId).orElse(null);
    if (order != null) {
      order.setStatus(OrderStatus.WAITING_FOR_WAITER);
      orderRepository.save(order);
    } else {
      return;
    }
  }

}
