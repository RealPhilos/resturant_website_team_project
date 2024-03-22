package restaurant.table;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Config class to make data seeding fot table reservation.
 */
@Configuration
public class TableConfig {
  @Bean
  CommandLineRunner commandLineRunner(TableRepository repository) {
    return args -> {
      TableReservation table1 = new TableReservation(1, 4, TableStatus.FREE);
      TableReservation table2 = new TableReservation(2, 4, TableStatus.FREE);
      TableReservation table3 = new TableReservation(3, 4, TableStatus.FREE);
      TableReservation table4 = new TableReservation(4, 4, TableStatus.FREE);
      TableReservation table5 = new TableReservation(5, 2, TableStatus.FREE);
      TableReservation table6 = new TableReservation(6, 2, TableStatus.FREE);
      TableReservation table7 = new TableReservation(7, 6, TableStatus.FREE);
      TableReservation table8 = new TableReservation(8, 8, TableStatus.FREE);
      TableReservation table9 = new TableReservation(8, 8, TableStatus.FREE);
      TableReservation table10 = new TableReservation(8, 8, TableStatus.FREE);
      TableReservation table11 = new TableReservation(8, 8, TableStatus.FREE);
      TableReservation table12 = new TableReservation(8, 8, TableStatus.FREE);
      repository.saveAll(List.of(table1, table2, table3, table4, table5, table6, table7, table8,
          table9, table10, table11, table12));
    };
  }
}
