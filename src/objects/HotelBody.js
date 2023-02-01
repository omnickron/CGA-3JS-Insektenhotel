import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';
import {TextureLoader} from "three";

export default class HotelBody extends THREE.Group {

  constructor() {
    super();
    this.movieTexture = null;
    this.addParts();
    this.children.castShadow = true;
    this.children.receiveShadow = true;
  }

  addParts() {


    let leftWallMap = new TextureLoader().load('src/maps/RawWood.png');
    let leftWallMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: leftWallMap
    });

    let rightWallMap = new TextureLoader().load('src/maps/RawWood.png');
    let rightWallMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: rightWallMap
    });

    let floorMap = new TextureLoader().load('src/maps/RawWood.png');
    let floorMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: floorMap
    });

    let lowerBoardMap = new TextureLoader().load('src/maps/RawWood.png');
    let lowerBoardMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: lowerBoardMap
    });

    let centerBoardMap = new TextureLoader().load('src/maps/RawWood.png');
    let centerBoardMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: centerBoardMap
    });

    let upperBoardMap = new TextureLoader().load('src/maps/RawWood.png');
    let upperBoardMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: upperBoardMap
    });

    let leftInsideWallMap = new TextureLoader().load('src/maps/RawWood.png');
    let leftInsideWallMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: leftInsideWallMap
    });

    let rightInsideWallMap = new TextureLoader().load('src/maps/RawWood.png');
    let rightInsideWallMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: rightInsideWallMap
    });

    //----------metal-------------
    const path = "../../lib/three.js-r145/examples/textures/cube/Bridge2/";
    const images = [
      path + "posx.jpg", path + "negx.jpg",
      path + "posy.jpg", path + "negy.jpg",
      path + "posz.jpg", path + "negz.jpg"];
    const envMap = new THREE.CubeTextureLoader().load(images);
    envMap.mapping = THREE.CubeReflectionMapping;
    envMap.encoding = THREE.LinearEncoding;
    const metalMaterial = new THREE.MeshStandardMaterial({color: 0xe7e7e7, flatShading: false, });
    metalMaterial.roughness = 0.1;
    metalMaterial.metalness = 0.8;
    metalMaterial.envMap = envMap;
    metalMaterial.envMapIntensity = 1;

    let frontBoolMap = new TextureLoader().load('src/maps/RawWood.png');
    let frontBoolMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: frontBoolMap
    });

    let backWallMap = new TextureLoader().load('src/maps/RawWood.png');
    let backWallMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: backWallMap
    });

    let customRoofGeometryRightMap = new TextureLoader().load('src/maps/RawWood.png');
    let customRoofGeometryRightMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: customRoofGeometryRightMap
    });

    let customRoofGeometryLeftMap = new TextureLoader().load('src/maps/RawWood.png');
    let customRoofGeometryLeftMaterial = new THREE.MeshPhongMaterial({
      color: 0x78442f,
      map: customRoofGeometryLeftMap
    });

    //let woodMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, wireframe: false});

    let wallGeometry = new THREE.BoxGeometry(1.8, 47.5, 20.5);
    let frontGeometry = new THREE.BoxGeometry(1.2, 17.9, 16);
    let frontBoolGeometry = new THREE.BoxGeometry(2, 8, 1);
    let smallWallGeometry = new THREE.BoxGeometry(1.2, 15.8, 20.5);
    let floorGeometry = new THREE.BoxGeometry(35, 1.8, 20.5);
    let boardGeometry = new THREE.BoxGeometry(35, 1.2, 20.5);
    let smallBoardGeometry = new THREE.BoxGeometry(23.5, 1.2, 20.5);

    let leftWall = new THREE.Mesh(wallGeometry, leftWallMaterial);
    leftWall.position.set(-27, -44.5,10);
    leftWall.castShadow = true;
    this.add(leftWall);

    let rightWall = new THREE.Mesh(wallGeometry, rightWallMaterial);
    rightWall.position.set(9, -44.5,10);
    rightWall.castShadow = true;
    this.add(rightWall);

    let floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(-8.8, -67.35,10);
    floor.castShadow = true;
    this.add(floor);

    let lowerBoard = new THREE.Mesh(boardGeometry, lowerBoardMaterial);
    lowerBoard.position.set(-8.8, -47.5,10);
    lowerBoard.castShadow = true;
    this.add(lowerBoard);

    let centerBoard = new THREE.Mesh(boardGeometry, centerBoardMaterial);
    centerBoard.position.set(-8.8, -31, 10);
    centerBoard.castShadow = true;
    this.add(centerBoard);

    let upperBoard = new THREE.Mesh(smallBoardGeometry, upperBoardMaterial);
    upperBoard.position.set(-9.1, -13.5, 10);
    upperBoard.castShadow = true;
    this.add(upperBoard);

    let leftInsideWall = new THREE.Mesh(smallWallGeometry, leftInsideWallMaterial);
    leftInsideWall.position.set(-16.5, -39.3, 10);
    leftInsideWall.castShadow = true;
    this.add(leftInsideWall);

    let rightInsideWall = new THREE.Mesh(smallWallGeometry, rightInsideWallMaterial);
    rightInsideWall.position.set(-2, -39.3, 10);
    rightInsideWall.castShadow = true;
    this.add(rightInsideWall);

    let metalGeometry = new THREE.BoxGeometry(4.5, 8, 0.6);
    let metal = new THREE.Mesh(metalGeometry, metalMaterial);
    metal.position.set(-7.5, 1, -2.3);
    metal.rotation.set(0,0, THREE.MathUtils.degToRad(-40));
    this.add(metal);


    let front = new THREE.Mesh(frontGeometry, frontBoolMaterial);
    front.castShadow = true;
    //this.add(front);

    let frontBool = new THREE.Mesh(frontBoolGeometry, frontBoolMaterial);
    //frontBool.castShadow = true;
    //this.add(frontBool);

    const frontCSG = CSG.fromMesh(front);
    const frontBoolCSG = CSG.fromMesh(frontBool);
    const frontWall = CSG.toMesh(frontCSG.subtract(frontBoolCSG), front.matrix, frontBool.material);
    frontWall.position.set(-9.2, -39.3, 20.9);
    frontWall.rotation.set(0,THREE.MathUtils.degToRad(90),0);
    this.add(frontWall);

    const positionsRight = [
    //1.8   46   22
    0, 0, 0,     // 0
    1.8, 0, 0,    // 1
    0, 0, 23, // 2
    1.8, 0, 23,  // 3
    0, 43.7, 0,     // 4
    1.8, 46, 0,    // 5
    0, 43.7, 23, // 6
    1.8, 46, 23,  // 7
    ];
    const positionsLeft = [
    //1.8   46   22
    0, 0, 0,     // 0
    1.8, 0, 0,    // 1
    0, 0, 23, // 2
    1.8, 0, 23,  // 3
    0, 46, 0,     // 4
    1.8, 43.7, 0,    // 5
    0, 46, 23, // 6
    1.8, 43.7, 23,  // 7
    ];
    const indices = [
    0,1,2,
    1,3,2,
    1,5,7,
    7,3,1,
    0,6,4,
    0,2,6,
    4,6,7,
    5,4,7,
    0,4,5,
    1,0,5,
    7,6,2,
    7,2,3
    ];

    const customRoofGeometryRight = new THREE.BufferGeometry();
    customRoofGeometryRight.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsRight), 3));
    customRoofGeometryRight.setIndex(indices);
    customRoofGeometryRight.computeVertexNormals();
    const roofCustomRight = new THREE.Mesh(customRoofGeometryRight, customRoofGeometryRightMaterial);
    roofCustomRight.position.set(17.6, -33, -2);
    roofCustomRight.rotation.set(0,0,THREE.MathUtils.degToRad(37.4));
    roofCustomRight.castShadow = true;
    this.add(roofCustomRight);

    const customRoofGeometryLeft = new THREE.BufferGeometry();
    customRoofGeometryLeft.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsLeft), 3));
    customRoofGeometryLeft.setIndex(indices);
    customRoofGeometryLeft.computeVertexNormals();
    const roofCustomLeft = new THREE.Mesh(customRoofGeometryLeft, customRoofGeometryLeftMaterial);
    roofCustomLeft.position.set(-36.9, -31.9, -2);
    roofCustomLeft.rotation.set(0,0,THREE.MathUtils.degToRad(-37.4));
    roofCustomLeft.castShadow = true;
    this.add(roofCustomLeft);

    const backWallPosition = [
    0, -0.4, 0,     // 0
    0, 44.7, 0,    // 1
    -19, 69.7, 0, // 2
    -37.8, 44.7, 0,  // 3
    -37.8, -0.4, 0,  //4
    0, -0.4, -1.8,     // 5
    0, 44.7, -1.8,    // 6
    -19, 69.7, -1.8, // 7
    -37.8, 44.7, -1.8,  // 8
    -37.8, -0.4, -1.8   //9
    ];
    const backWallIndices = [
    0,1,4,
    1,3,4,
    1,2,3,
    6,5,9,
    8,6,9,
    8,7,6,
    6,1,0,
    6,0,5,
    7,2,1,
    7,1,6,
    2,7,3,
    7,8,3,
    3,8,9,
    3,9,4,
    9,5,0,
    4,9,0
    ];

    const backWallGeometry = new THREE.BufferGeometry();
    backWallGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(backWallPosition), 3));
    backWallGeometry.setIndex(backWallIndices);
    backWallGeometry.computeVertexNormals();
    const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
    backWall.position.set(10, -68, -0.2);
    backWall.castShadow = true;
    this.add(backWall);
}

  addPhysics() {
      const positions = [
      [8.5,-58,-1.75],     // 0
      [8.5,-17,-1.75],    // 1
      [-7.3 ,4.5,-1.75],   //
      [-24,-17,-1.75],    // 3
      [-24,-58,-1.75],    // 4
      [8.5,-58,17.5],     // 5
      [8.5,-17,17.5],    // 6
      [-7.3 ,4.5,17.5],   // 7
      [-24,-17,17.5],    // 8
      [-24,-58,17.5],    // 9

      ];
      const indices = [
      [4,3,2,1],
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