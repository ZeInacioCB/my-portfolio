import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

function Main() {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
        </main>
    );
}

export default Main;