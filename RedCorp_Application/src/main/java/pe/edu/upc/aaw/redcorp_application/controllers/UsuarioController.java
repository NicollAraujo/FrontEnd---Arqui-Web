package pe.edu.upc.aaw.redcorp_application.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.RolDTO;
import pe.edu.upc.aaw.redcorp_application.dtos.UsuarioDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Rol;
import pe.edu.upc.aaw.redcorp_application.entities.Usuario;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IRolService;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IUsuarioService;

import java.util.List;
import java.util.stream.Collectors;

@RestController()
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private IUsuarioService iU;
    @PostMapping
    private void registrar(@RequestBody UsuarioDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Usuario r = m.map(dto,Usuario.class);
        iU.insert(r);
    }
    @GetMapping
    public List<UsuarioDTO> listar()
    {
        return iU.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,UsuarioDTO.class);
        }).collect(Collectors.toList());
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id)
    {
        iU.delete(id);
    }

    @GetMapping("/{id}")
    public UsuarioDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        UsuarioDTO dto = m.map(iU.listId(id),UsuarioDTO.class);
        return dto;
    }
}
