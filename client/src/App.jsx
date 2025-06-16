// src/App.jsx
import Hero from './components/Hero';
import DestinationList from './components/DestinationList';
import Advantages from './components/Advantages';
import TopSellingPackages from './components/TopSellingPackages';
import Testimonials from './components/Testimonials';


export default function App() {
  return (
    <>
      {/* Hero section her */}
      <Hero />

    
      
        <DestinationList />
        <Advantages />
        <TopSellingPackages />
        <Testimonials />
      
    </>
  );
}
