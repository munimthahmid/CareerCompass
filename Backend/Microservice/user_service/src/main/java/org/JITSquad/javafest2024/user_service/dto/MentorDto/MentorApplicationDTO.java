package org.JITSquad.javafest2024.user_service.dto.MentorDto;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.JITSquad.javafest2024.user_service.model.Gender;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class MentorApplicationDTO {
    private String username;
    private String email;
    private String password;
    private String firstName;
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private LocalDate dateOfBirth;
    private String profilePicture;
    private String bio;
    private String expertise;
    private Integer yearsOfExperience;
    private String mentorshipAreas;
    private String certifications;
    private String professionalAffiliations;
    private Integer mentorShipFee;
}
