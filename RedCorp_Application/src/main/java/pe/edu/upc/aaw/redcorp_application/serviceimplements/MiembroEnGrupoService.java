package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.MiembroEnGrupo;
import pe.edu.upc.aaw.redcorp_application.repositories.IMiembroEnGrupoRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IMiembroEnGrupoService;

import java.util.List;
@Service
public class MiembroEnGrupoService implements IMiembroEnGrupoService {
    @Autowired
    private IMiembroEnGrupoRepository iM;

    @Override
    public void insert(MiembroEnGrupo miembroEnGrupo) {
        iM.save(miembroEnGrupo);
    }

    @Override
    public List<MiembroEnGrupo> list() {
        return iM.findAll();
    }

    @Override
    public void delete(int idMiembroEnGrupo) {
        iM.deleteById(idMiembroEnGrupo);
    }

    @Override
    public MiembroEnGrupo listId(int idMiembroEnGrupo) {
        return iM.findById(idMiembroEnGrupo).orElse(new MiembroEnGrupo());
    }
}
