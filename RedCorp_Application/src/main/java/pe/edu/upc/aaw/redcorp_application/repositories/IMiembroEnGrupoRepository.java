package pe.edu.upc.aaw.redcorp_application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.aaw.redcorp_application.entities.MiembroEnGrupo;

@Repository
public interface IMiembroEnGrupoRepository extends  JpaRepository<MiembroEnGrupo,Integer> {
}
