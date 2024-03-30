import './App.css';
import Alert from './components/Alert/Alert';
import Header from './components/Header/Header';
import TagsPage from './pages/TagsPage';

const App = () => {
  return (
    <>
      <Header />
      <TagsPage />
      <Alert />
    </>
  );
};

export default App;
