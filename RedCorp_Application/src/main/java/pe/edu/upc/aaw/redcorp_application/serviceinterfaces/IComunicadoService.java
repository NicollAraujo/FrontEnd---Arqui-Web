package pe.edu.upc.aaw.redcorp_application.serviceinterfaces;

import pe.edu.upc.aaw.redcorp_application.entities.Comunicado;

import java.util.List;

public interface IComunicadoService {
    public void insert(Comunicado comunicado);
    public List<Comunicado> list();
    public void delete(int idComunicado );
    public Comunicado listId(int idComunicado);
}
