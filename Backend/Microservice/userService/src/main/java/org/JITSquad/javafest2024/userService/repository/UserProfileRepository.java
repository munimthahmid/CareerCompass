package org.JITSquad.javafest2024.userService.repository;

import org.JITSquad.javafest2024.userService.model.User;
import org.JITSquad.javafest2024.userService.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, UUID>{
    UserProfile findByUser(User user);
}
