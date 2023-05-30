import {RiArrowDropUpLine} from 'react-icons/ri'

import PepsiLogo from '../assets/pepsi_logo_navbar.png'


const Navbar = () => {
    return (
        <nav
            className="w-full h-[5.625rem] bg-[#0065C3] flex justify-between px-[50px] items-center"
        >
            <ul
                className='flex items-center'
            >
                <li>
                    <img
                        src={PepsiLogo}
                        className='pepsi_logo'
                    />
                </li>
                <li
                    className='ml-[2.75rem]'
                >
                    <ul
                        className='flex items-center nono_sans font-bold text-white text-[14px]'
                    >
                        <li
                            className='ml-[2.75rem] flex items-center gap-1'
                        >
                            VIEW PRODUCTS
                            <RiArrowDropUpLine 
                            style={{
                                fontWeigth:700,
                                transform:'rotate(180deg)'
                            }}
                                size={30}
                            />
                        </li>
                        <li
                            className='ml-[2.75rem]'
                        >WHAT'S NEW</li>
                        <li
                            className='ml-[2.75rem]'
                        >NEWSLETTER</li>
                        <li
                            className='ml-[2.75rem]'
                        >CONTACT US</li>
                    </ul>
                </li>
            </ul>
            <button
                type='button'
                className='buy_pepsi_products bg-transparent border-[2px] border-white cursor-pointer rounded-full h-[30px] w-[200px] py-[.4em] px-[1.85em] noto_sans text-[14px] font-bold text-white flex justify-center items-center whitespace-nowrap'
            >
                BUY PEPSI PRODUCTS
            </button>

        </nav>
    )
}

export default Navbar