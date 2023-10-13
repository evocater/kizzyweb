import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function BadBrowser() {

    useEffect(() => {
        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", "#7752FE");

            // Cleanup function to revert the theme color when the component unmounts
            return () => {
                metaThemeColor.setAttribute("content", "#FFFFFF");
            };
        }
    }, []);
    
    return (
        <div className="fixed items-center w-full h-full bg-gradient-to-b from-[#473198] to-[#304F97] bg-cover bg-fixed">

            {/* Background Logo */}
            <div className="absolute top-[8%] right-0 w-[60vw] h-[60vw] overflow-hidden">
                <Image src="/images/auth-background-logo.png" alt="Background Logo" width={268} height={268} layout="responsive" />
            </div>


            <div className="flex flex-col items-center justify-center w-[95vw] bg-white p-10 rounded-[25px] shadow-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/images/wrong-browser.png" alt="Browse" width={88} height={88} />
                    <h2 className="font-bold mb-2 mt-6" style={{fontFamily: 'G8321-Bold', fontSize: '20px'}}>Wrong browser detected</h2>
                    <p style={{fontFamily: 'G8321-Regular', fontSize: '14px'}} className="text-[#9E9E9E] mt-4">
                        To install the app, you need to add kizzy to your home screen. 
                        Please open kizzy.io in Safari.
                    </p>
            </div>

            {/* Buttons */}
            <div
                style={{ borderWidth: '1.2px', borderColor: '#435698', fontFamily: 'G8321-Regular', fontSize: '14px', background: 'rgba(255, 255, 255, 0.1)' }} 
                className="absolute bottom-11 mx-8 max-w-[calc(100%-4rem)] w-full h-12 rounded-md flex items-center justify-center text-[#999999]">
                <Image src="/images/auth-button-google-gray.png" alt="Google Button" width={24} height={24} />
                <span className="ml-2">Continue with Google</span>
            </div>
        </div>
    );
}
