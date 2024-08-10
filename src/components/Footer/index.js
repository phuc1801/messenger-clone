import { FaMeta } from "react-icons/fa6";
import './Footer.css';
import meta from './images/meta.png';

function Footer(){
    return(
        <>  
            <div className='content'>
                <ul className='Footer'>
                    <li className='content-ft'><FaMeta /></li>
                    <li className='content-ft'>Logo của Apple và Google Play là nhãn hiệu hàng hóa thuộc chủ sở hữu tương ứng.</li>
                    <li className='content-ft'>Chính sách và quyền riêng tư</li>
                    <li className='content-ft'>Chính sách cookie</li>
                    <li className='content-ft'>Điều khoản</li>
                    <li className='content-ft'><img className='meta-img' src={meta} alt='meta'></img></li>
                </ul>
            </div>
           
        </>
    );
}

export default Footer;