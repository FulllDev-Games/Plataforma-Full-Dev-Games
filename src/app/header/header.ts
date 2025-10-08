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
    { label: 'Início', path: '' }, // Item inicial ativo por padrão
    { label: 'Minecraft'},
    { label: 'Ranking'},
    { label: 'Loja'},
    { label: 'Sobre'},
    { label: 'Suporte', path: 'support' }
  ];

  activateItem(selectedItem: any): void {
    // Cria um novo array para forçar a detecção de mudanças do Angular
    // Ativa apenas o item clicado, desativando todos os outros
    this.menuItems = this.menuItems.map(item => ({
      ...item,
      active: item === selectedItem
    }));
  }
}