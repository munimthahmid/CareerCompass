package org.JITSquad.javafest2024.userService.service;

import org.JITSquad.javafest2024.userService.dto.LoginRequest;
import org.JITSquad.javafest2024.userService.dto.LoginResponse;
import org.JITSquad.javafest2024.userService.dto.RegistrationDTO;
import org.JITSquad.javafest2024.userService.model.User;
import org.JITSquad.javafest2024.userService.model.UserProfile;
import org.JITSquad.javafest2024.userService.repository.UserProfileRepository;
import org.JITSquad.javafest2024.userService.repository.UserRepository;
import org.JITSquad.javafest2024.userService.security.jwt.JwtUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserProfileRepository userProfileRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    private final UserLoadingService userLoadingService;

    public UserService(UserRepository userRepository, UserProfileRepository userProfileRepository, PasswordEncoder passwordEncoder, JwtUtils jwtUtils, AuthenticationManager authenticationManager, UserLoadingService userLoadingService) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
        this.userLoadingService = userLoadingService;
    }

    public ResponseEntity<String> registerUser(RegistrationDTO registrationDTO) {
        User newUser = new User();
        newUser.setUsername(registrationDTO.getUsername());
        newUser.setEmail(registrationDTO.getEmail());
        newUser.setPassword(passwordEncoder.encode(registrationDTO.getPassword()));
        newUser.setRole(registrationDTO.getRole());
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

    public Authentication authentication(String email, String password){

        UserDetails userDetails = userLoadingService.loadUserByUsername(email);

        if(userDetails == null){
            throw  new BadCredentialsException("Invalid email ...");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

    }

    public ResponseEntity<?> authenticateUser(LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authentication(email,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String jwtToken = jwtUtils.generateTokenFromUsername(userDetails);
        String name = authentication.getName();
        User loggedUser = userRepository.findByEmail(name);
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();
        LoginResponse loginResponse = new LoginResponse(jwtToken,userDetails.getUsername(),roles);
        return ResponseEntity.ok(loginResponse);
    }

    public ResponseEntity<?> getUserById(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
        return ResponseEntity.ok(user);
    }

    public ResponseEntity<User> getUserByUsername(String username) {
        return new ResponseEntity<>(userRepository.findByUsername(username), HttpStatus.OK);
    }
}
