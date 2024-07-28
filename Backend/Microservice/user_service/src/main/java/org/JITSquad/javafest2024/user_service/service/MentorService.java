package org.JITSquad.javafest2024.user_service.service;

import java.util.UUID;
import lombok.Getter;
import org.JITSquad.javafest2024.user_service.dto.MentorDto.MentorApplicationDTO;
import org.JITSquad.javafest2024.user_service.dto.MentorDto.MentorDTO;
import org.JITSquad.javafest2024.user_service.model.MentorApplication;
import org.JITSquad.javafest2024.user_service.repository.MentorApplicationRepository;
import org.JITSquad.javafest2024.user_service.repository.MentorProfileRepository;
import org.JITSquad.javafest2024.user_service.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MentorService {
    UserService userService;

    @Getter
    MentorProfileRepository mentorProfileRepository;

    UserRepository userRepository;

    @Getter
    MentorApplicationRepository mentorApplicationRepository;

    public MentorService(
            UserService userService,
            MentorProfileRepository mentorProfileRepository,
            MentorApplicationRepository mentorApplicationRepository,
            UserRepository userRepository) {
        this.userService = userService;
        this.mentorProfileRepository = mentorProfileRepository;
        this.userRepository = userRepository;
        this.mentorApplicationRepository = mentorApplicationRepository;
    }

    public ResponseEntity<String> applyAsMentor(MentorApplicationDTO mentorApplicationDTO) {
        MentorApplication mentorApplication = new MentorApplication();
        mentorApplication.setMentorApplicationDTO(mentorApplicationDTO);
        try {
            mentorApplicationRepository.save(mentorApplication);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in applying as mentor");
        }
        return ResponseEntity.ok("Mentor application submitted successfully");
    }

    public ResponseEntity<?> getMentorById(UUID mentorId) {
        try {
            return ResponseEntity.ok(mentorProfileRepository.findById(mentorId).get());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in fetching mentor");
        }
    }

    public ResponseEntity<?> updateMentorById(UUID mentorId, MentorDTO mentorDTO) {
        try {
            mentorProfileRepository.updateMentorProfile(mentorId, mentorDTO);
            userRepository.updateMentor(mentorId, mentorDTO);
            return ResponseEntity.ok("Mentor updated successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error in updating mentor");
        }
    }
}
