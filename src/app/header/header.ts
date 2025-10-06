import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Array com os itens do menu de navegação
  menuItems = [
    { label: 'Início', active: true }, // Item inicial ativo por padrão
    { label: 'Minecraft', active: false },
    { label: 'Ranking', active: false },
    { label: 'Loja', active: false },
    { label: 'Sobre', active: false },
    { label: 'Suporte', active: false }
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