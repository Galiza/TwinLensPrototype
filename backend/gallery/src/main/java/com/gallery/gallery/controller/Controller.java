/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gallery.gallery.controller;

import java.util.List;

import com.gallery.gallery.db.DBInterface;
import com.gallery.gallery.model.User;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Controller {
    
    @Autowired
    private DBInterface dbController;
    
    @RequestMapping(value="/user")
    public int containUser(@RequestBody User user){
        
        User registeredUser = dbController.findUser(user.getEmail(), user.getPassword());

        System.out.println(registeredUser);
        return 0;
    }
    
}
