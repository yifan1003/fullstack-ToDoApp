package com.yifan.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
    @GetMapping("/welcome")
    public String helloWorld() {
        return "Hello World";
    }
    //hello-world-bean
    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World Bean");
    }
    @GetMapping("/hello/{name}")
    public HelloWorldBean helloPathVARIABLE(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s",name));
    }
}
