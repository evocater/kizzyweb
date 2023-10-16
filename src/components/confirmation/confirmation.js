import React, {useState} from 'react'
function Confirmation({ onCancel, user }) {

    const [number, setNumber] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleCancelClick = () => {
        console.log("CANCEL button clicked.");
        if (onCancel) {
            onCancel();
        }
    };

    const handleSubmit = async () =>{
        const token = localStorage.getItem("token");
        const expiry = localStorage.getItem("expiry");
        setLoading(true);
        if (token || Date.now() < expiry) {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_API}/api/v1/placebet`,
    
              {
                method: "POST",
                body: JSON.stringify({ number: number }),
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
    
            const data = await res.text();
            if (data.length) {
              const result = JSON.parse(data);
              setLoading(false);
            }
          } catch (error) {
            setLoading(false);
          }
        }
    }

    return (
        <div style={{ background: 'linear-gradient(to bottom, #450FFF, #8384FF)', minHeight: '100vh'}} className="flex items-center justify-between z-10 relative overflow-y-hidden">
            
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
                        <input className='bg-transparent max-w-full border-0 text-center' type="number" value={number} min={0} onChange={(e) => setNumber(e.target.value) } style={{ fontFamily: 'G8321-ExtraBold', fontSize: '44px', color: 'white' }} />
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
                disabled={loading || user.balance < number || number == 0}
                style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px', width: '48%', height: '48px' }}
                onClick={handleSubmit}
                className="bg-white text-[#6865FD] rounded-md flex items-center justify-center">
                {loading
                ?
                <svg
                aria-hidden="true"
                class="inline w-6 h-6 text-gray-200 animate-spin dark:white fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>

                :

                "CONFIRM"

                }
                
                
                </button>
            </div>
        </div>
    )
}

export default Confirmation;
