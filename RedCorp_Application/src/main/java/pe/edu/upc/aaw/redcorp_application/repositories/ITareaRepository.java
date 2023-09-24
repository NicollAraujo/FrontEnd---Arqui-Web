package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.redcorp_application.entities.Tarea;

import java.util.List;

@Repository
public interface ITareaRepository extends JpaRepository<Tarea,Integer> {

    @Query(value = "select t.descripcion as descripcion_tarea,p.nombre as nombre_proyecto\n" +
            "from tarea t inner join proyecto p\n" +
            "on t.id_tarea=p.id_proyecto\n" +
            "group by t.descripcion, p.nombre", nativeQuery = true)
    public List<String[]> descripcionTareaByProyectoName();
}
