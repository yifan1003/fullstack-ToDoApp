package com.yifan.demo.auth;

import com.yifan.demo.HelloWorldTest.HelloWorldBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class BasicAuthenticationController {
    @GetMapping("/basicauth")
    public AuthenticationBean helloPathVARIABLE(@PathVariable String name) {
        return new AuthenticationBean("You are authenticated");
        // throw new RuntimeException("Something went wrong");
    }
}
