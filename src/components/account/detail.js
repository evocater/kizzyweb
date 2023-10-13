import Image from 'next/image';

function Detail({ onClose }) {
    // Function to handle closing the transaction detail widget
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
            {/* Gray overlay */}
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40" onClick={handleClose}></div>

            {/* Transaction Detail widget */}
            <div className="fixed bottom-0 left-0 right-0 h-[70vh] bg-white rounded-t-lg p-4 z-50 flex flex-col justify-start">

                {/* Transaction details */}
                <div className="flex flex-col space-y-4 w-full">
                    <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '24px' }} className="text-center">Loss</span>
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        <Image src="/images/kizzy-coin.png" alt="Kizzy Coin" className='mt-2' width={20} height={20} />
                        <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '20px' }} className="text-[#6865FD]">-13</span>
                    </div>
                    <div className="border-b border-gray-100 py-1 pb-5">
                        <div className="flex justify-between">
                            <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '14px', color: '#9e9e9e' }}>Time</span>
                            <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }}>September 13, 2023</span>
                        </div>
                    </div>
                    <div className="border-b border-gray-100 py-1 pb-5">
                        <div className="flex justify-between">
                            <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '14px', color: '#9e9e9e' }}>Type</span>
                            <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }}>Loss</span>
                        </div>
                    </div>
                    <div className="border-b border-gray-100 py-1 pb-5">
                        <div className="flex justify-between">
                            <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '14px', color: '#9e9e9e' }}>Amount</span>
                            <div className="flex items-center space-x-2">
                                <Image src="/images/kizzy-coin-noshadow.png" className="mt-1" alt="Kizzy Coin" width={20} height={20} />
                                <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }} className="text-[#6865FD]">-13</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-100 py-1 pb-5">
                        <div className="flex justify-between">
                            <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '14px', color: '#9e9e9e' }}>Network</span>
                            <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }}>Solana</span>
                        </div>
                    </div>
                    <div className="border-b border-gray-100 py-1 pb-5">
                        <div className="flex justify-between">
                            <span style={{ fontFamily: 'G8321-SemiBold', fontSize: '14px', color: '#9e9e9e' }}>Signature</span>
                            <span style={{ fontFamily: 'G8321-ExtraBold', fontSize: '14px' }}>ABDCD...123A</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
