/*jshint esnext: true */

import THREE from "three";
import Skin from "./skin";

class Minehead {
	constructor(username = "notch") {
		this.scene = null;
		this.renderer = null;
		this.camera = null;

		this.username = username;
		this.skin = new Skin(username);

		init();
	}

	init() {
		// Set scene and camera
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

		// Define a WebGL Renderer
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(this.renderer.domElement);

		update(0);
	}

	update(delta) {
		requestAnimationFrame(this.update);

		// The skin must be present and loaded
		if (skin && skin.ready) {

		}
	}
}
