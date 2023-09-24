package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.redcorp_application.entities.Comentario;

import java.util.List;

@Repository
public interface IComentarioRepository extends JpaRepository<Comentario,Integer> {

    @Query(value = "SELECT COUNT(c.comentario) AS total_comentario, t.nombre AS nombre_tarea\n" +
            "FROM comentario c\n" +
            "INNER JOIN tarea t ON c.tarea_id = t.id_tarea\n" +
            "GROUP BY t.nombre", nativeQuery = true)
    public List<String[]> idCommentNameTask();
}
