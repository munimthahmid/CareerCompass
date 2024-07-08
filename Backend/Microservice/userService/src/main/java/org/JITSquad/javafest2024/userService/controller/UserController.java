package org.JITSquad.javafest2024.userService.controller;

import org.JITSquad.javafest2024.userService.dto.LoginRequest;
import org.JITSquad.javafest2024.userService.dto.RegistrationDTO;
import org.JITSquad.javafest2024.userService.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
      @GetMapping("/hello")
       public String greet()
      {
            return "Hello suckers!";

      }
      @PostMapping("/register")
      public ResponseEntity<String> registerUser(@RequestBody RegistrationDTO registrationDTO)
      {
          return userService.registerUser(registrationDTO);
      }

}
