package com.example.library.repos;

import com.example.library.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepos extends JpaRepository<Book, Long> {
}
