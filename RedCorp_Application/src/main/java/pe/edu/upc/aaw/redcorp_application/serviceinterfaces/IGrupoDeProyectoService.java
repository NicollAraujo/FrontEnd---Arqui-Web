package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.GrupoDeProyecto;

import java.util.List;

public interface IGrupoDeProyectoService {
    public void insert(GrupoDeProyecto grupoDeProyecto);
    public List<GrupoDeProyecto> list();
    public void delete(int idGrupoDeProyecto );
    public GrupoDeProyecto listId(int idGrupoDeProyecto);
}
