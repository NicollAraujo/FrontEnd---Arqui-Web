package pe.edu.upc.aaw.redcorp_application.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.ComunicadoDTO;
import pe.edu.upc.aaw.redcorp_application.dtos.ProyectoDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Comunicado;
import pe.edu.upc.aaw.redcorp_application.entities.Proyecto;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IComunicadoService;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IProyectoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/comunicados")
public class ComunicadoController {
    @Autowired
    private IComunicadoService iC;
    @PostMapping
    private void registrar(@RequestBody ComunicadoDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Comunicado p = m.map(dto,Comunicado.class);
        iC.insert(p);
    }
    @GetMapping
    public List<ComunicadoDTO> listar()
    {
        return iC.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,ComunicadoDTO.class);
        }).collect(Collectors.toList());
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id)
    {
        iC.delete(id);
    }

    @GetMapping("/{id}")
    public ComunicadoDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        ComunicadoDTO dto = m.map(iC.listId(id),ComunicadoDTO.class);
        return dto;
    }
}
