package com.gallery.controller;

import com.gallery.db.DBController;
import java.util.List;
import com.gallery.model.User;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
public class CustomerController {

    @Autowired
    private DBController dbController;

    @RequestMapping(value = "listUsers", method = RequestMethod.GET)
    public List<User> listUsers() {
        List<User> userList = (List<User>) dbController.findAll();
        return userList;
    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public User register(User user) {
        dbController.save(user);
        return user;
    }
}
