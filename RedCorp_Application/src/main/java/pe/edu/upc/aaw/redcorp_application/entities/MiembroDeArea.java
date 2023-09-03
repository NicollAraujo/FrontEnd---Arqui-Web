package pe.edu.upc.aaw.redcorp_application.entities;

import javax.persistence.*;

@Entity
@Table(name = "MiembroDeArea")
public class MiembroDeArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int idMiembroDeArea;
    @ManyToOne
    @JoinColumn(name = "usuarioId")
    Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "areaDeTrabajoId")
    AreaDeTrabajo areaDeTrabajo;

    public MiembroDeArea() {
    }

    public MiembroDeArea(int idMiembroDeArea, Usuario usuario, AreaDeTrabajo areaDeTrabajo) {
        this.idMiembroDeArea = idMiembroDeArea;
        this.usuario = usuario;
        this.areaDeTrabajo = areaDeTrabajo;
    }

    public int getIdMiembroDeArea() {
        return idMiembroDeArea;
    }

    public void setIdMiembroDeArea(int idMiembroDeArea) {
        this.idMiembroDeArea = idMiembroDeArea;
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
}
