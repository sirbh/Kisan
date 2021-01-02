import logo from "./logo.svg";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import Message from "./Components/UIComponents/Message";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Components/MessageModal/MessageModal";
import Messages from "./Components/Messages/Messages";
import UserDetails from "./Components/UserDetails/UserDetails";
import NotFound from './Components/NotFound/NotFound'
import * as ContactActions from './Store/ContactActions'


function App() {
  const showModal = useSelector((state) => state.modal.showModal);
  const showMessage = useSelector((state) => state.message.showMessage);

 
  return (
    <div className="App">
      <BrowserRouter>
        {showMessage && <Message></Message>}
        {showModal && <Modal></Modal>}
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Contacts></Contacts>
            </Route>
            <Route path="/messages">
              <Messages></Messages>
            </Route>
            <Route path="/contact/:id" exact>
              <UserDetails></UserDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
