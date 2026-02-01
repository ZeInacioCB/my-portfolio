import MouseGlower from '../components/MouseGlower.jsx';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../layout/Header.jsx';
import Main from '../layout/Main.jsx';
import '../styles/index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        <MouseGlower />

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App;