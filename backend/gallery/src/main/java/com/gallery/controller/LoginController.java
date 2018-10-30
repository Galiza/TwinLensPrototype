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

//import com.gallery.db.DBController;
import com.aubay.exception.EmailExistsException;
import com.gallery.model.Login;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
public class LoginController {

//	@Autowired
//	private DBController controller;
    /*
	 * Method that gets the request to register the user
     */
    
    @RequestMapping(value="login", method=RequestMethod.POST)
    public boolean login(@RequestParam Login login) {
        
//        if(login.getEmail() && login.getPassword()){
            
//        }
        /*List<User> dbUsers = controller.findAll();
		
		for(User user: dbUsers) {
			if(user.getEmail().equals(userRegister.getEmail())) {
				throw new EmailExistsException("E-mail already registered.");
			}
		}
		
		controller.save(userRegister);
		dbUsers.add(userRegister);
		
        return dbUsers;*/
        return true;
    }

    /*
	 * Method that gets the request to fetch all users
	 * saved in the database
     */
    /*@CrossOrigin
    @RequestMapping(value = "/users")
    public List<User> listUsers() {
        List<User> dbUsers;
         = controller.findAll();
        return dbUsers;
    }*/
}
