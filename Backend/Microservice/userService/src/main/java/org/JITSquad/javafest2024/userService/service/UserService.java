package org.JITSquad.javafest2024.userService.service;

import org.JITSquad.javafest2024.userService.dto.RegistrationDTO;
import org.JITSquad.javafest2024.userService.model.User;
import org.JITSquad.javafest2024.userService.model.UserProfile;
import org.JITSquad.javafest2024.userService.repository.UserProfileRepository;
import org.JITSquad.javafest2024.userService.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {
    private UserRepository userRepository;
    private UserProfileRepository userProfileRepository;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, UserProfileRepository userProfileRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public ResponseEntity<String> registerUser(RegistrationDTO registrationDTO) {
        User newUser = new User();
        newUser.setUsername(registrationDTO.getUsername());
        newUser.setEmail(registrationDTO.getEmail());
        newUser.setPasswordHash(passwordEncoder.encode(registrationDTO.getPassword()));
        UserProfile newUserProfile = new UserProfile();
        newUserProfile.setUser(newUser);
        newUserProfile.setFirstName(registrationDTO.getFirstName());
        newUserProfile.setLastName(registrationDTO.getLastName());
        try {
            userRepository.save(newUser);
            userProfileRepository.save(newUserProfile);
            return ResponseEntity.ok("User registered successfully.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("User registration failed.");
        }


    }
}
