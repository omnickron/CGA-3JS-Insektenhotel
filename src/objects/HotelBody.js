import * as THREE from 'three';
import CSG from 'csg';


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
        let leftWallMap = new TextureLoader().load('src/maps/RawWood3.png');
        let leftWallMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: leftWallMap
        });

        let rightWallMap = new TextureLoader().load('src/maps/RawWood3.png');
        let rightWallMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: rightWallMap
        });

        let frontBoolMap = new TextureLoader().load('src/maps/RawWood3.png');
        let frontBoolMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: frontBoolMap
        });

        let floorMap = new TextureLoader().load('src/maps/RawWood3.png');
        let floorMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: floorMap
        });

        let lowerBoardMap = new TextureLoader().load('src/maps/RawWood3.png');
        let lowerBoardMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: lowerBoardMap
        });

        let centerBoardMap = new TextureLoader().load('src/maps/RawWood3.png');
        let centerBoardMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: centerBoardMap
        });

        let upperBoardMap = new TextureLoader().load('src/maps/RawWood3.png');
        let upperBoardMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: upperBoardMap
        });

        let leftInsideWallMap = new TextureLoader().load('src/maps/RawWood3.png');
        let leftInsideWallMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: leftInsideWallMap
        });

        let rightInsideWallMap = new TextureLoader().load('src/maps/RawWood3.png');
        let rightInsideWallMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: rightInsideWallMap
        });

        let backWallMap = new TextureLoader().load('src/maps/RawWood3.png');
        //let backWallUVMap = new TextureLoader().load('src/maps/RÃ¼ckenuvpng.png');
        let backWallMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: backWallMap,
        });

        let customRoofGeometryRightMap = new TextureLoader().load('src/maps/RawWood3.png');
        let customRoofGeometryRightMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: customRoofGeometryRightMap
        });

        let customRoofGeometryLeftMap = new TextureLoader().load('src/maps/RawWood3.png');
        let customRoofGeometryLeftMaterial = new THREE.MeshPhongMaterial({
            color: 0xd79f88,
            map: customRoofGeometryLeftMap
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

        let wallGeometry = new THREE.BoxGeometry(1.8, 47.5, 20.5);
        let frontGeometry = new THREE.BoxGeometry(1.2, 17.9, 16);
        let frontBoolGeometry = new THREE.BoxGeometry(2, 8, 1);
        let smallWallGeometry = new THREE.BoxGeometry(1.2, 15.8, 20.5);
        let floorGeometry = new THREE.BoxGeometry(35, 1.8, 20.5);
        let boardGeometry = new THREE.BoxGeometry(35, 1.2, 20.5);
        let smallBoardGeometry = new THREE.BoxGeometry(23.5, 1.2, 20.5);

        let gitterUntenGeo = new THREE.PlaneGeometry(3.55, 2, 28, 15);
        ToQuads(gitterUntenGeo);
        let gitterMaterialBottom = new THREE.LineBasicMaterial({color: 0x2a2a2a, transparent: true,
            opacity: 1});
        let gitterMaterial = new THREE.LineBasicMaterial({color: 0x2a2a2a, transparent: true,
            opacity: 1});
        let gitterUntenMesh = new THREE.LineSegments(gitterUntenGeo, gitterMaterialBottom);
        gitterUntenMesh.scale.set(10, 10, 1);
        gitterUntenMesh.position.set(-9, -57.5, 20.6);
        this.add(gitterUntenMesh);

        let obenGitterGeo0 = new THREE.PlaneGeometry(25.35, 2.66, 20, 2);
        ToQuads(obenGitterGeo0);
        let obenGitter0 = new THREE.LineSegments(obenGitterGeo0, gitterMaterial);
        obenGitter0.position.set(-9, -10.66-1.5, 21);
        this.add(obenGitter0);

        let obenGitterGeo1 = new THREE.PlaneGeometry(20.2, 2.66, 16, 2);
        ToQuads(obenGitterGeo1);
        let obenGitter1 = new THREE.LineSegments(obenGitterGeo1, gitterMaterial);
        obenGitter1.position.set(-9, -8-1.5, 21);
        this.add(obenGitter1);

        let obenGitterGeo2 = new THREE.PlaneGeometry(17.75, 2.66, 14, 2);
        ToQuads(obenGitterGeo2);
        let obenGitter2 = new THREE.LineSegments(obenGitterGeo2, gitterMaterial);
        obenGitter2.position.set(-9, (-5.34-1.5), 21);
        this.add(obenGitter2);

        let obenGitterGeo3 = new THREE.PlaneGeometry(12.67, 2.66, 10, 2);
        ToQuads(obenGitterGeo3);
        let obenGitter3 = new THREE.LineSegments(obenGitterGeo3, gitterMaterial);
        obenGitter3.position.set(-9, (-2.68-1.5), 21);
        this.add(obenGitter3);

        let obenGitterGeo4 = new THREE.PlaneGeometry(7.6, 2.66, 6, 2);
        ToQuads(obenGitterGeo4);
        let obenGitter4 = new THREE.LineSegments(obenGitterGeo4, gitterMaterial);
        obenGitter4.position.set(-9, (-0.02-1.5), 21);
        this.add(obenGitter4);

        let obenGitterGeo5 = new THREE.PlaneGeometry(2.53, 2.66, 2, 2);
        ToQuads(obenGitterGeo5);
        let obenGitter5 = new THREE.LineSegments(obenGitterGeo5, gitterMaterial);
        obenGitter5.position.set(-9, (2.64-1.5), 21);
        this.add(obenGitter5);

        function ToQuads(g) {
            let p = g.parameters;
            let segmentsX = (g.type == "TorusBufferGeometry" ? p.tubularSegments : p.radialSegments) || p.widthSegments || p.thetaSegments || (p.points.length - 1) || 1;
            let segmentsY = (g.type == "TorusBufferGeometry" ? p.radialSegments : p.tubularSegments) || p.heightSegments || p.phiSegments || p.segments || 1;
            let indices = [];
            for (let i = 0; i < segmentsY + 1; i++) {
                let index11 = 0;
                let index12 = 0;
                for (let j = 0; j < segmentsX; j++) {
                    index11 = (segmentsX + 1) * i + j;
                    index12 = index11 + 1;
                    let index21 = index11;
                    let index22 = index11 + (segmentsX + 1);
                    indices.push(index11, index12);
                    if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                        indices.push(index21, index22);
                    }
                }
                if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                    indices.push(index12, index12 + segmentsX + 1);
                }
            }
            g.setIndex(indices);
        }

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
        floor.receiveShadow = true;
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
        const customRoofGeometryLeft = new THREE.BufferGeometry();

