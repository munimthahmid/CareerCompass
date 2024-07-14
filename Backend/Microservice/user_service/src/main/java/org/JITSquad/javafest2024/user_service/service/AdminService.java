package org.JITSquad.javafest2024.user_service.service;

import java.util.UUID;
import org.JITSquad.javafest2024.user_service.ApplicationProperties;
import org.JITSquad.javafest2024.user_service.dto.MentorDto.MentorApplicationDTO;
import org.JITSquad.javafest2024.user_service.dto.Responses.PageResponse;
import org.JITSquad.javafest2024.user_service.dto.UserDto.RegistrationDTO;
import org.JITSquad.javafest2024.user_service.model.MentorApplication;
import org.JITSquad.javafest2024.user_service.model.MentorProfile;
import org.JITSquad.javafest2024.user_service.model.Roles;
import org.JITSquad.javafest2024.user_service.model.User;
import org.JITSquad.javafest2024.user_service.utils.Mappers.Mapper;
import org.JITSquad.javafest2024.user_service.utils.Mappers.ResponseMaker;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdminService {
    private final UserService userService;
    private final MentorService mentorService;
    private final ApplicationProperties properties;

    public AdminService(UserService userService, MentorService mentorService, ApplicationProperties properties) {
        this.userService = userService;
        this.mentorService = mentorService;
        this.properties = properties;
    }

    public ResponseEntity<String> registerAdmin(RegistrationDTO registrationDTO) {
        User admin = userService.createUser(
                registrationDTO.getUsername(),
                registrationDTO.getEmail(),
                registrationDTO.getPassword(),
                Roles.ROLE_ADMIN);
        try {
            userService.getUserRepository().save(admin);
            return ResponseEntity.ok("Admin registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error registering admin");
        }
    }

    public ResponseEntity<PageResponse<MentorApplication>> getMentorApplications(int pageNo) {
        pageNo = pageNo <= 1 ? 0 : pageNo - 1;
        Sort sort = Sort.by(Sort.Direction.DESC, "applicationDate");
        Pageable pageable = PageRequest.of(pageNo, properties.pageSize(), sort);
        try {
            var applicationsPage =
                    mentorService.getMentorApplicationRepository().findAll(pageable);
            PageResponse<MentorApplication> pageResponse = new PageResponse<>();
            ResponseMaker<MentorApplication> responseMaker = new ResponseMaker<>();
            responseMaker.makeApplicationResponse(applicationsPage, pageResponse);
            System.out.println(pageResponse);
            return ResponseEntity.ok().body(pageResponse);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(null);
        }
    }

    public ResponseEntity<MentorApplication> getMentorApplication(UUID id) {
        try {
            return ResponseEntity.ok(
                    mentorService.getMentorApplicationRepository().findById(id).get());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    public ResponseEntity<String> approveMentorApplication(UUID id) {
        MentorApplication mentorApplication =
                mentorService.getMentorApplicationRepository().findById(id).get();
        MentorApplicationDTO mentorApplicationDTO = mentorApplication.getMentorApplicationDTO();
        User mentor = userService.createUser(
                mentorApplicationDTO.getUsername(),
                mentorApplicationDTO.getEmail(),
                mentorApplicationDTO.getPassword(),
                Roles.ROLE_MENTOR);
        Mapper mapper = new Mapper();
        MentorProfile mentorProfile = new MentorProfile();
        mapper.createMentorProfile(mentorApplicationDTO, mentorProfile);
        mentor.setMentorProfile(mentorProfile);
        mentorProfile.setUser(mentor);
        try {
            userService.getUserRepository().save(mentor);
            mentorService.getMentorProfileRepository().save(mentorProfile);
            mentorService.getMentorApplicationRepository().delete(mentorApplication);
        } catch (Exception e) {
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
