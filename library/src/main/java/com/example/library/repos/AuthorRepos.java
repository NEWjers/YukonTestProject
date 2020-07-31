package com.example.library.repos;

import com.example.library.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepos extends JpaRepository<Author, Long> {
}
