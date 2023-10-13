function Confirmation({ onCancel }) {

    const handleCancelClick = () => {
        console.log("CANCEL button clicked.");
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom, #450FFF, #8384FF)', minHeight: '100vh'}} className="flex items-center justify-between">
            
            <div className="fixed bottom-16 w-full px-5 pb-4">  
                <div style={{backgroundColor: 'rgba(255, 255, 255, 0.10)', height: '80vh' }} className="border border-white rounded-md p-4"> 
                
                <div className="flex items-center mb-4">

                    {/* Profile Image */}
                    <img src="/images/match-pfp-test-1.png" alt="Profile Picture" width={40} height={40} className="mr-3" /> {/* adjust width and height as needed */}
                    
                    {/* Username */}
                    <div style={{ fontFamily: 'G8321-SemiBold', fontSize: '16px' }} className="text-white">
                        @elonmusk
                    </div>
                
                </div>

                    {/* White Line */}
                    <div style={{borderColor: 'rgba(255, 255, 255, 0.3)'}} className="border-b border-white"></div> {/* This creates a bottom border line with some margin on the left and right */}
                
                    {/* New Text */}
                    <div className="mt-8 text-white text-center mb-20" style={{ fontFamily: 'G8321-Regular', fontSize: '20px' }}>
                        NEXT POST <span style={{ fontFamily: 'G8321-ExtraBold' }}>24HR VIEWS</span>
                        <div>
                            OVER <span style={{ fontFamily: 'G8321-ExtraBold' }}>50,000,000</span>
                        </div>
                    </div>

                    {/* Centered Div */}
                    <div className="flex flex-col items-center justify-center mb-20">
                        <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '44px', color: 'white' }}>
                            124
                        </div>
                        <img src="/images/kizzy-coin-noshadow.png" alt="Kizzy Coin" width={75} className="mt-2"/>
                    </div>

                </div>
            
            </div>

            
            {/* Button container */}
            <div className="fixed bottom-4 flex items-center justify-between w-full px-4"> {/* Added w-full and px-4 here */}
                {/* Under button */}
                <button 
                    style={{ 
                        fontFamily: 'G8321-ExtraBold', 
                        fontSize: '16px', 
                        width: '48%', 
                        height: '48px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'  // This sets the 20% transparency
                    }}
                    onClick={handleCancelClick}             
                    className="text-white rounded-md flex items-center justify-center">
                    CANCEL
                </button>

                {/* Over button */}
                <button 
                style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px', width: '48%', height: '48px' }}
                onClick={handleCancelClick}
                className="bg-white text-[#6865FD] rounded-md flex items-center justify-center">
                CONFIRM
                </button>
            </div>
        </div>
    )
}

export default Confirmation;
