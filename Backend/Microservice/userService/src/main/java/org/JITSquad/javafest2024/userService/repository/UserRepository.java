package org.JITSquad.javafest2024.userService.repository;

import org.JITSquad.javafest2024.userService.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>{
   User findByEmail(String email);
   User findByUsername(String username);
}
