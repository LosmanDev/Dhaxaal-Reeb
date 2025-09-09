import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Donate from './components/donate';

export default function Home() {
  return (
    <div>
      <Navbar className="relative z-50" />
      <span className="square square-1"></span>
      <span className="square square-2"></span>
      <Landing />
      <About />
      <Donate />
    </div>
  );
}
