import React from 'react';

export default function Desktop() {
    return (
        <div className="flex h-screen items-center justify-center mx-auto max-w-screen-lg p-8">
            
            {/* Left content */}
            <div className="flex flex-col items-start justify-center max-w-[3000px] z-10 mb-10 pr-20">
                
                {/* Logo and Subtext */}
                <div>
                    {/* Replace 'path_to_logo' with the path to your logo */}
                    <img src="../images/left-browser-logo.png" alt="Kizzy Logo" className="w-64 lg:w-[215px] mb-4" />
                    <h1 style={{ fontFamily: 'G8321-SemiBold', fontSize: '24px' }} className="text-2xl font-bold mb-2 mt-4 lg:mt-8">
                        The 1st CONTENT PREDICTION MARKETPLACE
                    </h1>
                    <p style={{ fontFamily: 'G8321-Regular', fontSize: '14px' }} className="text-[#959595] mt-2 lg:mt-4">
                        To access Kizzy, open kizzy.io on Safari with an iOS mobile device or on Chrome with an Android mobile device to install the 
                        app!
                    </p>
                </div>

                {/* Colored Rectangle at the bottom */}
                <div className="fixed bottom-2 left-2 right-2 p-2 rounded-lg" style={{ backgroundColor: '#6E5BFD', height: '15vh' }}>
                    <img src="/images/bottom-browser-logo.png" alt="Kizzy Logo" style={{ height: '100%', marginLeft: '20px' }} />
                </div>

            </div>
        </div>
    );
}
