
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
import { ROUTES } from './routes';
import { AppContainer } from './globalStyles';
import GlobalStyle from "./globalStyles";
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import GlobalLoading from './components/GlobalLoading/GlobalLoading';
import Footer from './components/Footer/Footer';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './transition.css';

const store = configureStore();

function App() {

  const renderRoutes = () => {
    let xhtml = null;
    if (ROUTES) {
      xhtml = ROUTES.map(route => {
        return (
          <Route
            key={route.id}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      });
    }
    return xhtml;
  }

  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <AppContainer>
          <Container>
            {/* <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                > */}
                  <Switch>
                    {renderRoutes()}
                  </Switch>
                {/* </CSSTransition>
              </TransitionGroup>
            )} /> */}
          </Container>
        </AppContainer>
        <Footer />
        <GlobalLoading />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
