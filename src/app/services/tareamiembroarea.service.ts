import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TareaMiembroArea } from '../models/tareamiembroarea';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class TareamiembroareaService {
  private url = `${base_url}/api/tareamiembroarea`
  private listaCambio = new Subject<TareaMiembroArea[]>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<TareaMiembroArea[]>(this.url);
  }
  insert(tareamiembro: TareaMiembroArea){
    return this.http.post(this.url,tareamiembro);
  }
  setList(listaNueva:TareaMiembroArea[])
  {
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id:number)
  {
    return this.http.get<TareaMiembroArea>(`${this.url}/${id}`)
  }
  update(r:TareaMiembroArea)
  {
    return this.http.put(this.url,r);
  }
  delete(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
}
