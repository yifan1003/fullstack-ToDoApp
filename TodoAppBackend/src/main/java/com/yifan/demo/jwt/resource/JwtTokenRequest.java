package com.yifan.demo.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

   private static final long serialVersionUID = -5616176897013108345L;

   private String username;
   private String password;
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5aWZhbiIsImV4cCI6MTYyNDU4MDY4OCwiaWF0IjoxNjIzOTc1ODg4fQ.04ydKy_Up8jEXKnDFw-AKrrOGF2BjINfyOrVSPkV-g__eBYH73NP1XH3bUaf7XQRznzDLUCj07XhwYMMbhbA1Q"
//    }

   public JwtTokenRequest() {
        super();
    }
    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
