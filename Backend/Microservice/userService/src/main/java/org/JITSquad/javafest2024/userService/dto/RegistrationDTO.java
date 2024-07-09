package org.JITSquad.javafest2024.userService.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.JITSquad.javafest2024.userService.model.Roles;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationDTO {
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Roles role;
}
