package org.JITSquad.javafest2024.userService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationDTO {
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private String role;
}
