package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.Tarea;

import java.util.List;

public interface ITareaService {

    public void insert(Tarea tarea);
    public List<Tarea> list();
    public void delete(int idTarea);
    public Tarea listId(int idTarea);
}
