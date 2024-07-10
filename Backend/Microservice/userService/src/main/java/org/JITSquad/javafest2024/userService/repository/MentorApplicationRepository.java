package org.JITSquad.javafest2024.userService.repository;

import org.JITSquad.javafest2024.userService.model.MentorApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MentorApplicationRepository extends JpaRepository<MentorApplication, UUID>{

}
