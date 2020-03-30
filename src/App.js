import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <GlobalStyle />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
