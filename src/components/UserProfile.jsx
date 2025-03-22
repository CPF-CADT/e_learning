import { useState } from 'react';

export default function UserProfile({ UserName, ProfilePath, positionTop }) {
    const [toggle, setToggle] = useState(false);

    // Toggle dropdown visibility
    function dropDown() {
        setToggle((prevState) => !prevState);
    }

    return (
        <div className="usrProfileSide relative">
            <span onClick={dropDown} className='text-black'>
                {UserName} 
                <i className={`pi pi-${toggle ? 'chevron-up' : 'chevron-down'} ml-3`}></i>
            </span>

            <img
                className="user-profile"
                src={ProfilePath}
                alt="user profile"
                style={{ width: '64px', height: '64px', borderRadius: '50%' }}
            />
            <div
                className="profile-right-side absolute"
                style={{
                    top: positionTop,
                    left: '0',
                    display: toggle ? 'block' : 'none',
                    zIndex: 10, // E
                }}
            >
                <ul>
                    <li>
                        <a href="#">Profile <i className="pi pi-user"></i> </a>
                    </li>
                    <li>
                        <a href="#">Course <i className="pi pi-th-large"></i> </a>
                    </li>
                    <li>
                        <a href="#">Message <i className="pi pi-envelope"></i> </a>
                    </li>
                    <li>
                        <a href="#">Setting <i className="pi pi-cog"></i> </a>
                    </li>
                    <li>
                        <a href="#">Order <i className="pi pi-cart-plus"></i> </a>
                    </li>
                    <li>
                        <a href="#">Help <i className="pi pi-info-circle"></i> </a>
                    </li>
                    <li>
                        <a href="#">Log out <i className="pi pi-sign-out"></i> </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
