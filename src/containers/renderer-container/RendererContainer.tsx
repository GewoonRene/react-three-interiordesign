import React, { PureComponent, createRef } from 'react';
import { SketchupLoader } from '@components/loader/loader.ts'
import SKETCHUPMODAL from '@assets/voor-rene.dae';
// import '@assets/Chrome_Polished_mtl_1.jpg';
// import '@assets/Dark_Cherry_Wood_mtl_1.png';
// import '@assets/Porcelain_White_mtl_0.jpg';
import s from './renderer.module.less';
import * as THREE from 'three';

class RendererContainer extends PureComponent
{
    private readonly scene: THREE.Scene = new THREE.Scene();
    private readonly camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    private readonly renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    private readonly rendererRef: React.RefObject<any> = createRef();

    public componentDidMount(): void
    {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererRef.current.appendChild(this.renderer.domElement);

        this.camera.position.set(15, 10, -10);
        this.camera.lookAt(new THREE.Vector3(10, 0, -10));

        const LIGHT = new THREE.AmbientLight( 0x404040 );

        SketchupLoader.load(SKETCHUPMODAL, ( collada: any ) => {
            this.scene.add(collada.scene);
        });

        this.scene.add(LIGHT);
        this.componentRunRenderer();
    }

    private componentRunRenderer = (): void =>
    {
        requestAnimationFrame(this.componentRunRenderer);
        this.renderer.render(this.scene, this.camera);
    }

    public render(): JSX.Element
    {
        return <div
            className={s.container}
            ref={this.rendererRef}
        />
    }
}

export {
    RendererContainer
}
