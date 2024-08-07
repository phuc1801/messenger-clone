import microsoft from './images/microsoft.png';
import appstore from './images/app_store.png';
import contentChat from './images/content_chat.png';

function Content(){
    return(
        <>
            <main>
                <div className="content">
                    <div className="left-content">
                        <h1>Tụ họp <br/>
                        mọi lúc, mọi nơi</h1>
                        <p>Với Messenger, việc kết nối với những người thân yêu thật đơn giản và thú vị.</p>
                        <form>
                            <input type="username" placeholder="Email hoặc số điện thoại"/> <br/>
                            <input type="password" placeholder="Mật khẩu"/>  <br/>
                            <button>Đăng nhập</button>
                            <a href="#!">Bạn quên mật khẩu</a>
                        </form>
                        <div>
                            <input type="checkbox"/>
                            <label>Duy trì đăng nhập</label>
                        </div>
                        <div>
                            <img src={appstore} alt="appstore"></img>
                            <img src={microsoft} alt="microsoft"></img>           
                        </div>
                    </div>
                    <div className="right-content">
                        <img src={contentChat} alt="contentChat"></img>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Content;