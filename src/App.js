import Card from './components/card/Card';
import './App.css';

function App() {
  const titles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return (
    <div>
      <Card title="A" />
      <Card title="B" />
      <Card title="C" />
      {titles.map(item => (
        <Card title={item} />
      ))}
    </div>
  );
}

export default App;
