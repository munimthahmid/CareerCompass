package org.JITSquad.javafest2024.user_service.service;

import java.util.List;
import org.JITSquad.javafest2024.user_service.model.User;
import org.JITSquad.javafest2024.user_service.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserLoadingService implements UserDetailsService {
    private final UserRepository userRepository;

    public UserLoadingService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("no user found with email: " + username);
        }

        GrantedAuthority grantedAuthority =
                new SimpleGrantedAuthority(user.getRole().name());

        List<GrantedAuthority> authorityList = List.of(grantedAuthority);

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(), user.getPassword(), authorityList);
    }
}
