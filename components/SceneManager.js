import React from "react";
import { View, Environment, asset } from "react-360";

import Hotspot from "./Hotspot";

export default class SceneManager extends React.Component {
  state = {
    currentSceneId: this.props.initialSceneId
  };

  componentDidMount() {
    this.updateScene();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.currentSceneId !== this.state.currentSceneId){
      this.updateScene();
    }
  }

  /**
   * 1. Environment is used to change the background of the scene, if background is dynamic.
   * 2. asset(myImage.png) by default will point to the image at static_assets/myImage.png
   */ 
  updateScene = () => {
    const currentScene = this.getCurrentScene();

    Environment.setBackgroundImage(
      asset(currentScene.image)
    );
  };

  // Find current scene with all properties in map file (!initial scene on first load)
  getCurrentScene = () => (
    this.getSceneById(this.state.currentSceneId)
  );

  // Find scene with all properties in map file
  getSceneById = sceneId => (
    this.props.scenes.find(scene => scene.id === sceneId)
  );

  // Update state of current scene what will trigger updateScene() function
  handleHotspotClick = (_e,sceneToGo) => {
    this.setState({ currentSceneId: sceneToGo.id });
  };

  // Render a new navigation element (hotspot) with correct params
  renderHotspots = (hotspots) => {
    return hotspots.map((hotspot, index) => {
      const sceneToGo = this.getSceneById(hotspot.sceneId);

      return (
        <Hotspot
          key={index}
          onClick={e => this.handleHotspotClick(e, sceneToGo)}
          position={hotspot.position}
          rotation={hotspot.rotation}
        />
      );
    });
  };

  render() {
    const currentScene = this.getCurrentScene();

    return (
      <View style={{ flex: 1 }}>
        {this.renderHotspots(currentScene.hotspots)}
      </View>
    );
  }
}