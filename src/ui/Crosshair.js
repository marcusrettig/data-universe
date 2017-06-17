import { Geometry } from 'three/core/Geometry';
import { LineBasicMaterial } from 'three/materials/LineBasicMaterial';
import { Vector3 } from 'three/math/Vector3';
import { LineSegments } from 'three/objects/LineSegments';

export default class Crosshair extends LineSegments {
  constructor() {
    const geometry = createGeometry(0.05);
    const material = createMaterial();

    const obj = super(geometry, material);

    this.size = 0.05;
    this.selected = false;
    this.timer = 0;
    this.timeLimit = 30;
    return obj;
  }

  update(selector) {
    if (selector.selected) {
      this.size += 0.01;
      this.updateGeometry(this.size);
    }
    else if (this.selected && this.timer < this.timeLimit) {
      this.timer += 3;
      this.size += 0.01;
      this.updateGeometry(this.size);
    }
    else if (this.selected) {
      this.size = 0.05;
      this.selected = false;
      this.timer = 0;
    }
  }

  updateGeometry(size) {
    const halfSize = size / 2;
    this.geometry.vertices[0] = new Vector3(0, halfSize, 0);
    this.geometry.vertices[1] = new Vector3(0, -halfSize, 0);
    this.geometry.vertices[2] = new Vector3(-halfSize, 0, 0);
    this.geometry.vertices[3] = new Vector3(halfSize, 0, 0);
  }

}

function createMaterial() {
  return new LineBasicMaterial({
    color: '#fff',
    linewidth: 2,
    linecap: 'round',
    linejoin: 'round',
    opacity: 0.25,
    transparent: true,
  });
}

function createGeometry(size) {
  const geometry = new Geometry();
  const halfSize = size / 2;
  geometry.vertices.push(new Vector3(0, halfSize, 0));
  geometry.vertices.push(new Vector3(0, -halfSize, 0));
  geometry.vertices.push(new Vector3(-halfSize, 0, 0));
  geometry.vertices.push(new Vector3(halfSize, 0, 0));
  return geometry;
}

