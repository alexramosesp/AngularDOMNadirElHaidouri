import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServeiComp1i2Service} from "../servei-comp-1i2.service";

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component implements OnInit{
  constructor(private s : ServeiComp1i2Service) {
  }
  ngOnInit() {
    let idTitol = document.getElementById('titol')!;
    idTitol.innerHTML = idTitol.innerHTML.toUpperCase();
  }
}
