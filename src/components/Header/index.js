import logo from './images/logo_messenger.png';
import './Header.css';

function Header(){
    return (
        <>
            <header className='heading'>
                <div className='content'>
                <nav className='nav'>
                    <div className='logo-Messenger'>
                    <img src={logo} alt="logo" className='logo'/>
                    </div>
                    <div className='nav-father'>
                    <ul className='nav-bar'>
                        <li className='nav-item'><a href='#!'>Tính năng</a></li>
                        <li className='nav-item'><a href='#!'>Ứng dụng dành cho máy tính</a></li>
                        <li className='nav-item'><a href='#!'>Quyền riêng tư & an toàn</a></li>
                        <li className='nav-item'><a href='#!'>Dành cho nhà phát triển</a></li>
                    </ul>
                    </div>
                </nav>
                
                </div>
            </header>
        </>
    );
}

export default Header;