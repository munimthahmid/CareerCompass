package org.JITSquad.javafest2024.userService.service;

import org.JITSquad.javafest2024.userService.Utils.Mappers.Mapper;
import org.JITSquad.javafest2024.userService.dto.MentorDto.MentorApplicationDTO;
import org.JITSquad.javafest2024.userService.dto.UserDto.RegistrationDTO;
import org.JITSquad.javafest2024.userService.model.MentorApplication;
import org.JITSquad.javafest2024.userService.model.MentorProfile;
import org.JITSquad.javafest2024.userService.model.Roles;
import org.JITSquad.javafest2024.userService.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AdminService {
    private UserService userService;
    private MentorService mentorService;

    public AdminService(UserService userService, MentorService mentorService) {
        this.userService = userService;
        this.mentorService = mentorService;
    }

    public ResponseEntity<String> registerAdmin(RegistrationDTO registrationDTO) {
        User admin = userService.createUser(registrationDTO.getUsername(), registrationDTO.getEmail(), registrationDTO.getPassword(), Roles.ROLE_ADMIN);
        try {
            userService.getUserRepository().save(admin);
            return ResponseEntity.ok("Admin registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error registering admin");
        }
    }

    public ResponseEntity<List<MentorApplication>> getMentorApplications() {
        try {
            return ResponseEntity.ok(mentorService.getMentorApplicationRepository().findAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    public ResponseEntity<MentorApplication> getMentorApplication(UUID id) {
        try {
            return ResponseEntity.ok(mentorService.getMentorApplicationRepository().findById(id).get());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    public ResponseEntity<String> approveMentorApplication(UUID id) {
        MentorApplication mentorApplication = mentorService.getMentorApplicationRepository().findById(id).get();
        MentorApplicationDTO mentorApplicationDTO = mentorApplication.getMentorApplicationDTO();
        User mentor = userService.createUser(mentorApplicationDTO.getUsername(), mentorApplicationDTO.getEmail(), mentorApplicationDTO.getPassword(), Roles.ROLE_MENTOR);
        Mapper mapper = new Mapper();
        MentorProfile mentorProfile = new MentorProfile();
        mapper.createMentorProfile(mentorApplicationDTO, mentorProfile);
        mentor.setMentorProfile(mentorProfile);
        mentorProfile.setUser(mentor);
        try {
            userService.getUserRepository().save(mentor);
            mentorService.getMentorProfileRepository().save(mentorProfile);
            mentorService.getMentorApplicationRepository().delete(mentorApplication);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body("Error approving mentor application");
        }

        return ResponseEntity.ok("Mentor application was approved successfully");
    }

    public ResponseEntity<String> rejectMentorApplication(UUID id) {
        try {
            mentorService.getMentorApplicationRepository().deleteById(id);
            return ResponseEntity.ok("Mentor application was rejected successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error rejecting mentor application");
        }
    }
}
