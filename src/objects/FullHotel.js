import * as THREE from 'three';

import HotelBody from "./HotelBody.js";
import HotelWoodBigStack from "./HotelWoodBigStack.js";
import HotelStrawStack from "./HotelStrawStack.js";
import HotelWoodSmallStack from "./HotelWoodSmallStack.js";
import HotelPineStack from "./HotelPineStack.js";

export default class FullHotel extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const hotelBody = new HotelBody();
        hotelBody.scale.set(0.85, 0.85, 0.85);
        hotelBody.updateMatrix();
        hotelBody.castShadow = true;
        hotelBody.receiveShadow = true;
        //hotelBody.addPhysics();

        const bigWoodStack = new HotelWoodBigStack();
        bigWoodStack.position.set(-18.6, -22, 10);
        bigWoodStack.castShadow = true;
        bigWoodStack.receiveShadow = true;

        //bigWoodStack.addPhysics();

        const strawStack = new HotelStrawStack();
        strawStack.position.set(-16, -10.5, 10);
        strawStack.castShadow = true;
        strawStack.receiveShadow = true;
        //strawStack.addPhysics();

        const smallWoodStackLeft = new HotelWoodSmallStack();
        smallWoodStackLeft.position.set(-20.3, -38.6, 10);
        smallWoodStackLeft.castShadow = true;
        smallWoodStackLeft.receiveShadow = true;
        //smallWoodStackLeft.addPhysics();

        const smallWoodStackRight = new HotelWoodSmallStack();
        smallWoodStackRight.position.set(1.1, -38.6, 10);
        smallWoodStackRight.castShadow = true;
        smallWoodStackRight.receiveShadow = true;
        //smallWoodStackRight.addPhysics();

        const pineStack = new HotelPineStack();
        pineStack.position.set(-17.6, -54.4, 12);
        pineStack.castShadow = true;
        pineStack.receiveShadow = true;
        //pineStack.addPhysics();

        this.add(hotelBody);
        this.add(bigWoodStack);
        this.add(strawStack);
        this.add(smallWoodStackLeft);
        this.add(smallWoodStackRight);
        this.add(pineStack);
    }

    addPhysics() {
        const positions = [
            [8.5, -58, -1.75],     // 0
            [8.5, -17, -1.75],    // 1
            [-7.3, 4.5, -1.75],   //
            [-24, -17, -1.75],    // 3
            [-24, -58, -1.75],    // 4
            [8.5, -58, 17.5],     // 5
            [8.5, -17, 17.5],    // 6
            [-7.3, 4.5, 17.5],   // 7
            [-24, -17, 17.5],    // 8
            [-24, -58, 17.5],    // 9

        ];
        const indices = [
            [4, 3, 2, 1],
            [5, 6, 8, 9],
            [0, 1, 6, 5],
            [9, 8, 3, 4],
            [0, 5, 4, 9],
            [6, 7, 1, 2],
            [7, 2, 3, 8],
            [7, 8, 6],
            [3, 2, 1]
        ];
        window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
    }
}