import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comunicado } from '../models/comunicado';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ComunicadoService {

  private url = `${base_url}/api/comunicados`
  private listaCambio = new Subject<Comunicado[]>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Comunicado[]>(this.url);
  }
  insert(comunicado: Comunicado){
    return this.http.post(this.url,comunicado);
  }
  setList(listaNueva:Comunicado[])
  {
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id:number)
  {
    return this.http.get<Comunicado>(`${this.url}/${id}`)
  }
  update(r:Comunicado)
  {
    return this.http.put(this.url,r);
  }
  delete(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
}
