package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.AreaDeTrabajo;

import java.util.List;

public interface IAreaDeTrabajoService {
    void insert(AreaDeTrabajo areaDeTrabajo);
    List<AreaDeTrabajo> list();
    void delete(int idAreaDeTrabajo);
    AreaDeTrabajo listId(int idAreaDeTrabajo);
}
