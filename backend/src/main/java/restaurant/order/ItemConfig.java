package restaurant.order;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;


/**
 * Configuration class for initializing items and associating them with users.
 * 
 * @author Malcolm Berset - Zlac157
 * @author Luque van der Merwe - ZLAC180
 */
@Configuration // Indicates that this class is a Spring configuration class.
@Order(6) // Specifies the order in which this configuration should be loaded.
public class ItemConfig {

  /**
   * Initializes items and associates them with users.
   *
   * @param itemRepository The repository for managing items.
   * @param userRepository The repository for managing users.
   * @return A CommandLineRunner for initializing items and user associations.
   */
  @Bean
  CommandLineRunner itemDataInitializer(ItemRepository itemRepository) {
    return args -> {
      Item sushi = new Item("sushi", 3, "table 1", "Malcolm");
      sushi.setStatus("ordered");
      Item pasta = new Item("pasta", 2, "table 1", "Malcolm");
      pasta.setStatus("cooking");
      Item pizza = new Item("pizza", 3, "table 2", "Krish");
      pizza.setStatus("done");
      Item burger = new Item("burger", 3, "table 2", "Krish");
      burger.setStatus("delivered");
      itemRepository.saveAll(List.of(sushi, pasta, pizza, burger));
    };
  }
}
