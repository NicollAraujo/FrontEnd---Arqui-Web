package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.redcorp_application.entities.TareaMiembroArea;

@Repository
public interface ITareaMiembroAreaRepository extends JpaRepository<TareaMiembroArea,Integer> {
}
