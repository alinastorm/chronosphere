import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface HttpResponseModels {
  data: [{
    'ID': number,
    'ReturnName': string,
    'Description': string,
    'ObjectName': string,
    'FileVer': number,
    'MiniFileVer': number,
    'IcoVer': number,
    'FileID': number,
    'locX': number,
    'locY': number,
    'locZ': number,
    'offsetZ': number,
    'angle': number,
    'c_locX': number,
    'c_locY': number,
    'sizeX': number,
    'sizeY': number,
    'sizeZ': number,
    'radius': number,
    'FileSize': number,
    'MiniSize': number,
    'IcoSize': number,
    'Active': number,
    'os': number
  }];
  config: {
    'admin': number,
    'user': number,
    'iosV': string,
    'iosURL': string,
    'androidV': number,
    'androidURL': string
  };
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ModelsService {

  private _url = `http://ubt.by:8002/api/index.php`;

  constructor(public _http: HttpClient) { }

  public getModels(): Observable<HttpResponseModels> {

    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const body = {
      action: 'get_data'
    };
    return this._http.post<HttpResponseModels>(this._url, JSON.stringify(body), { headers });
  }
}
