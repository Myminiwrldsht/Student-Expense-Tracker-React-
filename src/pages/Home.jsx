import NavBar from '../components/NavBar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import HowItWorks from '../sections/HowItWorks'
import Footer from '../sections/Footer';
export default function Home () {
    return(
        <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-grow-1">
        <Hero />
        <About />
        <HowItWorks />
        </main>
        <Footer />
        </div>
    );
}