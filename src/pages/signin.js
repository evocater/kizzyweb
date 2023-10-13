import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

export default function Signin() {
    const { data: session, status } = useSession({}); 
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // Change the theme color when the component mounts
        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", "#7752FE"); 
        
        // Revert the theme color when the component unmounts
        return () => {
          metaThemeColor.setAttribute("content", "#FFFFFF");
        };
      }, []);

      useEffect(() => {
        if(status == 'authenticated'){
          router.push('/')
        }
      
       }, [status])

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#7752FE] to-[#498DFC] bg-cover bg-fixed ...">


            {/* Background Logo */}
            <div style={{position: 'fixed', top: '8%', right: 0, width: '60vw', height: '60vw', overflow: 'hidden'}}>
                <Image src="/images/auth-background-logo.png" alt="Background Logo" width={268} height={268} layout="responsive" />
            </div>

    


            {/* Center Logo */}
            <div className="fixed flex flex-col items-center justify-center w-full h-screen">
                <div className="w-1/3 mb-20">
                    <Image src="/images/auth-center-logo.png" alt="Center Logo" layout="responsive" width={130} height={130} />
                </div>
            </div>




            {/* Buttons */}
            <button 
                disabled={loading}
                onClick={() => {
                    setLoading(true)
                    signIn('google', {callbackUrl:"/intro"})
                    }
                }
                style={{ borderWidth: '1.2px', borderColor: '#8999FF', fontFamily: 'G8321-Regular', fontSize: '14px', background: 'rgba(255, 255, 255, 0.2)' }} 
                className="fixed bottom-11 mx-8 max-w-[calc(100%-4rem)] w-full h-12 rounded-md flex items-center justify-center text-white">
                {loading
                ?
                <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-200 animate-spin dark:white fill-blue-600"
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
                <>
                <Image src="/images/auth-button-google.png" alt="Google Button" width={24} height={24} />
                <span className="ml-2">Continue with Google</span>

                </>
                
                }
                
            </button>


            
        </div>
    );
}
