import React from "react";
import { graphql } from "react-apollo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";
import { ThemeProvider } from "src/typed-components";
import theme from "src/theme";

const AppContainer = (dataParam) => {
  const { data } = dataParam;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      </ThemeProvider>
      <ToastContainer draggable={true} position={"bottom-center"}/>
    </>
  );
};

export default graphql(IS_LOGGED_IN)(AppContainer);
