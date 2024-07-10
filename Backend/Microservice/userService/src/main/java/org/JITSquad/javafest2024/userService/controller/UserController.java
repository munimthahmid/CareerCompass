package org.JITSquad.javafest2024.userService.controller;

import org.JITSquad.javafest2024.userService.dto.Requests.LoginRequest;
import org.JITSquad.javafest2024.userService.dto.UserDto.RegistrationDTO;
import org.JITSquad.javafest2024.userService.dto.UserDto.UserDTO;
import org.JITSquad.javafest2024.userService.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
      @GetMapping("/hello")
       public String greet()
      {
            return "Hello Suckers!";
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
        public ResponseEntity<?> getUserByUsername(@PathVariable String username)
        {
            return userService.getUserByUsername(username);
        }
        @PutMapping("/user/update/id/{userId}")
        public ResponseEntity<?> updateUserById(@PathVariable UUID userId, @RequestBody UserDTO userDTO)
        {
            return userService.updateUserById(userId,userDTO);
        }



}
