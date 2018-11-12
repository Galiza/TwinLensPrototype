package com.gallery.db;

import java.util.List;

import com.gallery.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface DbUserInterface extends CrudRepository<User, Long> {

    /*
     * Custom request for the database to get an user
     * through the email
     */
    @Query(value = "SELECT * FROM users WHERE users.email = ?1 AND users.password = ?2")
    public User findUserByEmail(String email, String password);
    
}
