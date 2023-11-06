import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { GP } from '../models/gp';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})

export class GpService {
  private url = `${base_url}/grupo-de-proyectos`;
  private listaCambio = new Subject<GP[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<GP[]>(this.url);
  }

  insert(uni: GP) {
    return this.http.post(this.url, uni);
  }

  setList(listaNueva: GP[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<GP>(`${this.url}/${id}`);
  }
  update(u: GP) {
    return this.http.put(this.url, u);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
