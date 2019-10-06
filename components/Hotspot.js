import React from "react";
import { StyleSheet, View, VrButton } from "react-360";


export default class Hotspot extends React.Component {

  // Send parameters to config.js
  sendParams() { 
    const { rotation } = this.props;  

    rotation ? postMessage({ type: rotation })  : null;
  }

  // Button action handler
  handleButtonClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
      this.sendParams();
    }
  };

  render() {
    const { position } = this.props;

    return (
      <View
        style={{
          top: position.top,
          left: position.left,
          position: "absolute"
        }}
      >
        <VrButton
          style={styles.box}
          onClick={this.handleButtonClick}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    opacity: 0.8
  },
  title: {
    fontSize: 20
  }
});