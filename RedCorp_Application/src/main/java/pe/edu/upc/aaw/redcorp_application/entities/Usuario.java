package pe.edu.upc.aaw.redcorp_application.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long idUsuario;
    @Column(name = "nombre",length = 50,nullable = false)
    private  String nombre;
    @Column(name = "correo",length = 100,nullable = false)
    private String correo;
    @Column(name = "fechaNacimiento",nullable = false)
    private LocalDate fechaNacimiento;
    @Column(name = "userName",unique = true,length = 50)
    private  String userName;
    @Column(name = "contrasena",length = 200)
    private String contrasena;
    private Boolean enabled;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "rolId" )
    private Rol rol;

    public Usuario() {
    }

    public Usuario(Long idUsuario, String nombre, String correo, LocalDate fechaNacimiento, String userName, String contrasena, Boolean enabled, Rol rol) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
        this.userName = userName;
        this.contrasena = contrasena;
        this.enabled = enabled;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
}
