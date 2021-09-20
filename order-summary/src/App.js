import logo from './logo.svg';
import './styles/css/OrderSummary.css';

import {OrderSummaryWrapper} from '../src/components/OrderSummaryWrapper'
import {OrderSummary} from './components/OrderSummary'

function App() {
  return (
    <div className="App">
      <OrderSummaryWrapper>
        <OrderSummary></OrderSummary>
      </OrderSummaryWrapper>
    </div>
  );
}

export default App;
