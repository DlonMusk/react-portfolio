
import './App.css';
import React, {useState} from 'react';
import Nav from './components/NavBar'
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Introduction />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer />
    </div>

  );
}

export default App;
