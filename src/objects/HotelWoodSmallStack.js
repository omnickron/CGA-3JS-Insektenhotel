import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';
import HotelWoodSmall from './HotelWoodSmall.js';

export default class HotelWoodSmallStack extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const row1part1 = new HotelWoodSmall(1.3);
        row1part1.position.set(-0.5, 0, 0.1);
        this.add(row1part1);
        const row1part2 = new HotelWoodSmall(1.1);
        row1part2.position.set(2, -0.1, -0.2);
        this.add(row1part2);
        const row1part3 = new HotelWoodSmall(1);
        row1part3.position.set(3.8, -0.2, 0.1);
        this.add(row1part3);
        const row1part4 = new HotelWoodSmall(0.6);
        row1part4.position.set(5.1, -0.5, 0);
        this.add(row1part4);

        const row2part1 = new HotelWoodSmall(0.7);
        row2part1.position.set(-1.2, 1.9, -0.2);
        this.add(row2part1);
        const row2part2 = new HotelWoodSmall(1.3);
        row2part2.position.set(1.2, 2, 0.1);
        this.add(row2part2);
        const row2part3 = new HotelWoodSmall(1);
        row2part3.position.set(3.2, 1.6, 0.1);
        this.add(row2part3);
        const row2part4 = new HotelWoodSmall(1.3);
        row2part4.position.set(4.5, 3.1, 0);
        this.add(row2part4);

        const row3part1 = new HotelWoodSmall(1);
        row3part1.position.set(-0.4, 3.2, 0.1);
        this.add(row3part1);
        const row3part2 = new HotelWoodSmall(1.1);
        row3part2.position.set(1.2, 4, -0.2);
        this.add(row3part2);
        const row3part3 = new HotelWoodSmall(0.8);
        row3part3.position.set(3.1, 4, 0.1);
        this.add(row3part3);
        const row3part4 = new HotelWoodSmall(0.8);
        row3part4.position.set(5, 5.1, -0.2);
        this.add(row3part4);

        const row4part1 = new HotelWoodSmall(1.3);
        row4part1.position.set(-0.4, 5.3, 0.1);
        this.add(row4part1);
        const row4part2 = new HotelWoodSmall(1.1);
        row4part2.position.set(2, 5.6, 0);
        this.add(row4part2);
        const row4part3 = new HotelWoodSmall(1.2);
        row4part3.position.set(4, 6.7, 0.1);
        this.add(row4part3);
        const row4part4 = new HotelWoodSmall(0.7);
        row4part4.position.set(5, 8, -0.2);
        this.add(row4part4);

        const row5part1 = new HotelWoodSmall(0.7);
        row5part1.position.set(-1, 6.9, 0);
        this.add(row5part1);
        const row5part2 = new HotelWoodSmall(0.7);
        row5part2.position.set(0.9, 6.8, -0.2);
        this.add(row5part2);
        const row5part3 = new HotelWoodSmall(1);
        row5part3.position.set(2.2, 7.7, 0.1);
        this.add(row5part3);
        const row5part4 = new HotelWoodSmall(0.5);
        row5part4.position.set(3.7, 8.3, -0.2);
        this.add(row5part4);

        const row6part1 = new HotelWoodSmall(1.1);
        row6part1.position.set(-0.6, 9.2, 0);
        this.add(row6part1);
        const row6part2 = new HotelWoodSmall(0.8);
        row6part2.position.set(0.4, 7.9, 0.1);
        this.add(row6part2);
        const row6part3 = new HotelWoodSmall(1);
        row6part3.position.set(2.7, 9.1, -0.2);
        this.add(row6part3);
        const row6part4 = new HotelWoodSmall(1);
        row6part4.position.set(4.6, 9.8, 0);
        this.add(row6part4);

        const row7part1 = new HotelWoodSmall(0.7);
        row7part1.position.set(1.7, 10.4, 0.1);
        this.add(row7part1);
        const row7part2 = new HotelWoodSmall(0.8);
        row7part2.position.set(1, 9.2, -0.2);
        this.add(row7part2);
        const row7part3 = new HotelWoodSmall(0.5);
        row7part3.position.set(3.2, 10.4, 0.1);
        this.add(row7part3);
    }

    addPhysics() {
        const positions = [
            [6,-1,-7.5],     // 0
            [6,11,-7.5],    // 1
            [-2,11,-7.5],    // 2
            [-2,-1,-7.5],    // 3
            [6,-1,7.5],     // 4
            [6,11,7.5],    // 5
            [-2,11,7.5],    // 6
            [-2,-1,7.5],    // 7

        ];
        const indices = [
            [3,2,1,0],
            [4, 5, 6, 7],
            [0, 1, 4, 5],
            [3, 7, 6, 2],
            [1, 2, 5, 6],
            [4,7,0,3],

        ];
        window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
    }
}
