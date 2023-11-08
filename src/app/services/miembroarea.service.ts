import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MiembroDeArea } from '../models/miembroarea';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MiembroareaService {
  private url = `${base_url}/api/miembrosdearea`
  private listaCambio = new Subject<MiembroDeArea[]>();
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<MiembroDeArea[]>(this.url);
  }
  insert(mA: MiembroDeArea){
    return this.http .post(this.url,mA);
  }
  setList(listaNueva:MiembroDeArea[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<MiembroDeArea>(`${this.url}/${id}`)
  }
  update(mA:MiembroDeArea)
  {
    return this.http.put(this.url,mA)
  }
  delete(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
}
