import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes: Heroe[] = [
        {
            nombre: 'Aquaman',
            bio: 'Capacidad telepatica con los peces',
            aparecio: '1941-11-01',
            casa: 'DC',
            image: '../assets/imgs/aquaman.png'
        },
        {
            nombre: 'Daredevil',
            bio: 'Ciego que tiene un sonar',
            aparecio: '1950-11-01',
            casa: 'Marvel',
            image: '../assets/imgs/daredevil.png'
        },
        {
            nombre: 'Batman',
            bio: 'Millonario huerfano',
            aparecio: '1961-11-01',
            casa: 'DC',
            image: '../assets/imgs/batman.png'
        },
        {
            nombre: 'Hult',
            bio: 'Cientifico que muta',
            aparecio: '1990-11-01',
            casa: 'Marvel',
            image: '../assets/imgs/hulk.png'
        },
    ];

    constructor() {
        console.log('servicio heroes Listo!');
    }

     getHeroes(): Heroe[] {
        return this.heroes;
    }

}

export interface Heroe {
    nombre: string;
    bio: string;
    aparecio: string;
    casa: string;
    image: string;
}