// set vertices positions
        const verticesRight = new Float32Array([
            0, 0, 0,     // 0
            1.8, 0, 0,    // 1
            0, 0, 23, // 2
            1.8, 0, 23,  // 3
            0, 43.7, 0,     // 4
            1.8, 46, 0,    // 5
            0, 43.7, 23, // 6
            1.8, 46, 23,  // 7
        ]);
        customRoofGeometryRight.setAttribute('position', new THREE.BufferAttribute(verticesRight, 3));// set vertices positions
        const verticesLeft = new Float32Array([
            //1.8   46   22
            0, 0, 0,     // 0
            1.8, 0, 0,    // 1
            0, 0, 23, // 2
            1.8, 0, 23,  // 3
            0, 46, 0,     // 4
            1.8, 43.7, 0,    // 5
            0, 46, 23, // 6
            1.8, 43.7, 23,  // 7
        ]);
        customRoofGeometryLeft.setAttribute('position', new THREE.BufferAttribute(verticesLeft, 3));

// set UV coordinates
        const uvsRight = new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1,
            1, 0,
            1, 1,
            0, 1,
            0, 0,
            0, 0,
            1, 0,
            1, 1,
            0, 1,
            0, 0,
            1, 0,
            1, 1,
            0, 1
        ]);
        customRoofGeometryRight.setAttribute('uv', new THREE.BufferAttribute(uvsRight, 2));// set UV coordinates
        const uvsLeft = new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1,
            1, 0,
            1, 1,
            0, 1,
            0, 0,
            0, 0,
            1, 0,
            1, 1,
            0, 1,
            0, 0,
            1, 0,
            1, 1,
            0, 1
        ]);
        customRoofGeometryLeft.setAttribute('uv', new THREE.BufferAttribute(uvsLeft, 2));

// set faces
        const indicesRight = new Uint16Array([
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
        ]);
        customRoofGeometryRight.setIndex(new THREE.BufferAttribute(indicesRight, 1));// set faces
        const indicesLeft = new Uint16Array([
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
        ]);
        customRoofGeometryLeft.setIndex(new THREE.BufferAttribute(indicesLeft, 1));
        customRoofGeometryRight.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsRight), 3));
        customRoofGeometryRight.setIndex(indices);
        customRoofGeometryRight.computeVertexNormals();
        const roofCustomRight = new THREE.Mesh(customRoofGeometryRight, customRoofGeometryRightMaterial);
        roofCustomRight.position.set(17.6, -33, -2);
        roofCustomRight.rotation.set(0,0,THREE.MathUtils.degToRad(37.4));
        roofCustomRight.castShadow = true;
        this.add(roofCustomRight);

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

// set vertices positions
        const vertices = new Float32Array([
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
        ]);
        backWallGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// set UV coordinates
        const uvs = new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1,
            1, 0,
            1, 1,
            0, 1,
            0, 0,
            0, 0,
            1, 0,
            1, 1,
            0, 1,
            0, 0,
            1, 0,
            1, 1,
            0, 1
        ]);
        backWallGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

// set faces
        const indices2 = new Uint16Array([
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
        ]);
        backWallGeometry.setIndex(new THREE.BufferAttribute(indices2, 1));
        backWallGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(backWallPosition), 3));
        backWallGeometry.setIndex(backWallIndices);
        backWallGeometry.computeVertexNormals();
        const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
        backWall.position.set(10, -68, -0.2);
        backWall.castShadow = true;
        this.add(backWall);
    }
}
