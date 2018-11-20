package com.gallery.starter;

import com.gallery.model.Login;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GalleryApplicationTests {

    @Autowired
    private WebTestClient webClient;

    @Test
    public void loginTestConnection() {
        this.webClient.post().uri("/login").exchange().expectStatus().isOk();
    }
}
