import microsoft from './images/microsoft.png';
import appstore from './images/app_store.png';
import contentChat from './images/content_chat.png';
import './Content.css';

function Content(){
    return(
        <>
            <main className='main'>
                <div className="content">
                    <div className='main-content'>
                        <div className="left-content">
                            <h1 className='content-title'>Tụ họp <br/>
                            mọi lúc, mọi nơi</h1>
                            <p>Với Messenger, việc kết nối với những người thân yêu thật đơn giản và thú vị.</p>
                            <form className='form-content'>
                                <input type="username" placeholder="Email hoặc số điện thoại" className='input'/> <br/>
                                <input type="password" placeholder="Mật khẩu" className='input'/>  <br/>
                                <button className='content-login'>Đăng nhập</button>
                                <a href="#!" className='content-forgot'>Bạn quên mật khẩu?</a>
                            </form>
                            <div className='content-ckbox'>
                                <input type="checkbox"/>
                                <label>Duy trì đăng nhập</label>
                            </div>
                            <div>
                                <img src={appstore} alt="appstore" className='content-img'></img>
                                <img src={microsoft} alt="microsoft" className='content-img'></img>           
                            </div>
                        </div>
                        <div className="right-content">
                            <img src={contentChat} alt="contentChat" className='content-img2'></img>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Content;