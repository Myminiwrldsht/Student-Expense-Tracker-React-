import NavBar from '../components/NavBar';
import Hero from '../sections/landingPage/Hero';
import About from '../sections/landingPage/About';
import HowItWorks from '../sections/landingPage/HowItWorks'
import Footer from '../components/Footer';
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