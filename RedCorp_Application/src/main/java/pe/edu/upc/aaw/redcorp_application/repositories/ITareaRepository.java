package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.redcorp_application.entities.Tarea;

@Repository
public interface ITareaRepository extends JpaRepository<Tarea,Integer> {
}
