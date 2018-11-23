package com.gallery.starter;

import com.gallery.model.Login;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
public class GalleryApplicationTest {

    @Autowired
    private MockMvc mvc;

//    @Autowired
//    private WebTestClient webClient;
    @Test
    public void loginTestConnection() throws Exception {
        Login login = new Login("y@y", "p");
        this.mvc.perform(post("/login").sessionAttr("login", login)
                .param("email", login.getEmail())
                .param("password", login.getPassword())
        ).andExpect(status().isOk());
    }
}
