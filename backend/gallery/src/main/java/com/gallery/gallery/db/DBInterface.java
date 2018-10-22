/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gallery.gallery.db;

import com.gallery.gallery.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "user", path = "users")
public interface DBInterface extends PagingAndSortingRepository<User, String>{
    
    @Query("SELECT email FROM users WHERE email = :email AND password = :password")
    User findUser(@Param("email") String email, @Param("password") String password);
    
}
