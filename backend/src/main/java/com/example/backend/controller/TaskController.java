package com.example.backend.controller;

import com.example.backend.model.Task;
import com.example.backend.service.TaskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    TaskServiceImpl taskService;

    @PostMapping()
    public ResponseEntity<Task> addTask(@RequestBody Task task) {
        return new ResponseEntity<>(taskService.addTask(task), HttpStatus.CREATED);
    }

    @GetMapping("/task")
    public ResponseEntity<List<Task>> getAllTasks() {
        return new ResponseEntity<>(taskService.getTasks(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable String id) {
        return new ResponseEntity<>(taskService.getTask(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> editTask(@PathVariable String id, @RequestBody Task task) {
        task.setId(id);
        return new ResponseEntity<>(taskService.editTask(task), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable String id) {
        taskService.deleteTask(id);
        return new ResponseEntity<>("Deleted.", HttpStatus.OK);
    }

    @GetMapping("/") public String health()
    {
        return "App is healthy";
    }
}
