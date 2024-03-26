package restaurant.order;


import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service class responsible for managing items.
 * 
 * @Author Malcolm Berset - Zlac157
 */
@Service // Indicates that this class is a Spring service and needs to be instantiated.
public class ItemService {

  private final ItemRepository itemRepository;

  @Autowired // Injects the ItemRepository bean into the service.
  public ItemService(ItemRepository itemRepository) {
    this.itemRepository = itemRepository;
  }

  /**
   * Retrieves a list of all items.
   *
   * @return A list of items.
   */
  public List<Item> getItems() {
    return itemRepository.findAll();
  }

  public List<Item> getItemsByUsername(String username) {
    return itemRepository.findByUsername(username);
  }

  public List<Item> getItemsByTableNumber(String tableNumber) {
    return itemRepository.findByTableNumber(tableNumber);
  }



  /**
   * Adds a new item and saves it to the repository.
   *
   * @param item The item to be added.
   */
  public void addNewItem(Item item) {
    itemRepository.save(item);
    System.out.println(item);
  }

  /**
   * Cancels an item by its ID.
   *
   * @param itemId The ID of the item to be canceled.
   * @throws IllegalStateException if the item with the specified ID does not exist.
   */
  public void cancelItem(Long itemId) {
    boolean exists = itemRepository.existsById(itemId);
    if (!exists) {
      throw new IllegalStateException("Item with ID " + itemId + " does not exist");
    }
    itemRepository.deleteById(itemId);
  }

  /**
   * Deletes all items associated with a specific username.
   *
   * @param username The username for which items should be deleted.
   */
  public void deleteItemsByUsername(String username) {
    List<Item> itemsToDelete = itemRepository.findByUsername(username);
    itemRepository.deleteAll(itemsToDelete);
  }

  /**
   * method for updating the order entity based on the id.
   * 
   * @param orderId id of the order
   * @param status status of the order
   */
  @Transactional
  public void updateOrderStatus(Long orderId, String status) {
    Item order = itemRepository.findById(orderId).orElseThrow(
        () -> new IllegalStateException("Item with ID " + orderId + " does not exist"));

    if (status != null) {
      order.setStatus(status);
    }

    itemRepository.save(order);
  }
}
