package pe.edu.upc.aaw.redcorp_application.dtos;

public class ComentarioTareaDTO {

    private String cantidadComentario;
    private String nombreTarea;

    public String getCantidadComentario() {
        return cantidadComentario;
    }

    public void setCantidadComentario(String cantidadComentario) {
        this.cantidadComentario = cantidadComentario;
    }

    public String getNombreTarea() {
        return nombreTarea;
    }

    public void setNombreTarea(String nombreTarea) {
        this.nombreTarea = nombreTarea;
    }
}
