package org.JITSquad.javafest2024.userService.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.JITSquad.javafest2024.userService.model.Roles;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private UUID userId; //userId and profileId are the same
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate dateOfBirth;
    private String bio;
    private String address;
    private String linkedinUrl;
    private String githubUrl;
    private String profilePicture;
    private String currentCareer;
    private String interests;
    private String careerGoals;
    @Enumerated(EnumType.STRING)
    private Roles role;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
