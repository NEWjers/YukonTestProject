package com.example.library.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String surname;

    @OneToMany(mappedBy = "author")
    private List<Book> books;

    public Author() {
        this.books = new ArrayList<Book>();
    }

    public Author(String name, String surname){
        this.name = name;
        this.surname = surname;
        this.books = new ArrayList<Book>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
