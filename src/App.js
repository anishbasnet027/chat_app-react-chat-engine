import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="ef6f06f7-f6ee-4110-a1f7-11320eb32697"
      userName="admin"
      userSecret="admin"
    />
  );
};

export default App;
import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
// import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        {/* <AuthProvider> */}
          <Switch>
            {/* <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} /> */}
          </Switch>
        {/* </AuthProvider> */}
      </Router>
    </div>
  )
}

export default App
