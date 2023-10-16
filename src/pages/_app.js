import Head from 'next/head';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import UAParser from 'ua-parser-js';
import Desktop from '@/components/blockers/desktop';
import BadBrowser from '@/components/blockers/badbrowser';
import Instruction from '@/components/blockers/instruction';
import SignIn from '@/pages/signin';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import { UserProvider } from '@/context/userContext';

function MyApp({ Component, pageProps, deviceType, browserName, isStandalone, osName, isPWA }) {
  
  const router = useRouter();
  let ContentComponent = Component;

  if (isPWA == 'pwa') {
    router.push('/signin');
  }else{
    if (deviceType === 'desktop' || deviceType === 'tablet') {
      ContentComponent = Desktop;
  } else if (deviceType === 'mobile') {
      if ((browserName !== 'Chrome' && osName === 'Android') || 
          (browserName !== 'Mobile Safari' && osName === 'iOS')) { 
          ContentComponent = BadBrowser;
      } else {
          ContentComponent = Instruction;
      }
  }else if (deviceType === 'none'){
    ContentComponent = Desktop;
  }

  }
   
  

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FFFFFF" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </Head>
      <SessionProvider session={pageProps?.session}>
        <UserProvider >
        {(router.pathname !== "/intro" && router.pathname !== "/signin" && ContentComponent == Component)
        &&
        <Header />
        }
      
        <ContentComponent {...pageProps} />
        {(router.pathname !== "/intro" && ContentComponent == Component)
        &&
        <Navbar />
      }
        </UserProvider>
      </SessionProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  let userAgent = '';
  let isStandalone = false;

  if (ctx.req) {
      userAgent = ctx.req.headers['user-agent'] || '';
  } else {
      userAgent = navigator.userAgent;
      isStandalone = (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches);
  }

  const isPWA = ctx.query.source || 'none';
  console.log(isPWA)
  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type || 'none';
  const browserName = parser.getBrowser().name;
  const osName = parser.getOS().name;
  console.log("User Agent:", userAgent);

  console.log({ deviceType, browserName, isStandalone, osName, isPWA })
  return { deviceType, browserName, isStandalone, osName, isPWA };
};

export default MyApp;