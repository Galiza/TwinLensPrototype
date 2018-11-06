package com.gallery.db;

import java.util.List;

import com.gallery.model.User;
import org.springframework.data.repository.CrudRepository;

public interface DbUserInterface extends CrudRepository<User, Long> {

    /*
     * Custom request for the database to get an user
     * through the email
     */
    public User findByEmail(String email);

}
