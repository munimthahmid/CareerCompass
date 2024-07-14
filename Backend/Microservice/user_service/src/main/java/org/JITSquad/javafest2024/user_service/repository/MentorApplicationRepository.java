package org.JITSquad.javafest2024.user_service.repository;

import java.util.UUID;
import org.JITSquad.javafest2024.user_service.model.MentorApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorApplicationRepository extends JpaRepository<MentorApplication, UUID> {}
