import { PoemaService } from './../../service/poema.service';
import { Poema } from './../../modelo/poema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  p: Poema=new Poema();

  po: any;

  constructor(private sp: PoemaService) { }

  ngOnInit() {
    this.po = this.sp.getPoema();
  }

}
