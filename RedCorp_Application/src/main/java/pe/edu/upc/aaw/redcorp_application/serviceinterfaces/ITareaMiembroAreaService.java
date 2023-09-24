package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.TareaMiembroArea;

import java.util.List;

public interface ITareaMiembroAreaService {
    void insert(TareaMiembroArea tareaMiembroArea);

    List<TareaMiembroArea> list();

    void delete(int idTareaMiembroArea);

    TareaMiembroArea listId(int idTareaMiembroArea);
}
