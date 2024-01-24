package restaurant;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Scanner;

public class Login {
  private File loginDatabaseFile = new File("Login Database");
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
  
}
