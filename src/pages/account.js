import Image from 'next/image';
import Purchase from '@/components/account/purchase';
import Transfer from '@/components/account/transfer';
import Detail from '@/components/account/detail';
import Qr from '@/components/account/qr';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/userContext';
import { useSession } from 'next-auth/react';


export default function Account() {
    console.log("Account component is rendering!");
    
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
          router.push("/signin");
        },
      });
    const { user } = useUser();
    // ------------------- STATES -------------------
    // State for showing the Purchase modal
    const [showPurchase, setShowPurchase] = useState(false);
    // State for showing the QR modal
    const [showQr, setShowQr] = useState(false);
    // State for showing the Detail modal
    const [showDetail, setShowDetail] = useState(false);
    // State for showing Transfer modal
    const [showTransfer, setShowTransfer] = useState(false);
    
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
   
    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            localStorage.clear();
            signOut({ callbackUrl: "/signin" });
          }
    }, [session])

    // ------------------- COMPONENT RENDER -------------------
    return (
        <>
            {showPurchase && <Purchase onClose={handleClosePurchase} onShowQr={() => setShowQr(true)}  />}
            {showQr && <Qr onClose={() => setShowQr(false)} wallet={user.wallet || null} />}
            {showDetail && <Detail onClose={handleCloseDetail} />}
            {showTransfer && <Transfer onClose={handleCloseTransfer} />}
        
            {/* Page title and Logout Button */}
           





            {/* Account Info Container */}
            <div className="p-4 rounded-md mt-16">
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



            {/* Transaction Log Placeholder */}
            <div className="m-4 rounded-md flex justify-between items-center cursor-pointer" onClick={handleShowDetail}>
                <div>
                    <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px' }} className="text-[#1E1E1E]">Loss</div>
                    <div style={{ fontFamily: 'G8321-Regular', fontSize: '12px' }} className="text-gray-500">Sep 13, 2023</div>
                </div>
                
                <div className="flex items-center">
                    <Image src="/images/kizzy-coin.png" alt="Kizzy Coin" className="mt-2" width={20} height={20} />
                    <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }} className="ml-2 text-[#6865FD]">-13</span>
                </div>
            </div>



            {/* Separator */}
            <div className="bg-gray-100 h-0.5 my-3 mx-4"></div>


        
    </>
    );
}
