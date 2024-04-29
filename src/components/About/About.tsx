import { CheckmarkCircleOutline } from 'react-ionicons'
import mask from '~/assets/images/mask.png';

const About = () => {
    return (
        <>
            <div className='w-full md:px-[200px] px-8 flex md:flex-row flex-col items-center justify-center py-10 md:gap-0 gap-16'>
                <div className='md:w-[700px] md:h-[700px] w-[350px] h-[350px] bg-no-repeat bg-cover relative plane-mask'
                    style={{ backgroundImage: `url(${mask})` }}>
                </div>
                <div className='flex flex-col md:w-[48%] w-full md:px-0 px-8'>
                    <span className='text-[15px] text-blue-600 font-semibold'>ABOUT US</span>
                    <span className='text-[30px] font-medium text-gray-700'>We Are Here To Bring You All The <br /> Comfort And Pleasure</span>
                    <p className='max-w-[650px] text-gray-600 leading-7 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto pariatur beatae itaque quas quasi hic, esse id excepturi voluptate. Eum voluptas eos deserunt consequuntur sed doloribus placeat porro a.</p>
                    <div className='flex flex-col gap-3 mt-5'>
                        <div className='flex items-center gap-3'>
                            <CheckmarkCircleOutline color="#60a5fa" />
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <CheckmarkCircleOutline color="#60a5fa" />
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <CheckmarkCircleOutline color="#60a5fa" />
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                        <button className='bg-blue-400 px-6 py-3 text-white font-semibold rounded-full w-[200px] mt-12 shadow-md hover:bg-gray-400 hover:text-black'>
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About