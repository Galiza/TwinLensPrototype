package com.gallery.model;

import java.io.Serializable;
import java.util.*;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "album")
public class Album implements Serializable {
    private static final long serialVersionUID = 1L;
   
    @Id
    @Column(name="id")
    private Long id;
    @Column(name="photo", columnDefinition = "text")
    private String photo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
