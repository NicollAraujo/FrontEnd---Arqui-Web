package pe.edu.upc.aaw.redcorp_application.entities;

import javax.persistence.*;

@Entity
@Table(name = "TareaMiembroArea")
public class TareaMiembroArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int idTareaMiembroArea;
    @ManyToOne
    @JoinColumn(name = "miembroDeAreaId")
    MiembroDeArea miembroDeArea;
    @ManyToOne
    @JoinColumn(name = "tareaId")
    Tarea tarea;

    public TareaMiembroArea() {
    }

    public TareaMiembroArea(int idTareaMiembroArea, MiembroDeArea miembroDeArea, Tarea tarea) {
        this.idTareaMiembroArea = idTareaMiembroArea;
        this.miembroDeArea = miembroDeArea;
        this.tarea = tarea;
    }

    public int getIdTareaMiembroArea() {
        return idTareaMiembroArea;
    }

    public void setIdTareaMiembroArea(int idTareaMiembroArea) {
        this.idTareaMiembroArea = idTareaMiembroArea;
    }

    public MiembroDeArea getMiembroDeArea() {
        return miembroDeArea;
    }

    public void setMiembroDeArea(MiembroDeArea miembroDeArea) {
        this.miembroDeArea = miembroDeArea;
    }

    public Tarea getTarea() {
        return tarea;
    }

    public void setTarea(Tarea tarea) {
        this.tarea = tarea;
    }
}
