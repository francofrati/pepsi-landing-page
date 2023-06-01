import { RiArrowDropUpLine, RiCloseFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'

import PepsiLogo from '../assets/pepsi_logo_navbar.png'
import { useEffect, useState } from 'react'


const Navbar = () => {

    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

    const toggleMenu = () => setIsMenuVisible(prevState => !prevState)

    useEffect(() => {
        if (isMenuVisible) {
            document.body.style.overflow = 'hidden'
            return
        }
        document.body.style.overflow = 'auto'
    }, [isMenuVisible])

    return (
        <nav
            className="w-full h-[100px] bg-[#0065C3] flex justify-between px-[2.5%] items-center fixed top-0 z-[999]"
        >
            <ul
                className='flex items-center'
            >
                <li>
                    <img
                        src={PepsiLogo}
                        className='w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] pepsi_logo'
                    />
                </li>
                <li
                    className='ml-[60px] hidden lg:block'
                >
                    <ul
                        className='flex items-center nono_sans font-bold text-white text-[14px]'
                    >
                        <li
                            className=' flex items-center gap-1 cursor-pointer'
                        >
                            VIEW PRODUCTS
                            <RiArrowDropUpLine
                                style={{
                                    fontWeigth: 700,
                                    transform: 'rotate(180deg)'
                                }}
                                size={30}
                            />
                        </li>
                        <li
                            className='ml-[40px] cursor-pointer'
                        >WHAT'S NEW</li>
                        <li
                            className='ml-[40px] cursor-pointer'
                        >NEWSLETTER</li>
                        <li
                            className='ml-[40px] cursor-pointer'
                        >CONTACT US</li>
                    </ul>
                </li>
            </ul>
            {
                !isMenuVisible
                    ? <span
                        className='lg:hidden flex items-center gap-1 cursor-pointer nono_sans font-bold text-white text-[16px]'
                    >
                        VIEW PRODUCTS
                        <RiArrowDropUpLine
                            style={{
                                fontWeigth: 700,
                                transform: 'rotate(180deg)'
                            }}
                            size={30}
                        />
                    </span>
                    : <></>
            }
            <button
                type='button'
                className='hidden overflow-hidden buy_pepsi_products bg-transparent border-[2px] border-white cursor-pointer rounded-full h-[30px] w-[200px] py-[.4em] px-[1.85em] noto_sans text-[14px] font-bold text-white lg:flex justify-center items-center whitespace-nowrap'
            >
                {
                    [
                        'B', 'U', 'Y', ' ', 'P', 'E', 'P', 'S', 'I', ' ', 'P', 'R', 'O', 'D', 'U', 'C', 'T', 'S'
                    ].map((l, ix) => l !== ' ' ? <span style={{ animationDelay: (.01 * ix) + 's' }}>{l}</span> : <span>&nbsp;</span>)

                }
            </button>
            <span
                className='lg:hidden cursor-pointer'
                onClick={toggleMenu}
            >
                {
                    isMenuVisible
                        ? <RiCloseFill
                            size={45}
                            color='white'
                        />
                        : <GiHamburgerMenu
                            size={35}
                            color='white'
                        />
                }
            </span>
            {
                isMenuVisible
                    ? <div
                        className='w-full h-[calc(100vh-100px)] bg-[#0065C3] fixed top-[100px] left-0 lg:hidden flex justify-center items-center text-center z-[99]'
                    >
                        <ul
                            className='text-[24px] nono_sans font-bold text-white flex flex-col gap-6 mt-[-60px]'
                        >
                            <span
                                className='h-[35px] overflow-hidden'
                            >
                                <li className='responsive_menu_item'>WHAT'S NEW</li>
                            </span>
                            <span
                                className='h-[35px] overflow-hidden'
                            ><li className='responsive_menu_item'>NEWSLETTER</li></span>
                            <span
                                className='h-[35px] overflow-hidden'
                            >
                                <li className='responsive_menu_item'>CONTACT US</li>
                            </span>
                            <span
                                className='h-[35px] overflow-hidden'
                            >
                                <li className='responsive_menu_item'>BUY PEPSI PRODUCTS</li>
                            </span>
                        </ul>
                    </div>
                    : <></>
            }
        </nav>
    )
}

export default Navbar