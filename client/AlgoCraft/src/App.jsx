
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
function App() {

  return (
    <>
    
  
   <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        <Navbar />
        <main className="min-h-screen">
           <Outlet/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App





