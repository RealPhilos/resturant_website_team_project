package restaurant.order;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Controller class for managing item-related requests.
 * 
 * @Author Malcolm Berset - Zlac157
 * @Author Parvesh Kumar - Wlis205
 * @Author Ahmed Alyami - Wlis021
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/order")
public class ItemController {

  /**
   * Calling the ItemService class.
   */
  private final ItemService itemService;

  // This ItemService is injected into ItemController
  @Autowired // Indicates that ItemService will be instantiated and injected into the controller.
  public ItemController(ItemService itemService) {
    this.itemService = itemService;
  }

  /**
   * Get a list of items in JSON format.
   *
   * @return List of Items.
   */
  @GetMapping
  public List<Item> getItems() {
    return itemService.getItems();
  }

  /**
   * Retrieves all items ordered by a specific user.
   * 
   * 
   * @param username the username of the user whose items are to be retrieved.
   * @return list of objects ordered by the specified user in JSON format.
   */
  @GetMapping("getByUser/{username}")
  public List<Item> getItemsByUsername(@PathVariable String username) {
    return itemService.getItemsByUsername(username);
  }

  /**
   * Retrieves all items ordered by a specific table.
   * 
   * 
   * @param tableNumber the table number of the table whose items are to be retrieved.
   * @return list of objects ordered by the specified table in JSON format.
   */
  @GetMapping("getByTable/{tableNumber}")
  public List<Item> getItemsByTableNumber(@PathVariable String tableNumber) {
    return itemService.getItemsByTableNumber(tableNumber);
  }


  /**
   * Add a new item based on the provided request body.
   *
   * @param item The item to be added.
   * @return A success message if the item is added successfully, or an error message if any
   *         required field is missing.
   */
  @PostMapping(path = "add")
  public String addNewItem(@RequestBody Item item) {

    if (item.getName() == null) {
      return "Please choose an item";
    }
    if (item.getTableNumber() == null) {
      return "Please input a table number";
    }
    if (item.getQuantity() == null) {
      return "Please input a quantity";
    }
    itemService.addNewItem(item);
    return "Item added successfully";
  }

  /**
   * Change the status of the order.
   *
   * @param orderId path variable orderId
   * @param status the updated item
   */
  @PutMapping(path = "{orderId}")
  public void updateOrder(@PathVariable("orderId") Long orderId,
      @RequestBody String status) {

    System.out.println("Controller value: " + status);
    itemService.updateOrderStatus(orderId, status);
  }

  /**
   * Delete an item by its ID.
   *
   * @param itemId The ID of the item to be canceled.
   * @return A success message if the item is canceled successfully.
   */
  @DeleteMapping(path = "deleteItemById/{itemId}")
  public String cancelItem(@PathVariable("itemId") Long itemId) {
    itemService.cancelItem(itemId);
    return "Item canceled successfully";
  }

  /**
   * Deletes all items associated with a given username.
   *
   * @param username The username of the items to be deleted.
   * @return A success message if the items are deleted successfully.
   */
  @DeleteMapping(path = "deleteItemsByUser/{username}")
  public String deleteItemsByUsername(@PathVariable("username") String username) {
    itemService.deleteItemsByUsername(username);
    return "Items canceled successfully";
  }
}
