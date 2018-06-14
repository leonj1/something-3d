
import { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

class Circle extends Component {
    componentWillMount() {
        this.geometry = new THREE.CircleGeometry(5, 32);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);

        this.context.scene.add(this.cube);
    }

    componentDidUpdate() {
        const { rotation, position } = this.props;

        // this.cube.rotation.x = rotation.x;
        // this.cube.rotation.y = rotation.y;
        //this.cube.rotation.z = rotation.z;

        this.cube.position.x = position.x;
        this.cube.position.y = position.y;
        this.cube.position.z = position.z;
    }

    render() {
        return null;
    }
}

Circle.contextTypes = {
    scene: PropTypes.object
}


export default Circle;
