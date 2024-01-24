package restaurant;
import java.io.FileNotFoundException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Main {
    public static void main(String[] args) throws FileNotFoundException {
      Login test = new Login(); 
      System.out.println(test.checkLogin("abc", "123"));
      System.out.println(test.checkLogin("abc", "456"));
      System.out.println(test.checkLogin("def", "456"));
      //SpringApplication.run(Main.class, args);
    }
    
//    @GetMapping("/hello")
//    public String hello(@RequestParam(value = "name", defaultValue = "Marcin") String name) {
//      return String.format("Hello %s!", name);
//    }
}