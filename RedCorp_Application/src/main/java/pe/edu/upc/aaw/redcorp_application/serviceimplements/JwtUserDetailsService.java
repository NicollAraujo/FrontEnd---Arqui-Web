package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.Usuario;
import pe.edu.upc.aaw.redcorp_application.repositories.IUsuarioRepository;

//Clase 2
@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Autowired
    private IUsuarioRepository repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario user = repo.findByUserName(username);

        if(user == null) {
            throw new UsernameNotFoundException(String.format("User not exists", username));
        }

        List<GrantedAuthority> roles = new ArrayList<>();

        roles.add(new SimpleGrantedAuthority(user.getRol().getDescripcion()));

        UserDetails ud = new org.springframework.security.core.userdetails.User(user.getUserName(), user.getContrasena(), user.getEnabled(), true, true, true, roles);

        return ud;
    }
}