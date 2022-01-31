/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
import { Component, OnInit } from '@angular/core';
import { Poema } from 'src/app/modelo/poema';
import { PoemaService } from 'src/app/service/poema.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  buscarUser: any;
  po: any;
  user: Poema=new Poema();

  constructor(private sp: PoemaService) { }

  ngOnInit() {
    this.po = this.sp.getPoema();
    this.buscarUser = this.po;
  }

  buscar(event){
    const text = event.target.value;
    this.buscarUser = this.po;
    if (text && text.trim() !== '') {
      this.buscarUser= this.buscarUser.filter((poema: any)=>{
        return (poema.autor.toLowerCase().indexOf(text.toLowerCase()) > -1);
      });
    }
  }
}
