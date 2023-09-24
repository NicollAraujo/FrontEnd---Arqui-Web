package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.MiembroDeArea;
import pe.edu.upc.aaw.redcorp_application.repositories.IMiembroDeAreaRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IMiembroDeAreaService;

import java.util.List;

@Service
public class MiembroDeAreaServiceImplement implements IMiembroDeAreaService {
    @Autowired
    private IMiembroDeAreaRepository iM;

    @Override
    public void insert(MiembroDeArea miembroDeArea) {
        iM.save(miembroDeArea);
    }

    @Override
    public List<MiembroDeArea> list() {
        return iM.findAll();
    }

    @Override
    public void delete(int idMiembroDeArea) {
        iM.deleteById(idMiembroDeArea);
    }

    @Override
    public MiembroDeArea listId(int idMiembroDeArea) {
        return iM.findById(idMiembroDeArea).orElse(new MiembroDeArea());
    }
}
