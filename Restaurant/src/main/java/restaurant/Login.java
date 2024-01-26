/*package restaurant;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Scanner;

public class Login { private File loginDatabaseFile = new File("/home/krish/git/TeamProject07/Restaurant/src/main/resources/Database/LoginDatabase.txt");//CHANGE THE LOCATION FOR YOUR COMPUTER!!
  private HashMap<String,String> loginDatabase; 
  
  //Converts the database file in a HashMap.
  private HashMap<String,String> fileReader() throws FileNotFoundException {
    Scanner reader = new Scanner(loginDatabaseFile);
    HashMap<String,String> login = new HashMap<>();
    while(reader.hasNextLine()) {
      String[] line = reader.nextLine().split(" ");
      String username = line[0];
      String password = line[1];
      login.put(username, password);
    }
    reader.close();
    return login;
  }
  
  public Login() throws FileNotFoundException {
    this.loginDatabase = fileReader();
  }
  
  public boolean checkLogin(String username,String password) {
    return password.equals(loginDatabase.get(username));
  }
  
}
*/

package restaurant;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.InputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Scanner;

public class Login {
    private HashMap<String, String> loginDatabase;

    // Converts the database file in a HashMap.
    private HashMap<String, String> fileReader() throws IOException {
        HashMap<String, String> login = new HashMap<>();

        // Accessing the file using Spring Boot's ClassPathResource
        Resource resource = new ClassPathResource("Database/LoginDatabase.txt");
        InputStream inputStream = resource.getInputStream();
        Scanner reader = new Scanner(inputStream);

        while (reader.hasNextLine()) {
            String[] line = reader.nextLine().split(" ");
            String username = line[0];
            String password = line[1];
            login.put(username, password);
        }
        reader.close();

        return login;
    }

    public Login() throws IOException {
        this.loginDatabase = fileReader();
    }

    public boolean checkLogin(String username, String password) {
        return password.equals(loginDatabase.get(username));
    }
}
