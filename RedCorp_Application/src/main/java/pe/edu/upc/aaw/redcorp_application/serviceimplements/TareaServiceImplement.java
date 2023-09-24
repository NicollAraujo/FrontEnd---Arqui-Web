package pe.edu.upc.aaw.redcorp_application.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.aaw.redcorp_application.entities.Tarea;
import pe.edu.upc.aaw.redcorp_application.entities.TareaMiembroArea;
import pe.edu.upc.aaw.redcorp_application.repositories.ITareaRepository;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.ITareaService;

import java.util.List;

@Service
public class TareaServiceImplement  implements ITareaService {
    @Autowired
    private ITareaRepository tareaRepository;

    @Override
    public void insert(Tarea tarea) {
        tareaRepository.save(tarea);
    }

    @Override
    public List<Tarea> list() {
        return tareaRepository.findAll();
    }

    @Override
    public void delete(int idTarea) {
      tareaRepository.deleteById(idTarea);
    }

    @Override
    public Tarea listId(int idTarea) {
        return  tareaRepository.findById(idTarea).orElse(new Tarea());
    }

    @Override
    public List<String[]> descripcionTareaByProyectoName() {
        return tareaRepository.descripcionTareaByProyectoName();
    }
}
