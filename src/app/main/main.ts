import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  modos = [
    { title: 'Arcade', image: '../../assets/img/modos-de-jogo/arcade.png' },
    { title: 'CakeCraft', image: '../../assets/img/modos-de-jogo/cakecraft.png' },
    { title: 'Duelos', image: '../../assets/img/modos-de-jogo/duelos.png' },
    { title: 'SkyBlox', image: '../../assets/img/modos-de-jogo/slybox.png' },
    { title: 'Mistérios', image: '../../assets/img/modos-de-jogo/misterios.png' },
    { title: 'Guerra de Clans', image: '../../assets/img/modos-de-jogo/clans.png' }
  ];

  atualizacoes = [
    { title: 'Atualização de Habitação', date: '19/07/25', image: '../../assets/img/atualizacoes/housing.png' },
    { title: 'Atualização Disasters', date: '15/07/25', image: '../../assets/img/atualizacoes/disasters.png' },
    { title: 'Emblemas antigos', date: '10/07/2025', image: '../../assets/img/atualizacoes/sw.png' },
    { title: 'Mudanças importantes e correções de bugs', date: '10/07/2025', image: '../../assets/img/atualizacoes/duels.png' }
  ]
}
