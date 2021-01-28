import logo from './logo.svg';
import { Helmet } from "react-helmet";
import './App.css';
import NavBar from './components/navbar';
import Content from './components/content';
import "./App.css";
import themeStyles from './themes/theme-styles';
import { useContext } from 'react';
import { themeContext, ThemeProvider, themeProvider } from './provider';

const AddStyleTag = () => {
  const { activeTheme } = useContext(themeContext);
  return (
    <Helmet><style>{themeStyles(activeTheme)}</style></Helmet>
  );
}

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AddStyleTag />
        <NavBar />
        {/* <Switcher />
      </NavBar> */}
        <Content />
      </ThemeProvider>
    </div>
  );
}

export default App;
