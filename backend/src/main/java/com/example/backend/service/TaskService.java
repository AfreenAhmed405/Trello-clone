package com.example.backend.service;

import com.example.backend.model.Task;

import java.util.List;

public interface TaskService {
    Task addTask(Task task);
    List<Task> getTasks();
    Task getTask(String id);
    Task editTask(Task task);
    void deleteTask(String id);
}
