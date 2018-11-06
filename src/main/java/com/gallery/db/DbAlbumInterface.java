package com.gallery.db;

import com.gallery.model.Album;
import java.util.List;

import com.gallery.model.User;
import org.springframework.data.repository.CrudRepository;

public interface DbAlbumInterface extends CrudRepository<Album, Long> {

    /*
     * Custom request for the database to get album
     * by id
     */
    //public List<Album> findAlbumById(Long id);
    
}
