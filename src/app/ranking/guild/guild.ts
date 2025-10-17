import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-ranking-guild',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './guild.html',
    styleUrl: './guild.css'
})
export class Guild {
    guilds = [
        { position: 1, name: 'WarOf', members: 1123},
        { position: 2, name: 'lelitzpanda', members: 1123},
        { position: 3, name: 'Links', members: 1123},
        { position: 4, name: 'RRG_', members: 1123},
        { position: 5, name: 'Jqsie', members: 1123},
    ]
}
