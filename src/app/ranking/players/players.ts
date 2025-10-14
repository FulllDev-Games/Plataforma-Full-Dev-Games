import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-ranking-players',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './players.html',
    styleUrl: './players.css'
})
export class Players {
    players = [
        { position: 1, icon: 'assets/img/minecraft.png', name: 'WarOf', wins: 1123, kills: 300},
        { position: 2, icon: 'assets/img/minecraft.png', name: 'lelitzpanda', wins: 1123, kills: 300},
        { position: 3, icon: 'assets/img/minecraft.png', name: 'Links', wins: 1123, kills: 300},
        { position: 4, icon: 'assets/img/minecraft.png', name: 'RRG_', wins: 1123, kills: 300},
        { position: 5, icon: 'assets/img/minecraft.png', name: 'Jqsie', wins: 1123, kills: 300},
    ]
}
