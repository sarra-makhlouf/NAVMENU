import React from 'react';

const menu = [
    {
        title: 'Home',
        link: '#',
        submenu: []
    },
    {
        title: 'Services',
        link: '#',
        submenu: [
            {
                title: 'For entrepeneurs',
                link: '#'
            },
            {
                title: 'For students',
                link: '#'
            },
            {
                title: 'For hobbyists',
                link: '#'
            }
        ]
    },
    {
        title: 'Contact',
        link: '#',
        submenu: []
    }
]

const SubMenu = (props) =>
    props.finalSub.map((sub, i) =>
        <li key={i}><a href={sub.link}>{sub.title}</a></li>
    )

const Menu = (props) => 
    props.finalMenu.map((item, i) =>
    <li className='option' key={i}>
        <a href={item.link}>{item.title}</a>
        <ul className="sub-menu" style={(item.submenu.length)?{}:{display:'none'}}>
            <SubMenu finalSub = {item.submenu} />
        </ul>
    </li>
    )

const MainMenu = () =>
<ul className='menu'>
    <Menu finalMenu = {menu} />
</ul>

export default MainMenu;