import React from "react";
import { AppRegistry } from "react-360";

import SceneManager from "./components/SceneManager.js";
import map from "./etc/map.json";

export default class App extends React.Component {
  render() {
    return (
      <SceneManager
        scenes={map.scenes}
        initialSceneId={map.initialSceneId}
      />
    );
  }
}

AppRegistry.registerComponent("App", () => App);