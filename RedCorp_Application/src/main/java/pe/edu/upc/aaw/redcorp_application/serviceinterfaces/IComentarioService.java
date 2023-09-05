package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.Comentario;
import java.util.List;

public interface IComentarioService {

    public void insert(Comentario comentario);
    public List<Comentario> list();
    public void delete(int idComentario);
    public Comentario listId(int idComentario);
}
