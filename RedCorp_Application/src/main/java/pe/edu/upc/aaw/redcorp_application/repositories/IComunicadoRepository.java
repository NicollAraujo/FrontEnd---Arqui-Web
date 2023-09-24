package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.aaw.redcorp_application.entities.Comunicado;

public interface IComunicadoRepository extends JpaRepository<Comunicado,Integer> {
}
