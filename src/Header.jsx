export const Header = () => {
    return (
        <header>
            <h2 className="logo">
                <span className="letra-destacada">R</span>io
                <span className="letra-destacada">T</span>ours
            </h2>
            <nav className="nav-header">
                <ul>
                    <li className="menu-nav-item ativo">
                        <a href="#inicio" className="menu-nav-link">
                            Início
                        </a>
                    </li>
                    <li className="menu-nav-item">
                        <a href="#explore" className="menu-nav-link">
                            Explore
                        </a>
                    </li>
                    <li className="menu-nav-item">
                        <a href="#sobre" className="menu-nav-link">
                            Sobre
                        </a>
                    </li>
                    <li className="menu-nav-item">
                        <a href="#contato" className="menu-nav-link">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
