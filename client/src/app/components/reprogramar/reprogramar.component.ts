import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/Evento';
import { ActivatedRoute, Router} from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reprogramar',
  templateUrl: './reprogramar.component.html',
  styleUrls: ['./reprogramar.component.css']
})
export class ReprogramarComponent implements OnInit {

  evento: Evento = {
    id_evento: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    id_aula: 0,
    id_conferencia: 0,
    id_solicitud: 0,
    create_at: new Date()
  };

  eventoForm = this.formBuilder.group({
    id_evento: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    id_aula: 0,
    id_conferencia: 0,
    id_solicitud: 0,
    create_at: new Date()
  });

  submitted = false;


  constructor(private eventosService: EventosService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.eventosService.getEvento(params.id).subscribe(
        res => {
          console.log("imprime eventos");
          console.log(res);
          this.evento = res;
        },
        err => console.log(err)
      );
    }
  }

  
  get f() { return this.eventoForm.controls; }

  editarEvento() {
    this.submitted = true;
    this.eventosService.updateEventos(this.evento.id_evento+'', this.evento).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/eventos']);
      },
      err => console.error(err)
    );
  }

}
