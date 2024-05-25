import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http:HttpClient) { }
  getSemData(sem:string){
    return this.http.get(`https://malavmori.github.io/kjpolytechnicapi/kjdb/${sem}.json`)
  }
  getEventData(){
    return this.http.get("https://malavmori.github.io/kjpolytechnicapi/kjdb/event.json")
  }
  getNoticeData(){
    return this.http.get("https://malavmori.github.io/kjpolytechnicapi/kjdb/notice.json")
  }
}
