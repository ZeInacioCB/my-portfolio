function Header() {
  return (
    <header>
        <div className="title">
            <h1 className="text-xl text-primary font-bold">
                <a href="/">Zé Inácio Castelo Branco</a>
            </h1>
            <h2 className="text-lg text-secondary font-medium">Software Developer</h2>
        </div>

        <nav>
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>

        <div className="social-links">
            <ul>
                <li><a href="https://github.com/zeinacio" className="hover:underline">GitHub</a></li>
                <li><a href="https://linkedin.com/in/zeinacio" className="hover:underline">LinkedIn</a></li>
                <li><a href="https://twitter.com/zeinacio" className="hover:underline">Twitter</a></li>
            </ul>
        </div>
    </header>
  );
}

export default Header;