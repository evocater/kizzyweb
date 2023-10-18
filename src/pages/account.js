import Image from 'next/image';
import Purchase from '@/components/account/purchase';
import Transfer from '@/components/account/transfer';
import Detail from '@/components/account/detail';
import Qr from '@/components/account/qr';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/userContext';
import { useSession } from 'next-auth/react';
import React, { useRef } from 'react'; //NEW
import Lottie from 'react-lottie'; //NEW
import animationData from '../../public/images/loading.json'; //NEW 


export default function Account() {
    console.log("Account component is rendering!");
    
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
          router.push("/signin");
        },
      });
  
    // ------------------- STATES -------------------
    // State for showing the Purchase modal
    const [showPurchase, setShowPurchase] = useState(false);
    // State for showing the QR modal
    const [showQr, setShowQr] = useState(false);
    // State for showing the Detail modal
    const [showDetail, setShowDetail] = useState(false);
    const [user, setUser] = useState({
        avatar: "/images/account-pfp-placeholder.png",
        name: "",
        balance: 0
    })
    const [transaction, setTransaction] = useState([])
    // State for showing Transfer modal
    const [showTransfer, setShowTransfer] = useState(false);
    
    function getDate(dates){
        const date = new Date(dates * 1000)
        const newDate = date.toLocaleString()
        
        return newDate
      }
    // ------------------- HANDLERS -------------------
    // Handlers for Purchase modal
    const handleShowPurchase = () => setShowPurchase(true);
    const handleClosePurchase = () => setShowPurchase(false);

    // Handlers for Detail modal
    const handleShowDetail = () => setShowDetail(true);
    const handleCloseDetail = () => setShowDetail(false);

    // Handlers for Transfer modal
    const handleShowTransfer = () => setShowTransfer(true);
    const handleCloseTransfer = () => setShowTransfer(false);

    // Handle user signing out
   
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
              wallet: data.wallet.walletAddress
            })
  

        }catch(err){
            console.log(err)
        }

    }

    async function getTransaction(token) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/transaction`, {
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
            setTransaction(data)
  

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
                await getTransaction(token);
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


    // ANIMATION
    const [isRefreshing, setIsRefreshing] = useState(false);
    const startY = useRef(0);
  
    const handleTouchStart = (e) => {
      if (window.scrollY === 0) startY.current = e.touches[0].pageY;
    };
  
    const handleTouchMove = (e) => {
      const currentY = e.touches[0].pageY;
      if (currentY > startY.current + 50) {
        setIsRefreshing(true);
      }
    };
  
    const handleTouchEnd = () => {
      if (isRefreshing) {
        setTimeout(() => {
          setIsRefreshing(false);
        }, 2000);  // 2 seconds delay for demo purposes
      }
    };
  
    useEffect(() => {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    }, [isRefreshing]);
  
  const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Lottie options={defaultOptions} height={200} width={200} isClickToPauseDisabled={true} />
    );
  };
  
    // ------------------- COMPONENT RENDER -------------------
    return (

        <>
            {showPurchase && <Purchase onClose={handleClosePurchase} onShowQr={() => setShowQr(true)}  />}
            {showQr && <Qr onClose={() => setShowQr(false)} wallet={user.wallet || null} />}
            {showDetail && <Detail onClose={handleCloseDetail} />}
            {showTransfer && <Transfer onClose={handleCloseTransfer} />}
        
            {/* Loading Animation */}
           
            {isRefreshing && <LottieAnimation />}




            {/* Account Info Container */}
            <div className="p-4 rounded-md mt-16 max-h-[30vh]">
                <div className="flex items-center">
                    {/* Account Image */}
                    <div className="mr-4">
                  
                        <img src={user ? user.avatar : "/images/account-pfp-placeholder.png"} alt="Account Image" width={74} height={74} unoptimized className='rounded-full'/>
                    </div>

                    {/* Name and Coin Info */}
                    <div>
                        <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px' }} className="text-black">{user ? user.name : 'Kizzy'}</div>
                        <div className="flex items-center mt-">
                            
                            
                            <Image src="/images/kizzy-coin.png"  alt="Kizzy Coin" className="mt-2" width={20} height={20} unoptimized />
                            <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }} className="ml-2 text-[#6865FD]">{user ? user.balance : 0}</span>
                        </div>
                    </div>
                </div>

                {/* Purchase and Transfer Buttons */}
                <div className="flex items-center justify-between mt-6">
                    <button 
                        style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px', width: '48%', height: '44px' }}
                        className="bg-[#6590FD] text-white rounded-md flex items-center justify-center"
                        onClick={handleShowPurchase}>PURCHASE
                    </button>
                    
                    <button 
                        style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px', width: '48%', height: '44px' }}
                        className="bg-[#6865FD] text-white rounded-md flex items-center justify-center"
                        onClick={handleShowTransfer}>TRANSFER
                    </button>
                </div>
            </div>

            <div className='max-h-[400px] overflow-y-auto'>

            {transaction && transaction.length > 0 ? (
            <>
              {transaction.map((item, i) => {
                return(
                    <div 
                    key={i}
                    className="m-4 rounded-md flex justify-between items-center cursor-pointer" /* onClick={handleShowDetail} */>
                    <div>
                        <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px' }} className="text-[#1E1E1E]">{item.type}</div>
                        <div style={{ fontFamily: 'G8321-Regular', fontSize: '12px' }} className="text-gray-500">{getDate(item.timestamp)}</div>
                    </div>
                    
                    <div className="flex items-center">
                        <Image src="/images/kizzy-coin.png" alt="Kizzy Coin" className="mt-2" width={20} height={20} />
                        <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }} className="ml-2 text-[#6865FD]">{item.type == 'Deposit' ? "+" : "-"} {item.total}</span>
                    </div>
                </div>

                )
                
              })}
              </>

            )
              :(

                <div className='flex flex-col justify-center items-center h-[300px]'>

                <Image src="/images/nodata.png" width={40}  height={40} alt="/" unoptimized/> 

                <p className='font-g8-light text-[12px] mt-3'>There are no transactions found!</p>

                </div>





              )
        
        
        }


          </div>


            {/* Transaction Log Placeholder */}
           



            {/* Separator */}
            <div className="bg-gray-100 h-0.5 my-3 mx-4"></div>


        
    </>
    );
}
