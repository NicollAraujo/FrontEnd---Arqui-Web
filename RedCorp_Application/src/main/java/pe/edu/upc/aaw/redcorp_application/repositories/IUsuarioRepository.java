package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.redcorp_application.entities.Usuario;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Long> {
    public Usuario findByUserName(String username);


}
