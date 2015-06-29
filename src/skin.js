/*jshint esnext: true */

const SKIN_URL = "http://skins.minecraft.net/MinecraftSkins/__PLAYER__.png";

class Skin {
	constructor(username) {
		this.username = username;
		this.ready = false;
	}

	init() {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');

		// Get skin by username
		var imageUrl = SKIN_URL.replace('__PLAYER__', this.username);
		this.fromImage(imageUrl);
	}

	fromImage(url) {
		this.image = new Image();
		this.image.crossOrigin = 'anonymous';
		this.image.src = url;
		this.image.onload(e => this.ready = true);
	}
}
