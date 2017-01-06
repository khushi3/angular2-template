import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class Encompass_360 {
	constructor (private http: Http) {}

	/*get() {
    return this.http.get('http://localhost:9200/logstash-2016.12.05/Sample/AVjPM92GDnQIJ8n77y2G')
    		.map(res => {return res.json()});
  }*/

  checkCredentials() {
   return this.http.get('http://localhost:9200/logstash-2016.12.06/Sample/AVjUM_OjlpC8g1-5waXJ')
                    .map(response => response.json());
                
 }
}