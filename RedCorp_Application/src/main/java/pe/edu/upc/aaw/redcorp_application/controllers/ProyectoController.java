package pe.edu.upc.aaw.redcorp_application.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.ProyectoDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Proyecto;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IProyectoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/proyectos")
public class ProyectoController {
    @Autowired
    private IProyectoService iP;
    @PostMapping
    private void registrar(@RequestBody ProyectoDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Proyecto p = m.map(dto,Proyecto.class);
        iP.insert(p);
    }
    @GetMapping
    public List<ProyectoDTO> listar()
    {
        return iP.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,ProyectoDTO.class);
        }).collect(Collectors.toList());
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id)
    {
        iP.delete(id);
    }

    @GetMapping("/{id}")
    public ProyectoDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        ProyectoDTO dto = m.map(iP.listId(id),ProyectoDTO.class);
        return dto;
    }

}
