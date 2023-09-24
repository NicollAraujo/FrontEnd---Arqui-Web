package pe.edu.upc.aaw.redcorp_application.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.RolDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Rol;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IRolService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/roles")
public class RolController {
    @Autowired
    private IRolService iR;
    @PostMapping
    private void registrar(@RequestBody RolDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Rol r = m.map(dto,Rol.class);
        iR.insert(r);
    }
    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<RolDTO> listar()
    {
        return iR.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,RolDTO.class);
        }).collect(Collectors.toList());
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id)
    {
        iR.delete(id);
    }

    @GetMapping("/{id}")
    public RolDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        RolDTO dto = m.map(iR.listId(id),RolDTO.class);
        return dto;
    }
}
