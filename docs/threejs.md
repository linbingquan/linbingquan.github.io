# three.js

<template>
    <div id="canvas-container"></div>
</template>

<script>
export default {
    mounted () {
        /**
         * 加载script文件
         * @param url
         * @param callback
         */
        const loadScript = (url, callback) => {
            const script = document.createElement('script');
            script.src = url;
            // 加载之后立即执行
            script.onload = () => callback && callback();
            document.body.appendChild(script);
        }

        loadScript('https://threejs.org/build/three.min.js', () => {

            var CANVAS_WIDTH = document.getElementById('canvas-container').clientWidth;
            var CANVAS_HEIGHT = CANVAS_WIDTH;

            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
            var canvasBoxDom = document.getElementById('canvas-container');
            canvasBoxDom.appendChild( renderer.domElement );

            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 5;

            var animate = function () {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            };

            animate();
        });

    }
}
</script>
