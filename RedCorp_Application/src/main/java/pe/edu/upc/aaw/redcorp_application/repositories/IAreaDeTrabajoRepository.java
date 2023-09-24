package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.redcorp_application.entities.AreaDeTrabajo;

@Repository
public interface IAreaDeTrabajoRepository extends JpaRepository<AreaDeTrabajo,Integer> {
}
