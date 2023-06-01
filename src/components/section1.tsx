import pepsiBottles from '../assets/pepsi_bottles_section_1.png'


const Section1 = () => {

    const appleMusicPromoSVGUrl = "https://www.pepsi.com/en-us/uploads/images/apple-music/apple-music-lockup-small-mobile.svg"

    return (
        <section
            id="section1"
            className="relative h-[202.051vw] max-h-[960px] lg:h-[678px] flex flex-col items-center lg:flex-row lg:justify-center lg:gap-14 xl:gap-20 overflow-hidden lg:px-[60px]"
        >
            <div
                className="hidden w-[422px] h-full lg:flex justify-center relative "
            >
                <img
                    src={pepsiBottles}
                    className='absolute  bottom-[-75px] xl:left-[-100px] h-[90%] xl:h-[98%] w-full object-cover '
                />
            </div>
            <div
                className="max-w-[422px] w-[81.282vw] xl:max-w-[500px] flex flex-col items-center gap-10 justify-between py-10"
            >
                <img
                    src={appleMusicPromoSVGUrl}
                    className="w-full h-[56.410vw] max-h-[282px] xl:h-full xl:max-h-[468px]"
                />
                <button
                    type='button'
                    className='mx-auto overflow-hidden get_it_now_btn bg-transparent border-[2px] border-white cursor-pointer rounded-full h-[30px] py-[15px] px-[1.85em] noto_sans text-[16px] font-bold text-white flex justify-center items-center whitespace-nowrap'
                >
                    {
                        [
                            'G', 'E', 'T', ' ', 'I', 'T', ' ', 'N', 'O', 'W', '!'
                        ].map((l, ix) => l !== ' ' ? <span style={{ animationDelay: (.01 * ix) + 's' }}>{l}</span> : <span>&nbsp;</span>)

                    }
                </button>
                <p
                    className="w-full text-[.7rem] text-white font-medium text-center leading-[13.5px] max-w-[422px]"
                >
                    Ends 09/17/23. Age restrictions apply, US/DC/Guam/PR. Limit 1 per person. New & qualified returning subscribers only. $10.99/month after trial until cancelled. Rules & Terms at pressplayonsummer.com.
                </p>
            </div>
            <img
                src={pepsiBottles}
                className='absolute lg:left-0 lg:hidden bottom-[-75px] h-[102.590vw] max-h-[506px] w-full max-w-[768px] object-contain lg:w-[649px] lg:h-[534]'
            />
        </section>
    )
}

export default Section1