import React, { PureComponent, createRef } from 'react';
import * as THREE from 'three';

class RendererContainer extends PureComponent
{
    private readonly scene: THREE.Scene = new THREE.Scene();
    private readonly camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    private readonly renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()
    private rendererRef: React.RefObject<any> = createRef();

    public componentDidMount(): void
    {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererRef.current.appendChild(this.renderer.domElement);

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );

        this.camera.position.z = 5;

        this.componentRunRenderer();
    }

    private componentRunRenderer = (): void =>
    {
        requestAnimationFrame(this.componentRunRenderer);
        this.renderer.render(this.scene, this.camera);
    }

    public render(): JSX.Element
    {
        return (
            <div ref={this.rendererRef}>

            </div>
        )
    }
}

export {
    RendererContainer
}
