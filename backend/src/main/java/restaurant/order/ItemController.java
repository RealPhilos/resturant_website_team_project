package restaurant.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller class for managing item-related requests.
 * 
 * @Author Malcolm Berset - Zlac157
 */
@RestController
@RequestMapping(path = "/order")
public class ItemController {

	// Calling the ItemService class
	private final ItemService itemService;

	// This ItemService is injected into ItemController
	@Autowired // Indicates that this ItemService will be instantiated and injected into the controller.
	public ItemController(ItemService itemService) {
		this.itemService = itemService;
	}

	/**
	 * Get a list of items in JSON format.
	 *
	 * @return List of items.
	 */
	@GetMapping
	public List<Item> getItems() {
		return itemService.getItems();
	}

	/**
	 * Add a new item based on the provided request body.
	 *
	 * @param item The item to be added.
	 * @return A success message if the item is added successfully, or an error message if any required field is missing.
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
	 * Delete an item by its ID.
	 *
	 * @param itemId The ID of the item to be canceled.
	 * @return A success message if the item is canceled successfully.
	 */
	@DeleteMapping(path = "delete/{itemId}")
	public String cancelItem(@PathVariable("itemId") Long itemId) {
		itemService.cancelItem(itemId);
		return "Item canceled successfully";
	}
}

