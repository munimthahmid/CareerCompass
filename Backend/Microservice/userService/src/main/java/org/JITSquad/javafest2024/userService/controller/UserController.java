package org.JITSquad.javafest2024.userService.controller;

import org.JITSquad.javafest2024.userService.dto.LoginRequest;
import org.JITSquad.javafest2024.userService.dto.RegistrationDTO;
import org.JITSquad.javafest2024.userService.model.User;
import org.JITSquad.javafest2024.userService.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
      @GetMapping("/hello")
       public String greet()
      {
            return "Hello Suckers!";
      }
      @PreAuthorize("hasRole('ROLE_MENTOR')")
      @GetMapping("/mentor")
      public String mentor()
      {
                return "Hello Mentor!";
      }
      @PreAuthorize("hasRole('ROLE_USER')")
      @GetMapping("/user")
        public String user()
        {
            return "Hello User!";
        }
//-------------------------------------main code-------------------------------------
      @PostMapping("/register")
      public ResponseEntity<String> registerUser(@RequestBody RegistrationDTO registrationDTO)
      {
          return userService.registerUser(registrationDTO);
      }
        @PostMapping("/signin")
        public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest)
        {
            return userService.authenticateUser(loginRequest);
        }
        @GetMapping("/user/id/{userId}")
        public ResponseEntity<?> getUserById(@PathVariable UUID userId)
        {
                return userService.getUserById(userId);
        }
        @GetMapping("/user/name/{username}")
        public ResponseEntity<User> getUserByUsername(@PathVariable String username)
        {
            return userService.getUserByUsername(username);
        }


}
