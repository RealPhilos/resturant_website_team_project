package restaurant;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;

import org.junit.jupiter.api.BeforeEach;
//import restaurant.Login;
import org.junit.jupiter.api.Test;


public class LoginTest {
  

    private Login login;

    @BeforeEach
    void setUp() throws IOException {
        login = new Login();
    }

    @Test
    void testConstructor() {
        assertNotNull(login);
    }

    @Test
    void testValidLogin() {
        // Assuming 'abc 123' is a valid username-password pair in your LoginDatabase.txt
        assertTrue(login.checkLogin("abc", "123"));
    }

    @Test
    void testInvalidLogin() {
        // Assuming 'xyz 999' is not a valid username-password pair
        assertFalse(login.checkLogin("xyz", "999"));
    }
}
