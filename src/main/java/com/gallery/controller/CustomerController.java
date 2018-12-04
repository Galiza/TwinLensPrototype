package com.gallery.controller;

import java.util.List;
import com.gallery.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.gallery.db.DbUserInterface;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
public class CustomerController {

    @Autowired
    private DbUserInterface dbUserInterface;

    @RequestMapping(value = "/listUsers", method = RequestMethod.GET)
    public List<User> listUsers() {
        List<User> userList = (List<User>) dbUserInterface.findAll();
        return userList;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User register(@RequestBody User newUser) throws Exception {
        User user = dbUserInterface.findByEmail(newUser.getEmail());
        if(user == null){
            dbUserInterface.save(newUser);
        } else if(user.getEmail().equals(newUser.getEmail())){
            throw new Exception("Este e-mail já está registrado.");
        }
        return newUser;
    }
    
    @RequestMapping(value = "/remove/:{id}", method = RequestMethod.DELETE)
    public List<User> remove(@PathVariable Long id) {
        dbUserInterface.deleteById(id);
        List<User> updatedList = (List<User>) dbUserInterface.findAll();
        return updatedList;
    }
}
