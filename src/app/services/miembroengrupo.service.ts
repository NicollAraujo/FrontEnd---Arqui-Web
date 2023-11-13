import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MiembroEnGrupo } from '../models/miembroengrupo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MiembroengrupoService {
  private url = `${base_url}/api/miembroengrupo`
  private listaCambio = new Subject<MiembroEnGrupo[]>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<MiembroEnGrupo[]>(this.url);
  }
  insert(miembro: MiembroEnGrupo){
    return this.http.post(this.url,miembro);
  }
  setList(listaNueva:MiembroEnGrupo[])
  {
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id:number)
  {
    return this.http.get<MiembroEnGrupo>(`${this.url}/${id}`)
  }
  update(r:MiembroEnGrupo)
  {
    return this.http.put(this.url,r);
  }
  delete(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
}
