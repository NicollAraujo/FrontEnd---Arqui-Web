package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.TareaMiembroArea;
import pe.edu.upc.aaw.redcorp_application.repositories.ITareaMiembroAreaRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.ITareaMiembroAreaService;

import java.util.List;

@Service
public class TareaMiembroAreaService implements ITareaMiembroAreaService {
    @Autowired
    private ITareaMiembroAreaRepository iT;
    @Override
    public void insert(TareaMiembroArea tareaMiembroArea)
    {
        iT.save(tareaMiembroArea);
    }
    @Override
    public List<TareaMiembroArea>list(){
        return iT.findAll();
    }
    @Override
    public void delete(int idTareaMiembroArea){
        iT.deleteById(idTareaMiembroArea);
    }
    @Override
    public TareaMiembroArea listId(int idTareaMiembroArea){
        return  iT.findById(idTareaMiembroArea).orElse(new TareaMiembroArea());
    }
}
