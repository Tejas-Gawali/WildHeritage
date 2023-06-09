import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchEndangeredSpecies } from './api';

const SpeciesList = ({ species }) => {
  return (
    <ul>
      {species.map((specie) => (
        <li key={specie.id}>
          <Link to={`/species/${specie.id}`}>{specie.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const SpeciesDetails = ({ species }) => {
  return (
    <div>
      <h2>{species.name}</h2>
      <p>{species.description}</p>
      {/* Add more information as needed */}
    </div>
  );
};

const App = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      const data = await fetchEndangeredSpecies();
      setSpecies(data);
    };

    fetchSpeciesData();
  }, []);

  return (
    <Router>
      <div>
        <h1>Endangered Species</h1>
        <Switch>
          <Route exact path="/">
            <SpeciesList species={species} />
          </Route>
          <Route path="/species/:id">
            <SpeciesDetails species={species} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
