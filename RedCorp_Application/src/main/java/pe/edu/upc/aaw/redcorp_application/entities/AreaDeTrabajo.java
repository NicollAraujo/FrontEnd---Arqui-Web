package pe.edu.upc.aaw.redcorp_application.entities;

import javax.persistence.*;

@Entity
@Table(name = "AreaDeTrabajo")

public class AreaDeTrabajo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAreaDeTrabajo;
    @Column(name = "nombre",length = 50,nullable = false )
    private String nombre;
    @Column(name = "descripcion",length = 50,nullable = false)
    private String descripcion;

    public AreaDeTrabajo() {
    }

    public AreaDeTrabajo(int idAreaDeTrabajo, String nombre, String descripcion) {
        this.idAreaDeTrabajo = idAreaDeTrabajo;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public int getIdAreaDeTrabajo() {
        return idAreaDeTrabajo;
    }

    public void setIdAreaDeTrabajo(int idAreaDeTrabajo) {
        this.idAreaDeTrabajo = idAreaDeTrabajo;
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
}
