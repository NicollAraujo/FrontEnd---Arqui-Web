package pe.edu.upc.aaw.redcorp_application.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.ComentarioDTO;
import pe.edu.upc.aaw.redcorp_application.dtos.TareaDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Comentario;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IComentarioService;


import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {
    @Autowired
    private IComentarioService commentService;

    @PostMapping
    public void registrar(@RequestBody TareaDTO dto){
        ModelMapper m = new ModelMapper();
        Comentario c = m.map(dto,Comentario.class);
        commentService.insert(c);

    }

    @GetMapping
    public List<ComentarioDTO> listar()
    {
        return commentService.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ComentarioDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id)
    {
        commentService.delete(id);
    }

    @GetMapping("/{id}")
    public ComentarioDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        ComentarioDTO dto = m.map(commentService.listId(id),ComentarioDTO.class);
        return dto;
    }
}
