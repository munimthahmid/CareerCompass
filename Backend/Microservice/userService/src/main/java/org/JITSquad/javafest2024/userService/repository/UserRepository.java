package org.JITSquad.javafest2024.userService.repository;

import org.JITSquad.javafest2024.userService.dto.MentorDto.MentorDTO;
import org.JITSquad.javafest2024.userService.dto.UserDto.UserDTO;
import org.JITSquad.javafest2024.userService.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>{
   User findByEmail(String email);
   User findByUsername(String username);
   boolean existsByEmail(String email);
   @Modifying
   @Transactional
   @Query("UPDATE User u SET u.username = :#{#userDTO.username}, " +
           "u.email = :#{#userDTO.email}, u.updatedAt = CURRENT_TIMESTAMP " +
           "WHERE u.userId = :id")
   void updateUser(UUID id, UserDTO userDTO);
   @Modifying
   @Transactional
   @Query("UPDATE User u SET u.username = :#{#mentorDTO.username}, " +
           "u.email = :#{#mentorDTO.email}, u.updatedAt = CURRENT_TIMESTAMP " +
           "WHERE u.userId = :id")
   void updateMentor(UUID id, MentorDTO mentorDTO);
}
