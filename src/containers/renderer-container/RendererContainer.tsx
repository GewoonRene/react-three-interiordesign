import React, { PureComponent, createRef } from 'react';
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
