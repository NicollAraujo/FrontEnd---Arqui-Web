package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.Comentario;
import pe.edu.upc.aaw.redcorp_application.entities.Tarea;
import pe.edu.upc.aaw.redcorp_application.repositories.IComentarioRepository;
import pe.edu.upc.aaw.redcorp_application.repositories.ITareaRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IComentarioService;

import java.util.List;


@Service
public class ComentarioServiceImplement implements IComentarioService {
    @Autowired
    private IComentarioRepository commentRepository;


    @Override
    public void insert(Comentario comentario) {
        commentRepository.save(comentario);
    }

    @Override
    public List<Comentario> list() {
        return commentRepository.findAll();
    }

    @Override
    public void delete(int idComentario) {
        commentRepository.deleteById(idComentario);
    }

    @Override
    public Comentario listId(int idComentario) {
        return  commentRepository.findById(idComentario).orElse(new Comentario());
    }

    @Override
    public List<String[]> idCommentNameTask() {
        return commentRepository.idCommentNameTask();
    }

}
