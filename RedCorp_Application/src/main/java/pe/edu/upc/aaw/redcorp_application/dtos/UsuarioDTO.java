package pe.edu.upc.aaw.redcorp_application.dtos;

import pe.edu.upc.aaw.redcorp_application.entities.Rol;

import javax.persistence.*;
import java.time.LocalDate;

public class UsuarioDTO {
    private  Long idUsuario;
    private  String nombre;
    private String correo;
    private LocalDate fechaNacimiento;
    private Rol rol;

    public UsuarioDTO() {
    }

    public UsuarioDTO(Long idUsuario, String nombre, String correo, LocalDate fechaNacimiento, Rol rol) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
        this.rol = rol;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
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
