package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.Proyecto;

import java.util.List;

public interface IProyectoService {
    public void insert(Proyecto proyecto);
    public List<Proyecto> list();

    public void delete(int idProyecto );

    public Proyecto listId(int idProyecto);
}
