package com.yifan.demo.service;

import com.yifan.demo.bean.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter,"yifan","Learn to dance",new Date(), false));
        todos.add(new Todo(++idCounter,"yifan","Learn java ",new Date(), false));
        todos.add(new Todo(++idCounter,"yifan","Learn vue",new Date(), false));
    }
    public List<Todo> findAll() {
        return todos;
    }
    public Todo save(Todo todo) {
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if(todo == null) return null;
        todos.remove(todo);
        return todo;
    }
    public Todo findById(long id) {
        for(Todo todo : todos) {
            if(todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
