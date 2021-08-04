import React from 'react';
import StartPage from './StartPage/view/StartPage';
import './App.css';
import { useAction, useAtom } from '@reatom/react';
import { setUserAction, userAtom } from './StartPage/model/userAtom';
import { 
  BrowserRouter as Router, 
  Route,
  Redirect
} from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import WorkSpace from './WorkSpace/view/WorkSpace';

function App() {
  const cookiesUser = Cookies.get('name') || null;
  const setUser = useAction(setUserAction);
  const user = useAtom(userAtom);
  useEffect(() => {
    setUser(cookiesUser);
  });

  return ( 
    <div className="App">
      <Router>
        <Route path="/">
          {user ? <Redirect to={`/${user}`}/> : <StartPage />}
        </Route>
        <Route path={`/${user}`}>
          <WorkSpace />
        </Route>
        <Redirect to="/"/>
      </Router>
    </div>
  );
}

export default App;
