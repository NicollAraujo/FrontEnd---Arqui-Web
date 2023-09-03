package pe.edu.upc.aaw.redcorp_application.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Tarea")
public class Tarea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int idTarea;
    @Column(name = "nombre",length = 50,nullable = false)
    private String nombre;
    @Column(name = "descripcion",length = 100,nullable = false)
    private String descripcion;
    @Column(name = "fechaLimite",nullable = false)
    private LocalDate fechaLimite;
    @ManyToOne
    @JoinColumn(name = "grupoDeProyectoId")
    GrupoDeProyecto grupoDeProyecto;
    @ManyToOne
    @JoinColumn(name = "proyectoId")
    Proyecto proyecto;
    @Column(name = "fechaCracion",nullable = false)
    private LocalDate fechaCreacion;

    public Tarea() {
    }

    public Tarea(int idTarea, String nombre, String descripcion, LocalDate fechaLimite, GrupoDeProyecto grupoDeProyecto, Proyecto proyecto, LocalDate fechaCreacion) {
        this.idTarea = idTarea;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaLimite = fechaLimite;
        this.grupoDeProyecto = grupoDeProyecto;
        this.proyecto = proyecto;
        this.fechaCreacion = fechaCreacion;
    }

    public int getIdTarea() {
        return idTarea;
    }

    public void setIdTarea(int idTarea) {
        this.idTarea = idTarea;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public LocalDate getFechaLimite() {
        return fechaLimite;
    }

    public void setFechaLimite(LocalDate fechaLimite) {
        this.fechaLimite = fechaLimite;
    }

    public GrupoDeProyecto getGrupoDeProyecto() {
        return grupoDeProyecto;
    }

    public void setGrupoDeProyecto(GrupoDeProyecto grupoDeProyecto) {
        this.grupoDeProyecto = grupoDeProyecto;
    }

    public Proyecto getProyecto() {
        return proyecto;
    }

    public void setProyecto(Proyecto proyecto) {
        this.proyecto = proyecto;
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDate fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
}
