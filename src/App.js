import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Results from './components/results/Results';
import Admission from './components/admission/Admission';

const App = () => {
  
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Results} />
          <Route exact path="/admission" component={Admission} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
