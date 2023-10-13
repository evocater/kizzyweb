import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React,{useEffect} from 'react';

export default function Browse() {
  
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });
  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
        localStorage.clear();
        signOut({ callbackUrl: "/signin" });
      }
}, [session])

  return (
      <div>



        {/* Page title */}
        


        {/* Match Container*/}
        <div className="border border-gray-125 p-4 m-4 rounded-md mt-16">

             {/* Platform Picture and Type with Reset Timer */}
             <div className="flex items-center justify-between">
                
                {/* Container for Platform Icon on the left and its associated text */}
                <div className="flex items-center">
                    {/* Platform Icon */}
                    <div className="mr-4">
                      <img src="/images/match-pfp-test-1.png" alt="Platform Icon" width={40} height={40} />
                    </div>
                    
                    {/* Type and Reset Timer */}
                    <div>
                      <div style={{ fontFamily: 'G8321-SemiBold', fontSize: '14px' }} className="text-black font-medium">NEXT POST <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }} className="text-[#6865FD]">24HR</span> VIEWS</div>
                      <div style={{ fontFamily: 'G8321-Light', fontSize: '12px' }} className="text-gray-500 text-sm">Last reset: 22:43:21</div>
                    </div>
                </div>

                {/* Live Icon on the right */}
                <div>
                  <img src="/images/live-icon.png" alt="Live Icon" width={40} height={40} />
                </div>
              
            </div>

            {/* Gray Background Box with Image and Stacked Text */}
            <div className="bg-[#F7F7F7] p-3 mt-3 rounded-md flex-col items-center">

              {/* Title container*/}
              <div className="flex items-center">
               
                {/* Image */}
                <div className="mr-4">
                  <img src="/images/match-pfp-test-1.png" alt="Image Description" width={40} height={40} />
                </div>
                  
                {/* Stacked Text */}
                <div>
                  <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px' }} className="text-black">@elonmusk</div>
                  <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px' }} className="text-[#6865FD] inline-block">50,000,000</div>
                  <span style={{ fontFamily: 'G8321-Regular', fontSize: '12px' }} className="text-[#9E9E9E]"> views</span>
                </div>
              
              </div> 

              {/* Implied probability chart */}
                <div className="mt-4">
                
                <div style={{ fontFamily: 'G8321-SemiBold', fontSize: '12px' }} className="text-[#9E9E9E] mb-2">Implied probability</div>
              
                {/* Bar Container */}
                <div className="bg-white rounded-md h-8 relative px-2 flex items-center">
                    {/* Under Bar */}
                    <div className="h-6 bg-[#6590FD] rounded-md ml-0 flex-shrink-0" style={{ width: 'calc(44.1% - 2px)' }}></div>
                      
                    {/* Spacer for the Bars */}
                    <div className="flex-grow"></div>
                      
                    {/* Over Bar */}
                    <div className="h-6 bg-[#FF6E1B] rounded-md mr-0 flex-shrink-0" style={{ width: 'calc(55.9% - 2px)' }}></div>
                </div>
                
                {/* Labels */}
                <div className="flex justify-between mt-2">
                    
                  <span>
                      <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '12px' }} className="text-[#9E9E9E]">Under: </span>
                      <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '12px' }} className="text-[#6590FD]">44.1%</span>
                  </span>
                  
                  <span>
                      <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '12px' }} className="text-[#9E9E9E]">Over: </span>
                      <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '12px' }} className="text-[#FF6E1B]">55.9%</span>
                  </span>
                
                </div>

                </div>
            
            </div>

                {/* Match size */}
                <div className="flex justify-between items-center mt-3">
                  <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '12px' }} className="text-black">
                    Match size
                  </span>

                  {/* Kizzy coin image and amount */}
                    <div className="flex items-center">
                        <img src="/images/kizzy-coin.png" alt="Kizzy Coin" className="mt-2" width={20} height={20} />
                        <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '20px' }} className="ml-2 text-[#6865FD]">
                            25,320
                        </span>
                    </div>
                
                </div>

                {/* Thin gray line */}
                <div className="bg-[#F7F7F7] h-0.5 my-3"></div>

                {/* Buttons */}
                <div className="flex items-center justify-between mt-3">
    
                    <div>
                        {/* "Est. payout" text */}
                        <div style={{ fontFamily: 'G8321-SemiBold', fontSize: '12px' }} className="text-black">
                            Potential payout
                        </div>
                        
                        {/* Timer and icon */}
                        <div className="flex items-center mt-1">
                            {/* Timer Icon */}
                            <img src="/images/timer-icon.png" alt="Timer Icon" width={20} height={20} />
                            {/* Timer Text */}
                            <span style={{ fontFamily: 'G8321-Regular', fontSize: '12px' }} className="ml-2">
                                23:52:52
                            </span>
                        </div>
                    </div>

                    {/* Kizzy coin and amount */}
                    <div className="flex items-center">
                        <img src="/images/kizzy-coin.png" alt="Kizzy Coin" className="mt-2" width={20} height={20} />
                        <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '20px' }} className="ml-2 text-[#FF6E1B]">
                            4,000
                        </span>
                    </div>

                </div>
   
            
          
        </div>

         

      </div>  
    );
}