package org.JITSquad.javafest2024.userService.repository;

import org.JITSquad.javafest2024.userService.dto.MentorDto.MentorDTO;
import org.JITSquad.javafest2024.userService.model.MentorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Repository
public interface MentorProfileRepository extends JpaRepository<MentorProfile, UUID> {
    @Modifying
    @Transactional
    @Query("UPDATE MentorProfile m SET m.firstName = :#{#mentorDTO.firstName}, m.lastName = :#{#mentorDTO.lastName}, " +
            "m.gender = :#{#mentorDTO.gender}, m.dateOfBirth = :#{#mentorDTO.dateOfBirth}, m.bio = :#{#mentorDTO.bio}, " +
            "m.profilePicture = :#{#mentorDTO.profilePicture}, m.expertise = :#{#mentorDTO.expertise}, " +
            "m.yearsOfExperience = :#{#mentorDTO.yearsOfExperience}, m.mentorshipAreas = :#{#mentorDTO.mentorshipAreas}, " +
            "m.certifications = :#{#mentorDTO.certifications}, m.professionalAffiliations = :#{#mentorDTO.professionalAffiliations}, " +
            "m.mentorshipFee = :#{#mentorDTO.mentorshipFee}, m.menteeCount = :#{#mentorDTO.menteeCount}, " +
            "m.rating = :#{#mentorDTO.rating}, m.updatedAt = CURRENT_TIMESTAMP WHERE m.profileId = :id")
    void updateMentorProfile(UUID id, MentorDTO mentorDTO);
}
