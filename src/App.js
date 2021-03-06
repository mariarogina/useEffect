import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';


function App() {
  const [detailsId, setDetailsId] = useState(null)

  const showDetails = (id) => {
    setDetailsId(id);
  }

  return (
    <div className="App container">
      <div className='row'>
      <div className='col-4'>
        <List showDetails={showDetails} />
      </div>
      <div className='col-4'>
        {detailsId ? <Details id={detailsId} /> : null}
      </div>
    </div>
    </div>
  );
}

export default App;
