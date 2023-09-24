package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.MiembroEnGrupo;

import java.util.List;

public interface IMiembroEnGrupoService {
    void insert(MiembroEnGrupo miembroEnGrupo);

    List<MiembroEnGrupo> list();

    void delete(int idMiembroEnGrupo);

    MiembroEnGrupo listId(int idMiembroEnGrupo);
}
