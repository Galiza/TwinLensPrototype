package com.gallery.starter;

import com.gallery.model.Login;
import com.gallery.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GalleryApplicationTest {

    @Test
    public void test_login_successful() throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        Login login = new Login("admin@admin", "admin");
        User user = restTemplate.postForObject("http://localhost:8080/login", login, User.class);
        Assert.assertEquals(login.getEmail(), user.getEmail());
    }

    @Test
    public void test_login_user_not_registered() throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        Login login = new Login("any@any", "any");
        try {
            User user = restTemplate.postForObject("http://localhost:8080/login", login, User.class);
        } catch (HttpStatusCodeException e) {
            Assert.assertEquals(500, e.getRawStatusCode());
        }
    }

    @Test
    public void test_login_connection_established() throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        Login login = new Login();
        try {
            restTemplate.postForObject("http://localhost:8080/login", login, User.class);
        } catch (HttpStatusCodeException e) {
            Assert.assertNotEquals(503, e.getRawStatusCode());
        }
    }

    @Test
    public void test_register_user_successful() throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        User newUser = new User("Cliente", "c@c", "p");
        User user = restTemplate.postForObject("http://localhost:8080/register", newUser, User.class);
        Assert.assertEquals(newUser.getEmail(), user.getEmail());
    }

    @Test
    public void test_user_already_registered() throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        User newUser = new User("Admin", "admin@admin", "admin");
        try {
            User user = restTemplate.postForObject("http://localhost:8080/register", newUser, User.class);
        } catch (HttpStatusCodeException e) {
            Assert.assertNotEquals(200, e.getRawStatusCode());
        }
    }

    @Test
    public void test_user_register_connection_established() throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        User newUser = new User("Admin", "admin@admin", "admin");
        try {
            User user = restTemplate.postForObject("http://localhost:8080/register", newUser, User.class);
        } catch (HttpStatusCodeException e) {
            Assert.assertNotEquals(503, e.getRawStatusCode());
        }
    }
}
