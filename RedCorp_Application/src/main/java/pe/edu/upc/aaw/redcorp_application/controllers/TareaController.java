package pe.edu.upc.aaw.redcorp_application.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.TareaDTO;
import pe.edu.upc.aaw.redcorp_application.dtos.TareaProyectoDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Tarea;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.ITareaService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tareas")
public class TareaController {
    @Autowired
    private ITareaService tareaService;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void registrar(@RequestBody TareaDTO dto){
        ModelMapper m = new ModelMapper();
        Tarea t = m.map(dto,Tarea.class);
        tareaService.insert(t);

    }

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<TareaDTO> listar()
    {
        return tareaService.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,TareaDTO.class);
        }).collect(Collectors.toList());
    }

    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void modificar(@RequestBody TareaDTO dto) {
        ModelMapper m = new ModelMapper();
        Tarea t = m.map(dto, Tarea.class);
        tareaService.insert(t);
    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void eliminar(@PathVariable("id") Integer id)
    {
        tareaService.delete(id);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public TareaDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        TareaDTO dto = m.map(tareaService.listId(id),TareaDTO.class);
        return dto;
    }

    @GetMapping("/descripciontarea")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<TareaProyectoDTO> descriptionTaskNameProyect() {
        List<String[]> lista = tareaService.descripcionTareaByProyectoName();
        List<TareaProyectoDTO> listaDTO = new ArrayList<>();
        for (String[] data : lista) {
            TareaProyectoDTO dto = new TareaProyectoDTO();
            dto.setDescripcionTarea(data[0]);
            dto.setNombreProyecto(data[1]);
            listaDTO.add(dto);
        }
        return listaDTO;
    }

}
