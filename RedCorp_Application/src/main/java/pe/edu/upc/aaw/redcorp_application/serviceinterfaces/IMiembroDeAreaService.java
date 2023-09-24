package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.MiembroDeArea;

import java.util.List;

public interface IMiembroDeAreaService {
    void insert(MiembroDeArea miembroDeArea);
    List<MiembroDeArea> list();
    void delete(int idMiembroDeArea);
    MiembroDeArea listId(int idMiembroDeArea);

}
