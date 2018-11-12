/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gallery.controller;

import com.gallery.db.DbAlbumInterface;
import com.gallery.model.Album;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
public class AlbumController {
    
    @Autowired
    private DbAlbumInterface dbAlbumInterface;
    
    @RequestMapping(value = "/savePhotos", method = RequestMethod.POST)
    public int savePhotos(@RequestBody Album album) {
        dbAlbumInterface.save(album);
        return 0;
    }

    @RequestMapping(value = "/getPhotos/:{id}", method = RequestMethod.GET)
    public Album getPhotos(@PathVariable Long id) {
        Album album = dbAlbumInterface.findAlbumById(id);
		if(album == null || album == ""){
			Album album = new Album(id, "");
		}
        return album;
    }
}
