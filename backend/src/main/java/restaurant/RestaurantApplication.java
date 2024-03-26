package restaurant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

/**
 *      This starts and run all the packages.
 *      @author Krish Macwan - Zlac463
 */
@SpringBootApplication
@RestController
public class RestaurantApplication {
  public static void main(String[] args) {
    SpringApplication.run(RestaurantApplication.class, args);
  }
}
