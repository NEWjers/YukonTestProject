package com.example.library.controllers;

import com.example.library.models.Book;
import com.example.library.repos.BookRepos;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("book")
@CrossOrigin
public class BookController {
    private final BookRepos bookRepos;

    @Autowired
    public BookController(BookRepos bookRepos) {
        this.bookRepos = bookRepos;
    }

    @GetMapping
    public List<Book> list(){
        return bookRepos.findAll();
    }

    @GetMapping("{id}")
    public Book getOne(@PathVariable("id") Book book){
        return book;
    }

    @PostMapping
    public Book create(@RequestBody Book book){
        return bookRepos.save(book);
    }

    @PutMapping("{id}")
    public Book update(@RequestBody Book book, @PathVariable("id") Book bookFromDB){
        BeanUtils.copyProperties(book, bookFromDB, "id");
        return bookRepos.save(bookFromDB);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Book book){
        bookRepos.delete(book);
    }
}
