package org.JITSquad.javafest2024.userService.Utils.Mappers;

import org.JITSquad.javafest2024.userService.dto.MentorDto.MentorApplicationDTO;
import org.JITSquad.javafest2024.userService.dto.MentorDto.MentorDTO;
import org.JITSquad.javafest2024.userService.dto.UserDto.UserDTO;
import org.JITSquad.javafest2024.userService.model.MentorProfile;
import org.JITSquad.javafest2024.userService.model.User;
import org.JITSquad.javafest2024.userService.model.UserProfile;

import java.time.LocalDateTime;

public class Mapper {
    public void createMentorProfile(MentorApplicationDTO mentorApplicationDTO, MentorProfile mentorProfile)
    {
        mentorProfile.setFirstName(mentorApplicationDTO.getFirstName());
        mentorProfile.setLastName(mentorApplicationDTO.getLastName());
        mentorProfile.setDateOfBirth(mentorApplicationDTO.getDateOfBirth());
        mentorProfile.setGender(mentorApplicationDTO.getGender());
        mentorProfile.setExpertise(mentorApplicationDTO.getExpertise());
        mentorProfile.setBio(mentorApplicationDTO.getBio());
        mentorProfile.setMentorshipAreas(mentorApplicationDTO.getMentorshipAreas());
        mentorProfile.setCertifications(mentorApplicationDTO.getCertifications());
        mentorProfile.setMentorshipFee(mentorApplicationDTO.getMentorShipFee());
        mentorProfile.setProfilePicture(mentorApplicationDTO.getProfilePicture());
        mentorProfile.setYearsOfExperience(mentorApplicationDTO.getYearsOfExperience());
        mentorProfile.setProfessionalAffiliations(mentorApplicationDTO.getProfessionalAffiliations());

    }
    public void updateMentorProfile(MentorDTO mentorDTO, MentorProfile mentorProfile)
    {
        mentorProfile.setFirstName(mentorDTO.getFirstName());
        mentorProfile.setLastName(mentorDTO.getLastName());
        mentorProfile.setDateOfBirth(mentorDTO.getDateOfBirth());
        mentorProfile.setGender(mentorDTO.getGender());
        mentorProfile.setExpertise(mentorDTO.getExpertise());
        mentorProfile.setBio(mentorDTO.getBio());
        mentorProfile.setMentorshipAreas(mentorDTO.getMentorshipAreas());
        mentorProfile.setCertifications(mentorDTO.getCertifications());
        mentorProfile.setMentorshipFee(mentorDTO.getMentorshipFee());
        mentorProfile.setProfilePicture(mentorDTO.getProfilePicture());
        mentorProfile.setYearsOfExperience(mentorDTO.getYearsOfExperience());
        mentorProfile.setProfessionalAffiliations(mentorDTO.getProfessionalAffiliations());
    }
    public void createUserDTO(UserProfile userProfile, UserDTO userDTO)
    {
        userDTO.setUserId(userProfile.getUser().getUserId());
        userDTO.setUsername(userProfile.getUser().getUsername());
        userDTO.setEmail(userProfile.getUser().getEmail());
        userDTO.setRole(userProfile.getUser().getRole());
        userDTO.setFirstName(userProfile.getFirstName());
        userDTO.setLastName(userProfile.getLastName());
        userDTO.setDateOfBirth(userProfile.getDateOfBirth());
        userDTO.setBio(userProfile.getBio());
        userDTO.setProfilePicture(userProfile.getProfilePicture());
        userDTO.setAddress(userProfile.getAddress());
        userDTO.setCareerGoals(userProfile.getCareerGoals());
        userDTO.setInterests(userProfile.getInterests());
        userDTO.setCurrentCareer(userProfile.getCurrentCareer());
        userDTO.setGithubUrl(userProfile.getGithubUrl());
        userDTO.setLinkedinUrl(userProfile.getLinkedinUrl());
        userDTO.setCreatedAt(userProfile.getCreatedAt());
        userDTO.setUpdatedAt(userProfile.getUpdatedAt());
    }
    public void createUserDTOFromUser(User user, UserDTO userDTO)
    {
        userDTO.setUserId(user.getUserId());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setRole(user.getRole());
    }
    public void UpdateUserProfileFromDTO(UserDTO userDTO, UserProfile userProfile)
    {

        userProfile.setProfileId(userDTO.getUserId());
        userProfile.setFirstName(userDTO.getFirstName());
        userProfile.setLastName(userDTO.getLastName());
        userProfile.setGender(userDTO.getGender());
        userProfile.setDateOfBirth(userDTO.getDateOfBirth());
        userProfile.setBio(userDTO.getBio());
        userProfile.setProfilePicture(userDTO.getProfilePicture());
        userProfile.setAddress(userDTO.getAddress());
        userProfile.setCareerGoals(userDTO.getCareerGoals());
        userProfile.setInterests(userDTO.getInterests());
        userProfile.setCurrentCareer(userDTO.getCurrentCareer());
        userProfile.setGithubUrl(userDTO.getGithubUrl());
        userProfile.setLinkedinUrl(userDTO.getLinkedinUrl());
        userProfile.setCreatedAt(userDTO.getCreatedAt());
        userProfile.setUpdatedAt(LocalDateTime.now());
    }
    public void updateUserFromDTO(UserDTO userDTO, User user)
    {
        user.setUserId(userDTO.getUserId());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setCreatedAt(userDTO.getCreatedAt());
        user.setUpdatedAt(LocalDateTime.now());
    }
}
