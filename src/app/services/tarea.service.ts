import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private url = `${base_url}/api/tareas`
  private listaCambio = new Subject<Tarea[]>();
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Tarea[]>(this.url);
  }
  insert(Tarea: Tarea){
    return this.http.post(this.url,Tarea);
  }
  setList(listaNueva:Tarea[])
  {
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id:number)
  {
    return this.http.get<Tarea>(`${this.url}/${id}`)
  }
  update(t:Tarea)
  {
    return this.http.put(this.url,t);
  }
  delete(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
}
