package org.JITSquad.javafest2024.userService.repository;

import org.JITSquad.javafest2024.userService.dto.UserDto.UserDTO;
import org.JITSquad.javafest2024.userService.model.User;
import org.JITSquad.javafest2024.userService.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, UUID>{
    UserProfile findByUser(User user);
    @Modifying
    @Transactional
    @Query("UPDATE UserProfile u SET u.firstName = :#{#userDTO.firstName}, u.lastName = :#{#userDTO.lastName}, " +
            "u.gender = :#{#userDTO.gender}, u.dateOfBirth = :#{#userDTO.dateOfBirth}, u.bio = :#{#userDTO.bio}, " +
            "u.address = :#{#userDTO.address}, u.linkedinUrl = :#{#userDTO.linkedinUrl}, u.githubUrl = :#{#userDTO.githubUrl}, " +
            "u.profilePicture = :#{#userDTO.profilePicture}, u.currentCareer = :#{#userDTO.currentCareer}, " +
            "u.interests = :#{#userDTO.interests}, u.careerGoals = :#{#userDTO.careerGoals}, " +
            "u.updatedAt = CURRENT_TIMESTAMP WHERE u.profileId = :id")
    void updateUserProfile(UUID id, UserDTO userDTO);
}
