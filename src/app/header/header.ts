import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Array com os itens do menu de navegação
  menuItems = [
    { label: 'Início', path: '/' }, 
    { label: 'Minecraft', path: '/minecraft' },
    { label: 'Ranking', path: '/ranking' },
    { label: 'Loja', path: '/loja' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Suporte', path: '/suporte' }
  ];
}
