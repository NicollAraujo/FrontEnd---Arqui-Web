package pe.edu.upc.aaw.redcorp_application.dtos;

import pe.edu.upc.aaw.redcorp_application.entities.GrupoDeProyecto;
import pe.edu.upc.aaw.redcorp_application.entities.MiembroDeArea;

public class MiembroEnGrupoDTO {
        private  int idMiembroEnGrupo;
        private MiembroDeArea miembroDeArea;
        private GrupoDeProyecto grupoDeProyecto;

        public MiembroEnGrupoDTO() {
        }

        public MiembroEnGrupoDTO(int idMiembroEnGrupo, MiembroDeArea miembroDeArea, GrupoDeProyecto grupoDeProyecto) {
            this.idMiembroEnGrupo = idMiembroEnGrupo;
            this.miembroDeArea = miembroDeArea;
            this.grupoDeProyecto = grupoDeProyecto;
        }

    public int getIdMiembroEnGrupo() {
        return idMiembroEnGrupo;
    }

    public void setIdMiembroEnGrupo(int idMiembroEnGrupo) {
        this.idMiembroEnGrupo = idMiembroEnGrupo;
    }

    public MiembroDeArea getMiembroDeArea() {
        return miembroDeArea;
    }

    public void setMiembroDeArea(MiembroDeArea miembroDeArea) {
        this.miembroDeArea = miembroDeArea;
    }

    public GrupoDeProyecto getGrupoDeProyecto() {
        return grupoDeProyecto;
    }

    public void setGrupoDeProyecto(GrupoDeProyecto grupoDeProyecto) {
        this.grupoDeProyecto = grupoDeProyecto;
    }
}
