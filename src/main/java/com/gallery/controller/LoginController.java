package com.gallery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.model.Login;
import com.gallery.model.User;
import org.springframework.web.bind.annotation.RequestMethod;
import com.gallery.db.DbUserInterface;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
public class LoginController {

    @Autowired
    private DbUserInterface dbUserInterface;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public User login(@RequestBody Login login) {
        User user = dbUserInterface.findUserByEmail(login.getEmail(), login.getPassword());
        return user;
    }

}
