package com.example.backend.service;

import com.example.backend.dao.TaskDao;
import com.example.backend.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(rollbackFor = Exception.class)
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskDao taskDao;

    @Override
    public Task addTask(Task task) {
        return taskDao.save(task);
    }

    @Override
    public List<Task> getTasks() {
        return taskDao.findAll();
    }

    @Override
    public Task getTask(String id) {
        return taskDao.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public Task editTask(Task task) {
        return taskDao.save(task);
    }

    @Override
    public void deleteTask(String id) {
        taskDao.deleteById(id);
    }

}
