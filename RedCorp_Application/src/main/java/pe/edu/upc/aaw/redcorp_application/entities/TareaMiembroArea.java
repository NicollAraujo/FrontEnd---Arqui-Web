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
    TareaMiembroArea tareaMiembroArea;

    public TareaMiembroArea() {
    }

    public TareaMiembroArea(int idTareaMiembroArea, MiembroDeArea miembroDeArea, TareaMiembroArea tareaMiembroArea) {
        this.idTareaMiembroArea = idTareaMiembroArea;
        this.miembroDeArea = miembroDeArea;
        this.tareaMiembroArea = tareaMiembroArea;
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

    public TareaMiembroArea getTareaMiembroArea() {
        return tareaMiembroArea;
    }

    public void setTareaMiembroArea(TareaMiembroArea tareaMiembroArea) {
        this.tareaMiembroArea = tareaMiembroArea;
    }
}
