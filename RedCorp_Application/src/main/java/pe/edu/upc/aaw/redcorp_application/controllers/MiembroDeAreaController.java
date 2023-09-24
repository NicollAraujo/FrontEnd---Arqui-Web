package pe.edu.upc.aaw.redcorp_application.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.MiembroDeAreaDTO;
import pe.edu.upc.aaw.redcorp_application.entities.MiembroDeArea;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IMiembroDeAreaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/miembrosdearea")
public class MiembroDeAreaController {
    @Autowired
    private IMiembroDeAreaService iM;

    @PostMapping
    public void registrar(@RequestBody MiembroDeAreaDTO dto) {
        ModelMapper m = new ModelMapper();
        MiembroDeArea ma = m.map(dto, MiembroDeArea.class);
        iM.insert(ma);
    }

    @GetMapping
    public List<MiembroDeAreaDTO> listar() {
        return iM.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, MiembroDeAreaDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        iM.delete(id);
    }
    @GetMapping("/{id}")
    public MiembroDeAreaDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        MiembroDeAreaDTO dto = m.map(iM.listId(id),MiembroDeAreaDTO.class);
        return dto;
    }
}
