package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.Proyecto;
import pe.edu.upc.aaw.redcorp_application.repositories.IProyectoRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IProyectoService;

import java.util.List;
@Service
public class ProyectoImplements implements IProyectoService {

    @Autowired
    private IProyectoRepository iP;
    @Override
    public void insert(Proyecto proyecto) {
        iP.save(proyecto);
    }

    @Override
    public List<Proyecto> list() {
        return iP.findAll();
    }

    @Override
    public void delete(int idProyecto) {
        iP.deleteById(idProyecto);
    }

    @Override
    public Proyecto listId(int idProyecto) {
        return iP.findById(idProyecto).orElse(new Proyecto());
    }
}
