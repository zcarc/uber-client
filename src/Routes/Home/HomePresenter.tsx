import React from "react";
import { Helmet } from "react-helmet";
import styled from "../../typed-components";
import Sidebar from "react-sidebar";
import Menu from "src/Components/Menu";

const Container = styled.div``;

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HomePresenter: React.SFC<IProps> = ({ isMenuOpen, toggleMenu }) => (
  <Container>
    <Helmet>
      <title>Home | Number</title>
    </Helmet>
    <Sidebar
      sidebar={<Menu/>}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      styles={{
        sidebar: {
          width: "80%",
          backgroundColor: "white",
          zIndex: "10",
        },
      }}
    >
      <button onClick={() => toggleMenu()}>Open sidebar</button>
    </Sidebar>
  </Container>
);

export default HomePresenter;
