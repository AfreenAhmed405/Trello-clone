package com.example.backend.dao;

import com.example.backend.model.Task;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Repository
public interface TaskDao extends JpaRepository<Task, String> {
    Optional<Task> findById(String id);
}
