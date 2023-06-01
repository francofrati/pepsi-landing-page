
const Section2 = () => {

    const titleSVGUrl = "https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/headline.svg"
    const subtitleSVGUrl = "https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/try-it-to-believe-it.svg"
    const canBadgeSVGUrl = "https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/new-improved-taste.svg"

    return (
        <section
            id="section2"
            className="bg-black w-full max-h-[1024px] lg:h-[668px] flex flex-col items-center lg:flex-row"
        >
            <div
                className="flex flex-col items-center"
            >
                <img
                    src={titleSVGUrl}
                    className="max-w-[485px] w-[79.43vw] mt-[9vw] md:w-[412.5px] md:mt-[39px]"
                />
                <img
                    src={subtitleSVGUrl}
                    className="max-w-[412px] w-[57vw] mt-[3.7vw] md:w-[297.3px] md:mt-[18.2px]"
                />
            </div>
            <div
                className="pepsi_can"
            >

            </div>
        </section>
    )
}

export default Section2