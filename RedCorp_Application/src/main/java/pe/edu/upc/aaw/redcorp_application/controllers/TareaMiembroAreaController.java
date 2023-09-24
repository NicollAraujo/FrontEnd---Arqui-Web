package pe.edu.upc.aaw.redcorp_application.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.TareaMiembroAreaDTO;
import pe.edu.upc.aaw.redcorp_application.entities.TareaMiembroArea;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.ITareaMiembroAreaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tareaMiembroArea")
public class TareaMiembroAreaController {
    @Autowired
    private ITareaMiembroAreaService iT;
    @PostMapping
    private void registrar(@RequestBody TareaMiembroAreaDTO dto){
        ModelMapper m=new ModelMapper();
        TareaMiembroArea t=m.map(dto,TareaMiembroArea.class);
        iT.insert(t);
    }
    @GetMapping()
    public List<TareaMiembroAreaDTO>listar(){
        return  iT.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,TareaMiembroAreaDTO.class);
        }).collect(Collectors.toList());
    }
    @DeleteMapping("/{id}")
    public  void eliminar(@PathVariable("id")Integer id){
        iT.delete(id);
    }
    @GetMapping("/{id}")
    public TareaMiembroAreaDTO listarId(@PathVariable("id")Integer id){
        ModelMapper m=new ModelMapper();
        TareaMiembroAreaDTO dto=m.map(iT.listId(id),TareaMiembroAreaDTO.class);
        return  dto;
    }
}
