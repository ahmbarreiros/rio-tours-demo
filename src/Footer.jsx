export const Footer = () => {
    return (
        <footer>
            <nav className="nav-footer">
                <ul>
                    <li className="menu-nav-footer">
                        <a href="#inicio" className="menu-nav-link-footer">
                            Início
                        </a>
                    </li>
                    <li className="menu-nav-footer">
                        <a href="#explore" className="menu-nav-link-footer">
                            Explore
                        </a>
                    </li>
                    <li className="menu-nav-footer">
                        <a href="#sobre" className="menu-nav-link-footer">
                            Sobre
                        </a>
                    </li>
                    <li className="menu-nav-footer">
                        <a href="#contato" className="menu-nav-link-footer">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="footerWrapper">
                <div className="contato" id="contato">
                    <a href="#">
                        <i>Facebook</i>
                    </a>
                    <a href="#">
                        <i>Twitter</i>
                    </a>
                    <a href="#">
                        <i>Youtube</i>
                    </a>
                </div>
                <div className="copyright">
                    <p>
                        Copyright &copy;
                        <span className="copy-riotours">
                            <span className="copy-destaque">R</span>io
                            <span className="copy-destaque">T</span>ours
                        </span>
                        2023
                    </p>
                </div>
            </div>
        </footer>
    );
};
