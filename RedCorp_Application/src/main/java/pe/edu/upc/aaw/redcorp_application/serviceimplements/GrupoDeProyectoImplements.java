package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.GrupoDeProyecto;
import pe.edu.upc.aaw.redcorp_application.entities.Proyecto;
import pe.edu.upc.aaw.redcorp_application.repositories.IGrupoDeProyectoRepository;
import pe.edu.upc.aaw.redcorp_application.repositories.IProyectoRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IGrupoDeProyectoService;

import java.util.List;

@Service
public class GrupoDeProyectoImplements implements IGrupoDeProyectoService {

    @Autowired
    private IGrupoDeProyectoRepository iG;

    @Override
    public void insert(GrupoDeProyecto grupoDeProyecto) {
        iG.save(grupoDeProyecto);
    }

    @Override
    public List<GrupoDeProyecto> list() {
        return iG.findAll();
    }

    @Override
    public void delete(int idGrupoDeProyecto) {
        iG.deleteById(idGrupoDeProyecto);
    }

    @Override
    public GrupoDeProyecto listId(int idGrupoDeProyecto) {
         return iG.findById(idGrupoDeProyecto).orElse(new GrupoDeProyecto());
    }
}
