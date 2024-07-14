package org.JITSquad.javafest2024.user_service.controller;

import java.util.UUID;
import org.JITSquad.javafest2024.user_service.dto.MentorDto.MentorApplicationDTO;
import org.JITSquad.javafest2024.user_service.dto.MentorDto.MentorDTO;
import org.JITSquad.javafest2024.user_service.service.MentorService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/mentors")
public class MentorController {

    MentorService mentorService;

    public MentorController(MentorService mentorService) {
        this.mentorService = mentorService;
    }

    @GetMapping("/hello")
    public String greet() {
        return "Hello Suckers!";
    }

    @PreAuthorize("hasRole('ROLE_MENTOR')")
    @GetMapping("/mentor")
    public String mentor() {
        return "Hello Mentor!";
    }

    // -------------------------------------main code-------------------------------------

    @PostMapping("/apply")
    public ResponseEntity<String> applyAsMentor(@RequestBody MentorApplicationDTO mentorApplicationDTO) {
        return mentorService.applyAsMentor(mentorApplicationDTO);
    }

    @GetMapping("/mentor/id/{mentorId}")
    public ResponseEntity<?> getMentorById(@PathVariable UUID mentorId) {
        return mentorService.getMentorById(mentorId);
    }

    @PutMapping("/mentor/update/id/{mentorId}")
    public ResponseEntity<?> updateMentorById(@PathVariable UUID mentorId, @RequestBody MentorDTO mentorDTO) {
        return mentorService.updateMentorById(mentorId, mentorDTO);
    }
}
