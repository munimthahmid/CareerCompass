package org.JITSquad.javafest2024.userService.service;
import org.JITSquad.javafest2024.userService.model.User;
import org.JITSquad.javafest2024.userService.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserLoadingService implements UserDetailsService {
    private final UserRepository userRepository;

    public UserLoadingService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);

        if(user == null){
            throw  new UsernameNotFoundException("no user found with email: "+ username);

        }

        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(user.getRole().name());

        List<GrantedAuthority> authorityList = List.of(grantedAuthority);

        return  new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),
                authorityList);
    }
}
