import { Component, OnInit } from '@angular/core';
import {JsonApiService} from "@app/core/services";

@Component({
  selector: 'sa-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
    public morrisDemoData: any;
    constructor(private jsonApiService: JsonApiService) { }
    ngOnInit() {
        this.jsonApiService.fetch( '/graphs/morris.json').subscribe(data => {
            this.morrisDemoData = data['bar-demo'];
            console.log(this.morrisDemoData);
        });
    }
    barColorsDemo(row, series, type) {
        if (type === 'bar') {
            var red = Math.ceil(150 * row.y / 8);
            return 'rgb(' + red + ',0,0)';
        } else {
            return '#000';
        }
    }

    percentageFormat(x) {
        return x + "%"
    }

    dateFormat(d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    }
}
