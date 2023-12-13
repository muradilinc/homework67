import SafePage from '../SafePage/SafePage';
import {Route, Routes} from 'react-router-dom';
import CalculatorPage from '../Calculator/CalculatorPage';

const App = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<SafePage/>}/>
        <Route path="/calculator" element={<CalculatorPage/>}/>
      </Routes>
    </div>
  );
};

export default App;