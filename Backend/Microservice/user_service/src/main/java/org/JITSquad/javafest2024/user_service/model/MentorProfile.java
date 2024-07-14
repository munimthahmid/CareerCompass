package org.JITSquad.javafest2024.user_service.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "mentor_profiles")
public class MentorProfile {
    @Id
    @Column(name = "profile_id", updatable = false, nullable = false)
    private UUID profileId;

    @OneToOne
    @MapsId
    @JsonIgnore
    @JoinColumn(name = "profile_id")
    private User user;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "bio")
    private String bio;

    @Column(name = "profile_picture")
    private String profilePicture;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Column(name = "expertise")
    private String expertise;

    @Column(name = "years_of_experience")
    private Integer yearsOfExperience;

    @Column(name = "mentorship_areas")
    private String mentorshipAreas;

    @Column(name = "certifications")
    private String certifications;

    @Column(name = "professional_affiliations")
    private String professionalAffiliations;

    @Column(name = "mentorship_fee")
    private Integer mentorshipFee;

    @Column(name = "mentee_count")
    private Integer menteeCount;

    @Min(0)
    @Max(5)
    @Column(name = "rating")
    private Float rating;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        rating = 0.0f;
        menteeCount = 0;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
