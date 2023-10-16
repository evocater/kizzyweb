import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LottieAnimation from '@/components/lottie';

export default function Intro() {
    const [section, setSection] = useState(1);
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    
    const handleLeftClick = () => {
        if (section > 1) {
            setSection((prevSection) => prevSection - 1);
        }
    };
    
    const handleRightClick = () => {
        if (section < 3) {
            setSection((prevSection) => prevSection + 1);
        }
    };

    return (
        <div className={`min-h-screen min-w-full bg-white flex flex-col ${loading ? "justify-center" : "justify-between"} items-center p-4`}>
           {
            loading ?
            <LottieAnimation />
            :

            <>
            
            <div className="absolute top-0 bottom-0 left-0 w-1/2 z-10" onClick={handleLeftClick}></div>
            {section !== 3 && (
                <div className="absolute top-0 bottom-0 right-0 w-1/2 z-10" onClick={handleRightClick}></div>
            )}
    


            {section === 1 ? (
                <>
                    {/* Middle Content for Section 1 */}
                    <div className="fixed flex-1 flex flex-col items-center justify-center mt-[25vh] w-72">
                        <Image src="/images/intro-center-image.png" alt="Center Image for Section 1" width={278.5} height={334.2} />
                        <h1 style={{ fontFamily: 'G8321-ExtraBold', fontSize: '1.3rem' }} className="text-xl mt-12 text-center">PREDICT CONTENT PERFORMANCE</h1>
                        <p style={{ fontFamily: 'G8321-Regular', fontSize: '0.8rem' }} className="text-sm text-[#9E9E9E] mt-2 text-center px-4">Put your knowledge of social media influencers to the test</p>
                    </div>

                    {/* Bottom Image for Section 1 */}
                    <div className="fixed bottom-10 w-full">
                        <Image src="/images/intro-bottom-slider.png" alt="Bottom Slider for Section 1" width={375} height={30} layout="responsive" />
                    </div>
                </>
            ) : section === 2 ? (
                <>
                    {/* Middle Content for Section 2 */}
                    <div className="fixed flex-1 flex flex-col items-center justify-center mt-[25vh] w-72">
                        <Image src="/images/intro-center-image-2.png" alt="Center Image for Section 2" width={278.5} height={334.2} />
                        <h1 style={{ fontFamily: 'G8321-ExtraBold', fontSize: '1.3rem' }} className="text-xl mt-20 text-center">MAKE REAL MONEY</h1>
                        <p style={{ fontFamily: 'G8321-Regular', fontSize: '0.8rem' }} className="text-sm text-[#9E9E9E] mt-2 text-center px-4">Pick the correct outcome in a match to win</p>
                    </div>

                    {/* Bottom Image for Section 2 */}
                    <div className="fixed bottom-10 w-full">
                        <Image src="/images/intro-bottom-slider-2.png" alt="Bottom Slider for Section 2" width={375} height={30} layout="responsive" />
                    </div>
                </>
            ) : (
                <>
                    <div className="fixed px-6 flex flex-row items-center justify-between w-full mt-[2vh]">
                        <div className="flex flex-col w-1/2">
                            <h1 style={{ fontFamily: 'G8321-ExtraBold', fontSize: '1.5rem' }} className="text-black">HOW TO GET STARTED</h1>
                            <p style={{ fontFamily: 'G8321-Regular', fontSize: '0.875rem' }} className="text-[#9E9E9E] mt-2">Pick the correct outcome in a match to win</p>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <Image src="/images/intro-top-image-3.png" alt="Top Image for Section 3" width={170.44} height={171} />
                        </div>
                    </div>

                    {/* 3 Replicated Div Blocks */}
                    <div className="fixed px-6 flex items-start mb-10 mt-[30vh]">
                        <Image src="/images/intro-top-icon-3.png" alt="Icon for Section 3" width={32} height={32} />
                        <div className="ml-4">
                            <div className="flex items-center h-full mb-2">
                                <h2 style={{ fontFamily: 'G8321-Bold', fontSize: '0.875rem' }} className="text-black">Use kizzy coins</h2>
                            </div>
                            <p style={{ fontFamily: 'G8321-Regular', fontSize: '0.875rem' }} className="text-[#9E9E9E]">The Kizzy marketplace runs on kizzy coins, get some by purchasing with USDC.</p>
                        </div>
                    </div>
                    <div className="fixed px-6 flex items-start mb-10 mt-[47.5vh]">
                        <Image src="/images/intro-middle-icon-3.png" alt="Icon for Section 3" width={32} height={32} />
                        <div className="ml-4">
                            <div className="flex items-center h-full mb-2">
                                <h2 style={{ fontFamily: 'G8321-Bold', fontSize: '0.875rem' }} className="text-black">Predict content performance</h2>
                            </div>
                            <p style={{ fontFamily: 'G8321-Regular', fontSize: '0.875rem' }} className="text-[#9E9E9E]">Compete alongside or against other Kizzy users in content prediction matches.</p>
                        </div>
                    </div>
                    <div className="fixed px-6 flex items-start mb-20 mt-[65vh]">
                        <Image src="/images/intro-bottom-icon-3.png" alt="Icon for Section 3" width={32} height={32} />
                        <div className="ml-4">
                            <div className="flex items-center h-full mb-2">
                                <h2 style={{ fontFamily: 'G8321-Bold', fontSize: '0.875rem' }} className="text-black">Real-time match making</h2>
                            </div>
                            <p style={{ fontFamily: 'G8321-Regular', fontSize: '0.875rem' }} className="text-[#9E9E9E]">Matches are tracked in real time so keep post notifications on to stay updated!</p>
                        </div>
                    </div>

                {/* Fixed Position Button at the Bottom with added px-4 for padding */}
                <button 
                    style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px' }} 
                    onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            router.push('/')  
                        },3000)
                        
                    }
                    
                    }
                    className="fixed bottom-11 mx-4 max-w-[calc(100%-4rem)] w-full h-12 rounded-md flex items-center justify-center bg-[#6865FD] text-white">
                    Continue
                </button>

            </>    
        )}
            
            
            </>
           }
           
           
           
         
    </div>
  );
}
