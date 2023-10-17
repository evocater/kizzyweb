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

function MyApp({ Component, pageProps, deviceType, browserName, osName, isPWA }) {
  
  const router = useRouter();

  let ContentComponent = Component; // Added only if blocker logic is commented out

/* BLOCKER LOGIC 
  useEffect(() => {
    if (isPWA && router.pathname !== '/signin') {
        router.push('/signin');
    }
  }, [ ]);

  let ContentComponent = Component;

  if (isPWA) {
      ContentComponent = SignIn;
  } else {
      if (deviceType === 'desktop' || deviceType === 'tablet' || deviceType === 'none') {
          ContentComponent = Desktop;
      } else if (deviceType === 'mobile') {
          if ((browserName !== 'Chrome' && osName === 'Android') || 
              (browserName !== 'Mobile Safari' && osName === 'iOS')) {
              ContentComponent = BadBrowser;
          } else {
              ContentComponent = Instruction;
          }
      }
  }
*/

    

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

  if (ctx.req) { //check if function is executed on serverside
      userAgent = ctx.req.headers['user-agent'] || '';
  } else { //check if function is executed on clientside
      userAgent = navigator.userAgent;
  }

  const isPWA = ctx.query.source === "pwa" ? true : false;
  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type || 'none';
  const browserName = parser.getBrowser().name;
  const osName = parser.getOS().name;

  console.log({ deviceType, browserName, osName, isPWA })

  return { deviceType, browserName, osName, isPWA };
};

export default MyApp;