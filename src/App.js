
import './App.css';
import { TextInput,Container } from 'react-materialize';
import GoogleLogin from '@react-oauth/google';

function App() {
  return (
    <Container>
    <div className='App'>
    <div className='appAside'/>
    
    <div className='appForm'>
    <div className='form'>
    <h5 className='chaomung'>Chào Mừng Trở Lại</h5>
    <TextInput id='username' label="Tài Khoản"></TextInput>
    <TextInput id='password' type='password' label="Mật Khẩu"></TextInput>
    <button className='login-button'>Đăng Nhập</button>
    
    </div>
    </div>
    </div>
    </Container>
  );
}

export default App;
