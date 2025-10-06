import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Array com os itens do menu - substitui os links estáticos
  menuItems = [
    { label: 'Início', active: true },
    { label: 'Minecraft', active: false },
    { label: 'Ranking', active: false },
    { label: 'Loja', active: false },
    { label: 'Sobre', active: false },
    { label: 'Suporte', active: false }
  ];

  // Função para ativar o item clicado
  activateItem(selectedItem: any): void {
    // Remove a classe ativa de todos os itens
    this.menuItems.forEach(item => {
      item.active = false;
    });
    
    // Ativa apenas o item clicado
    selectedItem.active = true;
  }
}
