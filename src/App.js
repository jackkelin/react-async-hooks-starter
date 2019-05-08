import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ExampleView from '../src/components/views/ExampleView';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={ExampleView} />
    </Router>
  );
}

export default AppRouter;
