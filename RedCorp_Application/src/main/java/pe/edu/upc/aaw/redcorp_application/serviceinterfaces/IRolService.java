package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.Proyecto;
import pe.edu.upc.aaw.redcorp_application.entities.Rol;

import java.util.List;

public interface IRolService {
    public void insert(Rol rol);
    public List<Rol> list();
    public void delete(int idRol );
    public Rol listId(int idRol);
}
