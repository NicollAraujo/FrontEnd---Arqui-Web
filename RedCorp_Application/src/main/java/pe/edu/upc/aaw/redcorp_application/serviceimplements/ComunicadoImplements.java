package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.Comunicado;
import pe.edu.upc.aaw.redcorp_application.repositories.IComunicadoRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IComunicadoService;

import java.util.List;

@Service
public class ComunicadoImplements implements IComunicadoService {

    @Autowired
    private IComunicadoRepository iC;

    @Override
    public void insert(Comunicado comunicado) {
        iC.save(comunicado);
    }

    @Override
    public List<Comunicado> list() {
        return iC.findAll();
    }

    @Override
    public void delete(int idComunicado) {
        iC.deleteById(idComunicado);
    }

    @Override
    public Comunicado listId(int idComunicado) {
        return iC.findById(idComunicado).orElse(new Comunicado());
    }
}
