import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

async function refreshAccessToken(token) {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      expires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}


export default NextAuth({
    
    secret: process.env.JWT_SECRET,
  
    providers: [
    GoogleProvider({
      clientId: "1061585689227-jh2i9idiiffe9e48i3b9t5374jjfqt0d.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      httpOptions: {
        timeout: 100000,
      }
    }),
    ],
    callbacks: {
    

      async jwt({token, account}) {

        if(account){
          token.accessToken = account?.access_token
          token.expires = account.expires_at * 1000
          token.refreshToken = account.refresh_token
        }

        console.log(token)
      
        if (Date.now() < token.expires) {
          return token;
        }
  
        // Access token has expired, try to update it
        return await refreshAccessToken(token);
        
      },
    
  
      async session(session, token) {
        if(token){
          session.accessToken = token.accessToken
          session.expires = token.expires
          session.error = token?.error

        }
  
 
        return session;
    }
    
    }
  

})
