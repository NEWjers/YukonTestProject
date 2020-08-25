package com.example.library.controllers;

import com.example.library.models.Author;
import com.example.library.repos.AuthorRepos;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("author")
@CrossOrigin(origins = "http://localhost:3000/author")
public class AuthorController {
    private final AuthorRepos authorRepos;

    @Autowired
    public AuthorController(AuthorRepos authorRepos) {
        this.authorRepos = authorRepos;
    }

    @GetMapping
    public List<Author> list(){
        return authorRepos.findAll();
    }

    @GetMapping("{id}")
    public Author getOne(@PathVariable("id") Author author){
        return author;
    }

    @PostMapping
    public Author create(@RequestBody Author author){
        return authorRepos.save(author);
    }

    @PutMapping("{id}")
    public Author update(@PathVariable("id") Author authorFromDB, @RequestBody Author author){
        BeanUtils.copyProperties(author, authorFromDB, "id");
        return authorRepos.save(authorFromDB);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Author author){
        authorRepos.delete(author);
    }
}
