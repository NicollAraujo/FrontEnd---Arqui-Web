package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.Proyecto;
import pe.edu.upc.aaw.redcorp_application.entities.Rol;
import pe.edu.upc.aaw.redcorp_application.repositories.IRolRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IRolService;

import java.util.List;

@Service
public class RolImplements implements IRolService {
    @Autowired
    private IRolRepository iR;


    @Override
    public void insert(Rol rol) {
        iR.save(rol);
    }

    @Override
    public List<Rol> list() {
        return iR.findAll();
    }

    @Override
    public void delete(int idRol) {
        iR.deleteById(idRol);
    }

    @Override
    public Rol listId(int idRol) {
        return iR.findById(idRol).orElse(new Rol());
    }
}
