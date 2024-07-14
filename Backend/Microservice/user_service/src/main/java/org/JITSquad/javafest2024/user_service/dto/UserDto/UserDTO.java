package org.JITSquad.javafest2024.user_service.dto.UserDto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.JITSquad.javafest2024.user_service.model.Gender;
import org.JITSquad.javafest2024.user_service.model.Roles;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private UUID userId; // userId and profileId are the same
    private String username;
    private String firstName;
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Gender gender;

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
