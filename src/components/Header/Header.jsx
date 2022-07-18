import React from 'react';

const Header = () => {
    return (
        <div className='bg-gradient-to-r  from-red-100'>
        <div className='container flex justify-between mx-auto '>
            <div className="text-2xl italic">SergeevnaNails.</div>
            <div>
                <ul className='flex px-5'>
                    <li className='mx-5 hover:bg-sky-700'><a className="" href="#">Главная</a></li>
                    <li className='mx-5'><a href="#">Обо мне</a></li>
                    <li className='mx-5'><a href="#">Работы</a></li>
                    <li className='mx-5'><a href="#">Прайс Лист</a></li>
                    <li className='mx-5'><a href="#">Связаться</a></li>
                </ul>
            </div>
        </div></div>
    );
};

export default Header;
