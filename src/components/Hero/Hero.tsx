import plane from '~/assets/images/plane.png';

const Hero = () => {
    return (
        <>
            <div className="hero z-[1] w-full h-[100vh] grid place-item-center bg-[#141b2b] relative">
                <div className="flex md:flex-row flex-col items-center w-full md:px-[200px] px-8 justify-between md:gap-0 gap-28">
                    <div className="flex flex-col gap-3 left-animation w-full">
                        <span className="text-blue-400 text-[28px] font-medium">
                            Welcom To Our Website
                        </span>
                        <span className="text-white font-medium md:text-[60px] text-[45px]">
                            Luxury Experience <br /> With Our Services
                        </span>
                        <span className="text-white leading-7 max-w-[500px] text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil cupiditate repellendus, excepturi culpa soluta non facere omnis eos, eaque suscipit. Nisi aliquid sit, porro ipsum dolor eaque ut placeat.
                        </span>
                        <div className="flex items-center gap-7 mt-5">
                            <button className="bg-blue-400 px-6 py-3 text-gray-900 font-semibold rounded-full hover:bg-gray-700 hover:text-white">Book Flight</button>
                            <button className="border-[2px] border-blue-400 px-6 py-3 text-white font-semibold rounded-full hover:bg-slate-300 hover:text-black">Contact Us</button>
                        </div>
                    </div>
                    <img src={plane}
                        alt=""
                        className="md:w-[53%] w-full right-animation" />
                </div>
            </div>
        </>
    )
}

export default Hero