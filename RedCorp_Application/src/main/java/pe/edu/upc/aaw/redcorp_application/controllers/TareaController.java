package pe.edu.upc.aaw.redcorp_application.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.TareaDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Tarea;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.ITareaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tareas")
public class TareaController {
    @Autowired
    private ITareaService tareaService;

    @PostMapping
    public void registrar(@RequestBody TareaDTO dto){
        ModelMapper m = new ModelMapper();
        Tarea t = m.map(dto,Tarea.class);
        tareaService.insert(t);

    }

    @GetMapping
    public List<TareaDTO> listar()
    {
        return tareaService.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,TareaDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id)
    {
        tareaService.delete(id);
    }

    @GetMapping("/{id}")
    public TareaDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        TareaDTO dto = m.map(tareaService.listId(id),TareaDTO.class);
        return dto;
    }
}
