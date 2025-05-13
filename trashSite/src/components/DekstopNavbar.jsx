import '../styles/navbar.css';
import MenuIcon from '@mui/icons-material/Menu'
export default function DekstopNavbar() {
    return (<>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    <div>
                        <span className="navbar-logo">Iqronix</span>
                    </div>
                    <div className="navbar-menu">
                        <a href="/" className="navbar-link">Home</a>
                        <a href="/about" className="navbar-link">About</a>
                        <a href="/contact" className="navbar-link">Contact</a>
                        
                    </div>
                    <button className="navbar-cta">Get Started</button>
                </div>
            </div>
        </nav>
    
        
 </>   );
} 