import * as THREE from 'three';

import HotelBodyFromFile from "./HotelBodyFromFile.js";
import SmallWoodLeftFromFile from "./SmallWoodLeftFromFile.js";
import SmallWoodRightFromFile from "./SmallWoodRightFromFile.js";
import GridBottomFromFile from "./GridBottomFromFile.js";
import GridTopFromFile from "./GridTopFromFile.js";
import StrawFromFile from "./StrawFromFile.js";
import PinesFromFile from "./PinesFromFile.js";
import BigWoodFromFile from "./BigWoodFromFile.js";
import {Animation, AnimationAxis, AnimationType} from "../animation/Animation.js";

export default class FullHotelFromFile extends THREE.Group {

  constructor() {
    super();
    this.animations = [];
    this.addParts();
  }

  addParts() {
      const hotelBodyFromFile = new HotelBodyFromFile();
      hotelBodyFromFile.updateMatrix();
      //hotelBodyFromFile.addPhysics();
      const smallWoodLeftFromFile = new SmallWoodLeftFromFile();
      smallWoodLeftFromFile.name="smallWoodLeftFromFile";
      //smallWoodLeftFromFile.addPhysics();
      const smallWoodRightFromFile = new SmallWoodRightFromFile();
      smallWoodRightFromFile.name = "smallWoodRightFromFile";
      //smallWoodRightFromFile.addPhysics();
      const gridBottomFromFile = new GridBottomFromFile();
      const gridTopFromFile = new GridTopFromFile();
      const strawFromFile = new StrawFromFile();
      //strawFromFile.addPhysics();
      const pinesFromFile = new PinesFromFile();
     // pinesFromFile.addPhysics();
      const bigWoodFromFile = new BigWoodFromFile();
      //bigWoodFromFile.addPhysics();


      // ANOMATIONS
      const bigWoodStackAnimation = new Animation(bigWoodFromFile, AnimationType.TRANSLATION, AnimationAxis.Z);
      bigWoodStackAnimation.setAmount(20);
      bigWoodStackAnimation.setSpeed(30);
      bigWoodFromFile.linearAnimation = bigWoodStackAnimation;
      this.animations.push(bigWoodStackAnimation);

      const smallWoodStackLeftAnimation = new Animation(smallWoodLeftFromFile, AnimationType.TRANSLATION, AnimationAxis.Z);
      smallWoodStackLeftAnimation.setAmount(7);
      smallWoodStackLeftAnimation.setSpeed(30);
      smallWoodLeftFromFile.linearAnimation = smallWoodStackLeftAnimation;
      this.animations.push(smallWoodStackLeftAnimation);

      const smallWoodStackRightAnimation = new Animation(smallWoodRightFromFile, AnimationType.TRANSLATION, AnimationAxis.Z);
      smallWoodStackRightAnimation.setAmount(15);
      smallWoodStackRightAnimation.setSpeed(30);
      smallWoodRightFromFile.linearAnimation = smallWoodStackRightAnimation;
      this.animations.push(smallWoodStackRightAnimation);

      this.add(bigWoodFromFile);
      this.add(gridTopFromFile);
      this.add(gridBottomFromFile);
      this.add(pinesFromFile);
      this.add(strawFromFile);
      this.add(smallWoodRightFromFile);
      this.add(smallWoodLeftFromFile);
      this.add(hotelBodyFromFile);
}

    addPhysics() {
        const positions = [
            [8.5,-58,-14],     // 0
            [8.5,-17.3,-14],    // 1
            [-8 ,4.5,-14],   //
            [-24,-17.3,-14],    // 3
            [-24,-58,-14],    // 4
            [8.5,-58,4],     // 5
            [8.5,-17.3,4],    // 6
            [-8 ,4.5,4],   // 7
            [-24,-17.3,4],    // 8
            [-24,-58,4],    // 9

        ];
        const indices = [
            [3,2,1,0],
            [5, 6, 8, 9],
            [0, 1, 6, 5],
            [9, 8, 3, 4],
            [0, 5, 4, 9],
            [6,7,1,2],
            [7, 2, 3, 8],
            [7,8,6],
            [3,2,1]
        ];
        window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
    }
}