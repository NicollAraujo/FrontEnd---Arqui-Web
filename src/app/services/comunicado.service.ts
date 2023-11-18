import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comunicado } from '../models/comunicado'
import {  Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ComunicadoService {
  private url = `${base_url}/comunicados`;
  private listaCambio = new Subject<Comunicado[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Comunicado[]>(this.url);
  }

  insert(uni: Comunicado) {
    return this.http.post(this.url, uni);
  }

  setList(listaNueva: Comunicado[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Comunicado>(`${this.url}/${id}`);
  }
  update(u: Comunicado) {
    return this.http.put(this.url, u);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(fecha: string): Observable<Comunicado[]> {
    return this.http.post<Comunicado[]>(`${this.url}/buscar`, { fecha: fecha });
  }
}
