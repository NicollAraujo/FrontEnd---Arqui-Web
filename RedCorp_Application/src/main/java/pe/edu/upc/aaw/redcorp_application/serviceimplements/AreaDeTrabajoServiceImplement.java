package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.AreaDeTrabajo;
import pe.edu.upc.aaw.redcorp_application.repositories.IAreaDeTrabajoRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IAreaDeTrabajoService;

import java.util.List;

@Service
public class AreaDeTrabajoServiceImplement implements IAreaDeTrabajoService {
    @Autowired
    private IAreaDeTrabajoRepository iA;

    @Override
    public void insert(AreaDeTrabajo areaDeTrabajo) {
        iA.save(areaDeTrabajo);
    }

    @Override
    public List<AreaDeTrabajo> list() {
        return iA.findAll();
    }

    @Override
    public void delete(int idAreaDeTrabajo) {
        iA.deleteById(idAreaDeTrabajo);
    }

    @Override
    public AreaDeTrabajo listId(int idAreaDeTrabajo) {
        return iA.findById(idAreaDeTrabajo).orElse(new AreaDeTrabajo());
    }
}
