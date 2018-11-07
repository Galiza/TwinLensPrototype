/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gallery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.model.Login;
import com.gallery.model.User;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.gallery.db.DbUserInterface;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
public class LoginController {

    @Autowired
    private DbUserInterface dbUserInterface;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public User login(@RequestBody Login login) {
        User user = dbUserInterface.findByEmail(login.getEmail());
        return user;
    }

}
