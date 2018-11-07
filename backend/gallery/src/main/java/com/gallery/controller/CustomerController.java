package com.gallery.controller;

import com.gallery.db.DbAlbumInterface;
import com.gallery.model.Album;
import java.util.List;
import com.gallery.model.User;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.gallery.db.DbUserInterface;
import com.gallery.util.WebConfig;
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
public class CustomerController {

    @Autowired
    private DbUserInterface dbUserInterface;

    @Autowired
    private DbAlbumInterface dbAlbumInterface;

    @RequestMapping(value = "/listUsers", method = RequestMethod.GET)
    public List<User> listUsers() 
    {
        List<User> userList = (List<User>) dbUserInterface.findAll();
        return userList;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User register(@RequestBody User user) {
        dbUserInterface.save(user);
        return user;
    }
    
    @RequestMapping(value = "/remove", method = RequestMethod.DELETE)
    public List<User> remove(@RequestBody User user) {
        dbUserInterface.delete(user);
        List<User> updatedList = (List<User>) dbUserInterface.findAll();
        return updatedList;
    }

    @RequestMapping(value = "/savePhotos", method = RequestMethod.POST)
    public int savePhotos(@RequestBody Album album) {
        dbAlbumInterface.save(album);
        return 0;
    }

    @RequestMapping(value = "/getPhotos/:{id}", method = RequestMethod.GET)
    public Album getPhotos(@PathVariable Long id) {
        Optional<Album> optionalAlbum = dbAlbumInterface.findById(id);
        Album album = new Album();
        if(optionalAlbum.isPresent()){
            album = optionalAlbum.get();
        }
        return album;
    }
}
