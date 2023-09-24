package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.Usuario;

import java.util.List;

public interface IUsuarioService {
    public void insert(Usuario usuario);
    public List<Usuario> list();

    public void delete(Long idUsuario );

    public Usuario listId(Long idUsuario);
}
