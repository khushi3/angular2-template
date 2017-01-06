import {Component, OnInit} from '@angular/core';
import { Encompass_360 } from './360_en.service';
import { Http, Response } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'blank-page',
	//templateUrl: './blank-page.component.html'
	template: `<div class="container">
		<select (change)="onChange($event.target.value)">
    <option *ngFor="let i of devices">{{i.name}}</option>
</select>



		<h2>Services List</h2>
		<div class="card-block">
			<table class="table">
		<thead>
			<tr>
				<th>Client</th>
				<th>Method</th>
				<th>Request</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{{items.client}}</td>
				<td>{{items.method}}</td>
				<td>{{items.request}}</td>

			</tr>

			</tbody>
		</table>


		</div>

	</div>`
})

export class BlankPageComponent {
	
 	//public items = [];
 	devices = [{name: 1}, {name: 2}, {name: 3}];
	
	getData: any;
	s1: any;
	s2: any;
	s3: any;
	//hero: any[];

	constructor(private encompass: Encompass_360) {
		this.encompass.checkCredentials().subscribe(data => {
			//this.items = data._source;
			console.log(data)
			console.log(data._source.client);
		}, error => console.log('Could not load List of Service'));
	} 
	
	onChangeObj(event) {
    console.log(event);
    //this.selectedDeviceObj = newObj;
    // ... do other stuff here ...
  }
	/*ngOnInit() {
	
    console.log('angular version');
  

		this.encompass.get()
		.subscribe(
			//data=> {this.s1 = data.s1, this.s2 = data.s2, this.s3 = data.s3},
			data=> this.getData = JSON.stringify(data),
			error=> alert(error),
			()=> console.log("Finished")
			);*/
        /*this.http.get('/assets/360_service.json')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
	<li>{{ s2 }}></li><div class="card-block">
	<ul>li>{{ getData }}</li>
	<li>{{ s1 }}</li>
	<li>{{ s2 }}</li>
	<li>{{ s3 }}</li>
	</ul>
	</div>
	<li>{{ s3 }}></li>*/
                }
            
