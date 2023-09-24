package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.Usuario;
import pe.edu.upc.aaw.redcorp_application.repositories.IUsuarioRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IUsuarioService;

import java.util.List;

@Service
public class UsuarioImplements implements IUsuarioService {
    @Autowired
    private IUsuarioRepository iU;
    @Override
    public void insert(Usuario usuario) {
        iU.save(usuario);
    }

    @Override
    public List<Usuario> list() {
        return iU.findAll();
    }

    @Override
    public void delete(Long idUsuario) {
        iU.deleteById(idUsuario);
    }

    @Override
    public Usuario listId(Long idUsuario) {
        return iU.findById(idUsuario).orElse(new Usuario());
    }
}
