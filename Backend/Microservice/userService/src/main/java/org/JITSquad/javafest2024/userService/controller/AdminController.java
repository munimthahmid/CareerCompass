package org.JITSquad.javafest2024.userService.controller;

import org.JITSquad.javafest2024.userService.dto.UserDto.RegistrationDTO;
import org.JITSquad.javafest2024.userService.model.MentorApplication;
import org.JITSquad.javafest2024.userService.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class AdminController {
        private AdminService adminService;

        public AdminController(AdminService adminService) {
                this.adminService = adminService;
        }

        @GetMapping("/hello")
        public String greet()
        {
            return "Hello Suckers!";
        }
        @PreAuthorize("hasRole('ROLE_ADMIN')")
        @GetMapping("/admin")
        public String admin()
        {
            return "Hello Admin!";
        }

        @PostMapping("/register")
        public ResponseEntity<String> registerAdmin(@RequestBody RegistrationDTO registrationDTO)
        {
            return adminService.registerAdmin(registrationDTO);
        }


//-------------------------------------main code-------------------------------------
        @PreAuthorize("hasRole('ROLE_ADMIN')")
        @GetMapping("/mentor_applications")
        public ResponseEntity<List<MentorApplication>> getMentorApplications()
        {
            return adminService.getMentorApplications();
        }
        @GetMapping("/mentor_applications/{id}")
        public ResponseEntity<MentorApplication> getMentorApplication(@PathVariable UUID id)
        {
            return adminService.getMentorApplication(id);
        }
        @PreAuthorize("hasRole('ROLE_ADMIN')")
        @PostMapping("/mentor_applications/{id}/approve")
        public ResponseEntity<String> approveMentorApplication(@PathVariable UUID id)
        {
            return adminService.approveMentorApplication(id);
        }
        @PreAuthorize("hasRole('ROLE_ADMIN')")
        @PostMapping("/mentor_applications/{id}/reject")
        public ResponseEntity<String> rejectMentorApplication(@PathVariable UUID id)
        {
            return adminService.rejectMentorApplication(id);
        }
}
