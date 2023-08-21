

import logo from "../images/logo.png"
import avatar from "../images/avatar-2.png"



export default function Navigation() {
    return (

        <nav class="navbar">

            <div class="nav-wrapper ">
                <img src={logo} />
                <ul class="right hide-on-med-and-down">
                    <div class="nav-item">

                        <li style={{ alignSelf: "start" }}><a class="waves-effect orange btn">Thêm Nhóm <i class="material-icons left">add</i></a></li>

                        <li class='search-icon' >
                            <span class='fas fa-search'></span>
                            <input type="search" placeholder="Search" />
                        </li>
                        <li ><a class="waves-effect white  btn" style={{ color: 'black' }}>Xem Đánh Giá </a></li>
                        <li ><img style={{ alignSelf: "end" }} src={avatar}></img></li>
                    </div>
                </ul>
            </div>

        </nav >

    )
}
