import logo from "./components/images/logo.png"
import group from "./components/images/Group 1.png"
import './App.css';
import { TextInput } from 'react-materialize';
import GoogleLogin from "react-google-login";


function App() {

  return (

    <div className='App'>

      <div className='appAside'>
        <img className="wlogo" src={logo} alt="logo" />
      </div>

      <div className='appForm'>
        <div className='form'>
          <img src={group} alt="logo" class="center" />
          <h5 className='chaomung'>Chào Mừng Trở Lại</h5>
          <TextInput id='username' label="Tài Khoản"></TextInput>
          <TextInput id='password' type='password' label="Mật Khẩu"></TextInput>
          <button className='login-button'>Đăng Nhập</button><br></br>
          <GoogleLogin className="keodai"
            clientId="846433388076-d1h9s38cqveue2jkh0849ge3a99k9ho0.apps.googleusercontent.com"
            buttonText="Đăng nhập bằng google"

            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>

        </div>
      </div>

    </div>

  );
}

export default App;
