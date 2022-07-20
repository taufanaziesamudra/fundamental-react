import './App.css';
import Layout from './Layout';
import Profile from './Day1/Profile';
import Movies from './Day2/Movies';
// import Detail from './Day3/Pages/Detail';
// import Home from './Day3/Pages/Home';

function App() {
  return (
    <Layout title="QUBISA">
      {/* <Profile /> */}
      <Movies />
      {/* <Detail />
      <Home /> */}
    </Layout>
  );
}

export default App;
