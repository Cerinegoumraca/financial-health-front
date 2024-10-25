import { FinancialProvider } from './components/context/FinancialContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <FinancialProvider>
      <Dashboard />
    </FinancialProvider>
  );
}

export default App;
