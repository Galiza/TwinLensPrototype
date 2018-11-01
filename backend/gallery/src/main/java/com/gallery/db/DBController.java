package com.gallery.db;

import java.util.List;

import com.gallery.model.User;
import org.springframework.data.repository.CrudRepository;

public interface DBController extends CrudRepository<User, Integer> {

    /*
     * Custom request for the database to get an user
     * through the email
     */
    public User findByEmail(String email);

    /*
     * Custom request for the database to get all users
     * by name
     */
    public List<User> findAlbumById(int id);
}
