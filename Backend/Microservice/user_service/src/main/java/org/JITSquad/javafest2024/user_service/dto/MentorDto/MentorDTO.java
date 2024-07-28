package org.JITSquad.javafest2024.user_service.dto.MentorDto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.JITSquad.javafest2024.user_service.model.Gender;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MentorDTO {
    private UUID mentorId; // mentorId and profileId are the same
    private String username;
    private String firstName;
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String email;
    private LocalDate dateOfBirth;
    private String profilePicture;
    private String bio;
    private String expertise;
    private Integer yearsOfExperience;
    private String mentorshipAreas;
    private String certifications;
    private String professionalAffiliations;
    private Integer mentorshipFee;
    private Integer menteeCount;
    private Integer rating;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
