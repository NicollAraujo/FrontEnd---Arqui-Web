package pe.edu.upc.aaw.redcorp_application.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int idUsuario;
    @Column(name = "nombre",length = 50,nullable = false)
    private  String nombre;
    @Column(name = "correo",length = 100,nullable = false)
    private String correo;
    @Column(name = "fechaNacimiento",nullable = false)
    private LocalDate fechaNacimiento;
    @ManyToOne
    @JoinColumn(name = "rolId" )
    Rol rol;

    public Usuario() {
    }

    public Usuario(int idUsuario, String nombre, String correo, LocalDate fechaNacimiento, Rol rol) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
        this.rol = rol;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
}
