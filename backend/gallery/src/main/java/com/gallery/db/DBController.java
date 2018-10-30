//package com.gallery.db;
//
//
//
//import java.util.List;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Component;
//
//import com.gallery.model.User;
//
//@Component
//public interface DBController extends MongoRepository<User, String>{
//
//	/*
//	 * Custom request for the database to get an user
//	 * through the email
//	 */
//	public User findByEmail(String email);
//	
//	/*
//	 * Custom request for the database to get all users
//	 * by name
//	 */
//	public List<User> findUserByName(String name);
//}
