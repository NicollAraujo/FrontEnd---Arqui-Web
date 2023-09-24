package pe.edu.upc.aaw.redcorp_application.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Rol")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int idRol;
    @Column(name = "descripcion",length = 50,nullable = false)
    private String descripcion;



    public Rol() {
    }

    public Rol(int idRol, String descripcion) {
        this.idRol = idRol;
        this.descripcion = descripcion;
    }

    public int getIdRol() {
        return idRol;
    }

    public void setIdRol(int idRol) {
        this.idRol = idRol;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


}
