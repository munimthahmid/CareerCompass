package org.JITSquad.javafest2024.user_service.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.JITSquad.javafest2024.user_service.dto.MentorDto.MentorApplicationDTO;
import org.hibernate.annotations.UuidGenerator;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class MentorApplication {
    @Id
    @UuidGenerator
    @Column(name = "application_id", updatable = false, nullable = false)
    private UUID applicationId;

    @Embedded
    @Column(name = "mentor_application", nullable = false)
    private MentorApplicationDTO mentorApplicationDTO;

    @Column(name = "application_date")
    private LocalDateTime applicationDate;

    @PrePersist
    protected void onCreate() {
        applicationDate = LocalDateTime.now();
    }
}
