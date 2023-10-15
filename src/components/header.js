
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Header(){
    const router = useRouter()
    const [header, setHeader] = useState('browse')
    const handleSignOut = () => signOut({ callbackUrl: '/signin' });

    useEffect(() => {
        if(router.pathname === '/'){
            setHeader('browse')
        }else if(router.pathname === '/live'){
            setHeader('live')
        }else if(router.pathname === '/account'){
            setHeader('account')
        }

    }, [router.pathname])

    return(

        <div className="fixed top-0 pt-[20px] w-screen bg-white upper flex items-center justify-between px-4 py-2">
        <div className="flex items-center justify-between w-full relative">
            <div className='relative'>

            <span className="font-g8-extrabold text-[24px] font-bold uppercase ml-4 mb-2 ">{header}</span>


            <div className='absolute bottom-1 -right-2'>
                <Image src="/images/line.png" width={48} height={10} alt="/" priority/>
            </div>
            </div>
            {router.pathname === '/account'
            &&
            <button 
                    className="bg-[#FF6E1B] text-white rounded-md font-g8-extrabold text-[14px] w-[80px] h-[36px]"
                    onClick={handleSignOut}>Logout
            </button>
            
            
            }
            
        
        </div>
    </div>


    )
}