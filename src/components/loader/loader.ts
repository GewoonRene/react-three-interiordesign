import { Collada, ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';

const LOADER = new ColladaLoader();
export const SketchupLoader: ILoader = 
{     
    load: (path: string, cb: ( collada: Collada ) => void): void => 
    {
        LOADER.load(path, cb, 
        (xhr: ProgressEvent) => 
        {
        	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        (error: ErrorEvent) => 
        {
		    console.log( 'An error happened' );
            console.error(error);
        });
    } 
}
