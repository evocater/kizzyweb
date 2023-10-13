import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Qr({ onClose, wallet }) {
    useEffect(() => {
        console.log("Qr component has mounted!");
    }, []);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const [setIsCopied] = useState(false);

    function shortenWalletAddress(address, startLength = 8, endLength = 8) {
        const start = address.substring(0, startLength);
        const end = address.substring(address.length - endLength);
        return `${start}...${end}`;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(wallet)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);  // Resets after 2 seconds.
            })
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
            {/* Grayed-out overlay */}
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50" onClick={handleClose}></div>
            <AnimatePresence>



       
            {/* Qr widget */}
            <motion.div 
             initial={{y:300}}
             animate={{y:0}}
             exit={{y:300}}
             transition={{duration: 0.4}}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 z-60 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>

            <div className="mt-4 text-center w-7/10 mx-auto">
                <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '20px' }}>
                    Send <span className="text-[#6865FD]">USDC</span> here to
                </div>
                <div className="flex items-center justify-center mt-2" style={{ fontFamily: 'G8321-ExtraBold', fontSize: '20px' }}>
                    <span className="mr-2">get</span>
                    <span className="text-[#6865FD] mr-1">kizzy coins</span> 
                    <Image src="/images/kizzy-coin-noshadow.png" alt="Kizzy Coin" width={24} height={24} className="mt-1 mx-1" />
                </div>
            </div>



            <div className="mt-6 flex flex-col w-full items-start">
                <span style={{ fontFamily: 'G8321-Regular', fontSize: '14px' }} className="text-[#9E9E9E] mb-2">Select network</span>
                <div style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px' }} className="p-3 bg-[#F7F7F7] rounded-md w-full">
                    Solana
                </div>
            </div>


                <div className="mt-4">
                    <Image src="/images/qr-placeholder.png" alt="QR Placeholder" width={200} height={200} />
                </div>

                <div className="mt-6 flex flex-col w-full items-start">
                <span style={{ fontFamily: 'G8321-Regular', fontSize: '14px' }} className="text-[#9E9E9E]">USDC address (Solana)</span>
                <div 
                onClick={handleCopy} 
                style={{ fontFamily: 'G8321-Bold', fontSize: '10px', cursor: 'pointer' }} 
                className="mb-4 flex justify-start gap-3 items-center">
                   <span>{shortenWalletAddress(wallet)}</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill='#6865FD'
                >
                <path d="M9.16675 16.2498H13.9167C13.6703 16.8657 13.2447 17.3935 12.695 17.765C12.1453 18.1364 11.4968 18.3343 10.8334 18.3331H5.00007C4.5623 18.3333 4.12879 18.2471 3.72432 18.0797C3.31984 17.9122 2.95233 17.6667 2.64278 17.3571C2.33323 17.0476 2.0877 16.68 1.92023 16.2756C1.75276 15.8711 1.66663 15.4376 1.66675 14.9998V8.33314C1.66773 7.52142 1.96437 6.73785 2.50117 6.12896C3.03797 5.52008 3.77819 5.12758 4.58339 5.02486V11.6665C4.58339 14.1915 6.64171 16.2498 9.16675 16.2498ZM16.2501 5.20814H18.0167C17.9655 5.13304 17.9069 5.06325 17.8417 4.99982L15.0001 2.15803C14.9387 2.09315 14.8686 2.03714 14.7917 1.99162V3.74982C14.7936 4.13603 14.9478 4.50589 15.2209 4.77898C15.494 5.05207 15.8639 5.20631 16.2501 5.20814ZM16.2501 6.45814C15.5322 6.45676 14.8441 6.17098 14.3365 5.66337C13.8289 5.15576 13.5431 4.46769 13.5417 3.74982V1.6665H9.16675C8.72897 1.66638 8.29547 1.75252 7.89099 1.91999C7.48652 2.08746 7.119 2.33298 6.80945 2.64253C6.49989 2.95209 6.25436 3.3196 6.08689 3.72407C5.91941 4.12854 5.83327 4.56205 5.83339 4.99982V11.6665C5.83328 12.1043 5.91942 12.5378 6.0869 12.9423C6.25437 13.3467 6.4999 13.7142 6.80946 14.0238C7.11901 14.3333 7.48652 14.5789 7.891 14.7463C8.29547 14.9138 8.72898 14.9999 9.16675 14.9998H15.0001C15.4378 14.9999 15.8713 14.9138 16.2758 14.7463C16.6803 14.5789 17.0478 14.3333 17.3573 14.0238C17.6669 13.7142 17.9124 13.3467 18.0799 12.9422C18.2474 12.5378 18.3335 12.1043 18.3334 11.6665V6.45814H16.2501Z" />
                </svg>
                </div>
            </div>

            <div style={{ fontFamily: 'G8321-SemiBold', fontSize: '12px', width: '70%', margin: '0 auto' }} className="text-[#9E9E9E] text-center"> 
                This is your USDC bridge address, only send USDC here!
            </div>

            </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Qr;
