import React, { Component } from "react";

import styled from "styled-components";

import { AppleWatch, IphoneX, IpadPro, MacbookPro } from "../../src";

class App extends Component {
  render() {
    let wpp1 =
      "https://raw.githubusercontent.com/vinicius-gr/styled-devices/master/examples/public/assests/IphoenX.jpg";
    return (
      <div>
        <IphoneX background={[wpp1]} />
      </div>
    );
  }
}

export default App;
