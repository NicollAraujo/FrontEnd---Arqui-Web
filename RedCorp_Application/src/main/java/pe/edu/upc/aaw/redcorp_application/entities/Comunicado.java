package pe.edu.upc.aaw.redcorp_application.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Comunicado")
public class Comunicado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int idComunicado;
    @Column(name = "titulo",length = 50,nullable = false)
    private String titulo;
    @Column(name = "descripcion",length = 100,nullable = false)
    private String descripcion;
    @Column(name = "fechaCreacion", nullable = false)
    private LocalDate fechaCreacion;
    @ManyToOne
    @JoinColumn(name = "usuarioId")
    Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "areaDeTrabajoId")
    AreaDeTrabajo areaDeTrabajo;
    @ManyToOne
    @JoinColumn(name = "grupoDeProyectoId")
    GrupoDeProyecto grupoDeProyecto;

    public Comunicado() {
    }

    public Comunicado(int idComunicado, String titulo, String descripcion, LocalDate fechaCreacion, Usuario usuario, AreaDeTrabajo areaDeTrabajo, GrupoDeProyecto grupoDeProyecto) {
        this.idComunicado = idComunicado;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.usuario = usuario;
        this.areaDeTrabajo = areaDeTrabajo;
        this.grupoDeProyecto = grupoDeProyecto;
    }

    public int getIdComunicado() {
        return idComunicado;
    }

    public void setIdComunicado(int idComunicado) {
        this.idComunicado = idComunicado;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDate fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public AreaDeTrabajo getAreaDeTrabajo() {
        return areaDeTrabajo;
    }

    public void setAreaDeTrabajo(AreaDeTrabajo areaDeTrabajo) {
        this.areaDeTrabajo = areaDeTrabajo;
    }

    public GrupoDeProyecto getGrupoDeProyecto() {
        return grupoDeProyecto;
    }

    public void setGrupoDeProyecto(GrupoDeProyecto grupoDeProyecto) {
        this.grupoDeProyecto = grupoDeProyecto;
    }
}
