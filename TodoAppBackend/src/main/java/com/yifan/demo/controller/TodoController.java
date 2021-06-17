package com.yifan.demo.controller;

import com.yifan.demo.bean.Todo;
import com.yifan.demo.service.TodoHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoController {
    @Autowired
    private TodoHardcodedService hardcodedService;
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos( @PathVariable String username){

        return hardcodedService.findAll();
    }
    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo( @PathVariable String username, @PathVariable long id){

        return hardcodedService.findById(id);
    }
    //DELETE/users/{username}/todos/{id}
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = hardcodedService.deleteById(id);
        if(todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
    //Edit /Update a Todo
    //Put /Users/{user_name}/
    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo( @PathVariable String username, @PathVariable long id, @RequestBody Todo todo){

        Todo todoUpdated = hardcodedService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> addTodo(@PathVariable String username, @RequestBody Todo todo) {
        Todo createdTodo = hardcodedService.save(todo);
        //Location
        // Get current resource url
        //users/{username}/todos/{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }


}
