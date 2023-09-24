package pe.edu.upc.aaw.redcorp_application.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Proyecto")
public class Proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProyecto;
    @Column(name = "nombre",length = 50,nullable = false)
    private String nombre;
    @Column(name = "descripcion",length = 100,nullable = false)
    private String descripcion;
    @ManyToOne
    @JoinColumn(name = "usuarioId")
    private Usuario usuario;
    @Column (name = "fechaCreacion",nullable = false)
    private LocalDate fechaCreacion;

    public Proyecto() {
    }

    public Proyecto(int idProyecto, String nombre, String descripcion, Usuario usuario, LocalDate fechaCreacion) {
        this.idProyecto = idProyecto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.usuario = usuario;
        this.fechaCreacion = fechaCreacion;
    }

    public int getIdProyecto() {
        return idProyecto;
    }

    public void setIdProyecto(int idProyecto) {
        this.idProyecto = idProyecto;
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

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDate fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
}
