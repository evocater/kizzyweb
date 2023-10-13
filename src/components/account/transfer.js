import { AnimatePresence, motion } from "framer-motion";

function Transfer({ onClose }) {

    // Function to handle closing the purchase widget
    const handleClose = () => {
        console.log("Inside handleClose"); // Logging for clarity
        if (onClose) {
            onClose();
        }
    };    

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
            {/* Gray overlay */}
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-50" onClick={handleClose}></div>
            <AnimatePresence>


           
            {/* Purchase widget */}
            <motion.div 
             initial={{y:300}}
             animate={{y:0}}
             exit={{y:300}}
             transition={{duration: 0.3}}
            
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg p-6 z-50 flex flex-col justify-between">
                
                {/* Payment options */}
                <div className="flex flex-col space-y-3">

                    <button 
                        style={{ fontFamily: 'G8321-ExtraBold', fontSize: '16px', opacity: 0.25 }}
                        className="w-full h-12 rounded-md flex items-center justify-center bg-[#6865FD] text-white">
                        TRANSFER KIZZY COINS
                    </button>

                    <div style={{ fontFamily: 'G8321-Regular', fontSize: '14px' }} className="text-center text-gray-500 opacity-60">coming soon</div>
                    <div className="h-4"></div>
                </div>
            </motion.div>
            </AnimatePresence>
        </div> 
    );
}

export default Transfer;