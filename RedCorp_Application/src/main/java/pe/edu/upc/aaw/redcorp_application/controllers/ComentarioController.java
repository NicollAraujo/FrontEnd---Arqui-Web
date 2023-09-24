package pe.edu.upc.aaw.redcorp_application.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.aaw.redcorp_application.dtos.ComentarioDTO;
import pe.edu.upc.aaw.redcorp_application.dtos.ComentarioTareaDTO;
import pe.edu.upc.aaw.redcorp_application.dtos.TareaDTO;
import pe.edu.upc.aaw.redcorp_application.dtos.TareaProyectoDTO;
import pe.edu.upc.aaw.redcorp_application.entities.Comentario;
import pe.edu.upc.aaw.redcorp_application.entities.Tarea;
import pe.edu.upc.aaw.redcorp_application.serviceinterfaces.IComentarioService;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {
    @Autowired
    private IComentarioService commentService;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('EMPLO')")
    public void registrar(@RequestBody ComentarioDTO dto){
        ModelMapper m = new ModelMapper();
        Comentario c = m.map(dto,Comentario.class);
        commentService.insert(c);

    }

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('EMPLO')")
    public List<ComentarioDTO> listar()
    {
        return commentService.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ComentarioDTO.class);
        }).collect(Collectors.toList());
    }

    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('EMPLO')")
    public void modificar(@RequestBody ComentarioDTO dto) {
        ModelMapper m = new ModelMapper();
        Comentario c = m.map(dto, Comentario.class);
        commentService.insert(c);
    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('EMPLO')")
    public void eliminar(@PathVariable("id") Integer id)
    {
        commentService.delete(id);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('EMPLO')")
    public ComentarioDTO listarId(@PathVariable("id") Integer id)
    {
        ModelMapper m = new ModelMapper();

        ComentarioDTO dto = m.map(commentService.listId(id),ComentarioDTO.class);
        return dto;
    }

    @GetMapping("/idcomentario")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('EMPLO')")
    public List<ComentarioTareaDTO> idCommentNameTask() {
        List<String[]> lista = commentService.idCommentNameTask();
        List<ComentarioTareaDTO> listaDTO = new ArrayList<>();
        for (String[] data : lista) {
            ComentarioTareaDTO dto = new ComentarioTareaDTO();
            dto.setCantidadComentario(data[0]);
            dto.setNombreTarea(data[1]);
            listaDTO.add(dto);
        }
        return listaDTO;
    }
}
