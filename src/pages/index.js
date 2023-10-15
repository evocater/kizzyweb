import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useUser } from '@/context/userContext';

export default function Browse() {
    const router = useRouter();
    const { user, setUser } = useUser();
    const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
        router.push("/signin");
      },
    });

    async function getToken(accessToken) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/login`, {
            method: "POST",
            body: JSON.stringify({ accessToken: accessToken }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          
          if (!res.ok) {
            throw new Error('Network response was not ok: ' + res.statusText);
          }
      
          const result = await res.json();
      
          if (result.token) {
            const expiry = (Date.now() + 3600 * 1000).toString();
            localStorage.setItem("token", result.token);
            localStorage.setItem("expiry", expiry);
            await getData(result.token);
          } else {
            console.error("Token not found in response:", result);
          }
        } catch (err) {
          console.error("An error occurred while fetching the token:", err);
        }
      }

      async function getData(token) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/my`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
            if (!res.ok) {
                throw new Error('Network response was not ok' + res.statusText);
            }
        
            // Parse JSON data
            const data = await res.json();
            console.log(data)
            setUser({
              name: data.name,
              email:data.email,
              balance: Number(data.kizz),
              avatar: data.avatar,
              wallet: data.wallet.walletAddress,
            })
  

        }catch(err){
            console.log(err)
        }

    }

    useEffect(() => {
       
        if (session?.token?.accessToken) {
          const token = localStorage.getItem("token");
          const expiry = Number(localStorage.getItem("expiry"));
          
          const isTokenValid = token && Date.now() < expiry;
      
          const handleDataAndToken = async () => {
            try {
                console.log(`checking`)
              if (isTokenValid) {
                await getData(token);
              } else {
                await getToken(session?.token?.accessToken);
              }
            } catch (error) {
              console.error("Error handling data and token: ", error);
            }
          };
      
          handleDataAndToken();
          
        }

        if (session?.token?.error == "RefreshAccessTokenError") {
          localStorage.clear();
          signOut({ callbackUrl: "/signin" });
        }
      
      }, [session]);
    

    return (
     
    
        <div> 
            {/* Page title */}
          


            {/* Match Container */}
            <div className="border border-gray-125 p-4 m-4 rounded-md mt-16">
                {/* Platform Details */}
            <div className="flex items-center">
                <div className="mr-4">
                    <img src="/images/match-pfp-test-1.png" alt="Platform Icon" width={40} height={40} />
                </div>
                <div>
                    <div className="font-g8-semibold text-[14px] text-black font-medium">NEXT POST <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }} className="text-[#6865FD]">24HR</span> VIEWS</div>
                    <div className="font-g8-light text-[12px] text-gray-500 text-sm">Last reset: 22:43:21</div>
                </div>
            </div>


            {/* Content Details */}
            <div className="bg-[#F7F7F7] p-3 mt-3 rounded-md flex-col items-center">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src="/images/match-pfp-test-1.png" alt="Image Description" width={40} height={40} />
                    </div>
                    <div>
                        <div className="font-g8-extrabold text-[16px] text-black">@elonmusk</div>
                        <div className="font-g8-extrabold text-[16px] text-[#6865FD] inline-block">50,000,000</div>
                        <span className="font-g8-regular text-[12px]text-[#9E9E9E]"> views</span>
                    </div>
                </div>

                    {/* Implied Probability Chart */}
                    <div className="mt-4">
                        <div className="font-g8-semibold text-[12px] text-[#9E9E9E] mb-2">Implied probability</div>
                        <div className="bg-white rounded-md h-8 relative px-2 flex items-center">
                            <div className="h-6 bg-[#6590FD] rounded-md ml-0 flex-shrink-0" style={{ width: 'calc(44.1% - 2px)' }}></div>
                            <div className="flex-grow"></div>
                            <div className="h-6 bg-[#FF6E1B] rounded-md mr-0 flex-shrink-0" style={{ width: 'calc(55.9% - 2px)' }}></div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span>
                                <span className="font-g8-semibold text-[12px] text-[#9E9E9E]" >Under: </span>
                                <span className="font-g8-extrabold text-[12px] text-[#6590FD]" >44.1%</span>
                            </span>
                            <span>
                                <span className="font-g8-semibold text-[12px] text-[#9E9E9E]">Over: </span>
                                <span className="font-g8-extrabold text-[12px] text-[#FF6E1B]">55.9%</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Match Size */}
                <div className="flex justify-between items-center mt-3">
                    <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '12px' }} className="text-black">Match size</span>
                    <div className="flex items-center">
                        <img src="/images/kizzy-coin.png" alt="Kizzy Coin" className="mt-2" width={20} height={20} />
                        <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '20px' }} className="ml-2 text-[#6865FD]">25,320</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="bg-[#F7F7F7] h-0.5 my-3"></div>
                
            {/* Buttons */}
            <div className="flex items-center justify-between">
                {/* Under button */}
                <button 
                    style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px', width: '48%', height: '44px' }}
                    className="bg-[#6590FD] text-white rounded-md flex items-center justify-center"
                    onClick={() => setShowConfirmation(true)}>UNDER
                </button>

                {/* Over button */}
                <button 
                    style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px', width: '48%', height: '44px' }}
                    className="bg-[#FF6E1B] text-white rounded-md flex items-center justify-center"                      
                    onClick={() => setShowConfirmation(true)}>OVER
                </button>
            </div> 
            </div>



            {/* Navbar */}
         
        </div>  
    )
}