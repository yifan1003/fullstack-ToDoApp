package com.yifan.demo.auth;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
    @GetMapping("/basicauth")
    public AuthenticationBean helloPathVARIABLE() {
        return new AuthenticationBean("You are authenticated");
        // throw new RuntimeException("Something went wrong");
    }
}
