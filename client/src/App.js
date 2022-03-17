import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NavTabs from './components/NavTabs'
import PerpPage from './components/PerpPage';
import AttemptPerpPage from './components/PerpPage/AttemptPerpPage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container, Row, Col, Table, Card, Button } from 'react-bootstrap'
import Register from './components/Registration/Register';
import RegisterOffender from './components/Registration/RegisterOffender';
import Dog from './components/DogAPI.js'
import RegisterOffender2 from './components/Registration/RegisterOffender2';

function App() {
  return (
    <div className="App">
      <NavTabs />
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
            <header className="App-header">
              <Container >
                <Row>
                  <Col>
                    <img src={logo} className="App-logo" alt="logo" />

                    <h1>About PAW</h1>
                    <h5>
                      PAW (Policing the Animals of the World)
                    </h5>
                  </Col>
                  <Col>

                    <Table style={{ height: '100%', color: 'white' }}>
                      <tr style={{ height: '100%' }}>
                        <td>
                          <img src={"liam_neeson.png"} />
                        </td>
                        <td>
                          Liam Neeson - Founder of<br />PAW (Policing the Animals of the World)
                          <p style={{ fontSize: 14, textAlign: 'left' }}>
                            Liam Neeson has received several accolades throughout his career, including nominations for an Academy Award, a British Academy Film Award, two Tony Awards, and three Golden Globe Awards. In 2020, Neeson was listed at number 7 on The Irish Times list of Ireland's 50 greatest film actors. So... <i><strong>he</strong></i> would know how to deal with "naughty" pets.
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: '100%' }}>
                        <td>
                          <img src={"dissinyourdog.png"} />
                        </td>
                        <td>
                          Dale Sturtevant - Head of Research at <br />PAW (Policing the Animals of the World)
                          <p style={{ fontSize: 14, textAlign: 'left' }}>
                            Dog expert Dale Sturtevant (Will Ferrell) advertises his new puppy training program, “Dissing Your Dog,” which uses mockery and verbal humiliation to effectively correct puppy behavior.
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </Col>
                </Row>
              </Container>
              {/* <NavTabs
          // authenticated={authenticated}
          // logout={logout}
        /> */}
            </header>

          </Route>
          <Route exact path={["/", "/registerOffender"]}>
            <RegisterOffender2 />
          </Route>

          <Route exact path={["/", "/perppage"]}>
            <PerpPage />
          </Route>
          <Route exact path={["/", "/register"]}>
            <Register />
          </Route>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>

          <Route exact path={["/", "/fact"]}>
            <Dog />

          </Route>


        </Switch>
      </Router>
    </div >
  );
}

export default App;
