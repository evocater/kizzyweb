import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (

    <>
    {router.pathname !== "/signin"
    &&

    <div className="bg-white h-16 fixed bottom-0 left-0 right-0 flex items-center justify-around">
      <Link href="/">
        <button className="icon">
          {router.pathname === "/" ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7496 2.76261C19.2371 2.25011 18.3496 2.60011 18.3496 3.31261V7.67511C18.3496 9.50011 19.8996 11.0126 21.7871 11.0126C22.9746 11.0251 24.6246 11.0251 26.0371 11.0251C26.7496 11.0251 27.1246 10.1876 26.6246 9.68761C24.8246 7.87511 21.5996 4.61261 19.7496 2.76261Z"
                fill="#B8B7FF"
              />
              <path
                d="M25.625 12.7375H22.0125C19.05 12.7375 16.6375 10.325 16.6375 7.3625V3.75C16.6375 3.0625 16.075 2.5 15.3875 2.5H10.0875C6.2375 2.5 3.125 5 3.125 9.4625V20.5375C3.125 25 6.2375 27.5 10.0875 27.5H19.9125C23.7625 27.5 26.875 25 26.875 20.5375V13.9875C26.875 13.3 26.3125 12.7375 25.625 12.7375ZM14.375 22.1875H9.375C8.8625 22.1875 8.4375 21.7625 8.4375 21.25C8.4375 20.7375 8.8625 20.3125 9.375 20.3125H14.375C14.8875 20.3125 15.3125 20.7375 15.3125 21.25C15.3125 21.7625 14.8875 22.1875 14.375 22.1875ZM16.875 17.1875H9.375C8.8625 17.1875 8.4375 16.7625 8.4375 16.25C8.4375 15.7375 8.8625 15.3125 9.375 15.3125H16.875C17.3875 15.3125 17.8125 15.7375 17.8125 16.25C17.8125 16.7625 17.3875 17.1875 16.875 17.1875Z"
                fill="#6865FD"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7496 2.76261C19.2371 2.25011 18.3496 2.60011 18.3496 3.31261V7.67511C18.3496 9.50011 19.8996 11.0126 21.7871 11.0126C22.9746 11.0251 24.6246 11.0251 26.0371 11.0251C26.7496 11.0251 27.1246 10.1876 26.6246 9.68761C24.8246 7.87511 21.5996 4.61261 19.7496 2.76261Z"
                fill="#C8C8C8"
              />
              <path
                d="M25.625 12.7375H22.0125C19.05 12.7375 16.6375 10.325 16.6375 7.3625V3.75C16.6375 3.0625 16.075 2.5 15.3875 2.5H10.0875C6.2375 2.5 3.125 5 3.125 9.4625V20.5375C3.125 25 6.2375 27.5 10.0875 27.5H19.9125C23.7625 27.5 26.875 25 26.875 20.5375V13.9875C26.875 13.3 26.3125 12.7375 25.625 12.7375ZM14.375 22.1875H9.375C8.8625 22.1875 8.4375 21.7625 8.4375 21.25C8.4375 20.7375 8.8625 20.3125 9.375 20.3125H14.375C14.8875 20.3125 15.3125 20.7375 15.3125 21.25C15.3125 21.7625 14.8875 22.1875 14.375 22.1875ZM16.875 17.1875H9.375C8.8625 17.1875 8.4375 16.7625 8.4375 16.25C8.4375 15.7375 8.8625 15.3125 9.375 15.3125H16.875C17.3875 15.3125 17.8125 15.7375 17.8125 16.25C17.8125 16.7625 17.3875 17.1875 16.875 17.1875Z"
                fill="#C8C8C8"
              />
            </svg>
          )}
        </button>
      </Link>
      <Link href="/live">
        <button className="icon">
          {router.pathname === "/live" ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66629 10.9398C9.76441 10.9288 9.97609 10.9476 10.4794 11.1951C10.9763 11.4394 11.6117 11.8292 12.535 12.3974C13.4577 12.9653 14.0927 13.3573 14.5406 13.6945C14.9886 14.0319 15.1305 14.2304 15.1858 14.363C15.3547 14.7673 15.3547 15.2328 15.1858 15.637C15.1305 15.7696 14.9886 15.9681 14.5406 16.3055C14.0927 16.6428 13.4577 17.0348 12.535 17.6026C11.6117 18.1708 10.9763 18.5606 10.4794 18.8049C9.97609 19.0524 9.76441 19.0711 9.66629 19.0601C9.30189 19.0194 8.95161 18.8135 8.71441 18.4655C8.63431 18.348 8.54031 18.1078 8.48898 17.5115C8.43829 16.9225 8.43747 16.1335 8.43747 15C8.43747 13.8665 8.43829 13.0775 8.48898 12.4885C8.54031 11.8922 8.63431 11.652 8.71441 11.5345C8.95161 11.1865 9.30189 10.9807 9.66629 10.9398Z"
                fill="#B8B7FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2919 4.0625H11.208C9.49338 4.0625 8.14907 4.06249 7.06865 4.15076C5.96847 4.24065 5.05958 4.42672 4.23691 4.84589C2.88449 5.53498 1.78494 6.63453 1.09586 7.98694C0.676693 8.80961 0.490622 9.7185 0.400735 10.8187C0.31246 11.8991 0.312465 13.2434 0.31247 14.958V15.042C0.312465 16.7566 0.31246 18.1009 0.400735 19.1814C0.490622 20.2815 0.676693 21.1904 1.09586 22.013C1.78494 23.3655 2.88449 24.465 4.23691 25.1541C5.05958 25.5733 5.96846 25.7594 7.06865 25.8493C8.14898 25.9375 9.49314 25.9375 11.2076 25.9375H11.2919C13.0063 25.9375 14.351 25.9375 15.4313 25.8493C16.5315 25.7594 17.4403 25.5733 18.263 25.1541C19.6155 24.465 20.715 23.3655 21.4041 22.013C21.4666 21.8904 21.524 21.7656 21.5766 21.6386C23.035 22.2758 24.2292 22.793 25.1987 23.056C26.2298 23.3358 27.2342 23.3934 28.1321 22.8058C29.0301 22.2183 29.3795 21.2747 29.536 20.2179C29.6876 19.1945 29.6875 17.8446 29.6875 16.1878V13.8123C29.6875 12.1553 29.6876 10.8055 29.536 9.78209C29.3795 8.72524 29.0301 7.78175 28.1321 7.19421C27.2342 6.60668 26.2298 6.6643 25.1987 6.94403C24.2292 7.20701 23.035 7.72423 21.5766 8.36136C21.524 8.23435 21.4666 8.10968 21.4041 7.98694C20.715 6.63453 19.6155 5.53498 18.263 4.84589C17.4403 4.42672 16.5315 4.24065 15.4313 4.15076C14.3508 4.06249 13.0066 4.0625 11.2919 4.0625ZM13.4758 10.7748C12.6046 10.2386 11.8932 9.80076 11.3066 9.51241C10.7172 9.22265 10.1035 9.00411 9.45753 9.07648C8.52391 9.18108 7.69502 9.70095 7.16506 10.4785C6.8054 11.0062 6.67951 11.6466 6.6209 12.3277C6.56245 13.0068 6.56246 13.8771 6.56247 14.9551V15.0449C6.56246 16.1229 6.56245 16.9933 6.6209 17.6723C6.67951 18.3534 6.8054 18.9939 7.16506 19.5215C7.69502 20.299 8.52391 20.8189 9.45753 20.9235C10.1035 20.9959 10.7172 20.7774 11.3066 20.4876C11.8932 20.1993 12.6046 19.7614 13.4758 19.2253L13.5585 19.1744C14.4306 18.6376 15.1417 18.2 15.6686 17.8033C16.2033 17.4005 16.6671 16.9556 16.916 16.3596C17.278 15.493 17.278 14.507 16.916 13.6404C16.6671 13.0444 16.2033 12.5995 15.6686 12.1968C15.1417 11.8 14.4306 11.3623 13.5585 10.8256L13.4758 10.7748Z"
                fill="#6865FD"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66626 10.9398C9.76438 10.9288 9.97606 10.9476 10.4794 11.1951C10.9763 11.4394 11.6117 11.8292 12.5349 12.3974C13.4577 12.9653 14.0927 13.3573 14.5406 13.6945C14.9886 14.0319 15.1304 14.2304 15.1858 14.363C15.3547 14.7673 15.3547 15.2328 15.1858 15.637C15.1304 15.7696 14.9886 15.9681 14.5406 16.3055C14.0927 16.6428 13.4577 17.0348 12.5349 17.6026C11.6117 18.1708 10.9763 18.5606 10.4794 18.8049C9.97606 19.0524 9.76438 19.0711 9.66626 19.0601C9.30186 19.0194 8.95158 18.8135 8.71438 18.4655C8.63428 18.348 8.54028 18.1078 8.48895 17.5115C8.43826 16.9225 8.43744 16.1335 8.43744 15C8.43744 13.8665 8.43826 13.0775 8.48895 12.4885C8.54028 11.8922 8.63428 11.652 8.71438 11.5345C8.95158 11.1865 9.30186 10.9807 9.66626 10.9398Z"
                fill="#C8C8C8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2919 4.0625H11.208C9.49335 4.0625 8.14904 4.06249 7.06861 4.15076C5.96844 4.24065 5.05955 4.42672 4.23688 4.84589C2.88446 5.53498 1.78491 6.63453 1.09583 7.98694C0.676663 8.80961 0.490592 9.7185 0.400704 10.8187C0.312429 11.8991 0.312434 13.2434 0.312439 14.958V15.042C0.312434 16.7566 0.312429 18.1009 0.400704 19.1814C0.490592 20.2815 0.676663 21.1904 1.09583 22.013C1.78491 23.3655 2.88446 24.465 4.23688 25.1541C5.05955 25.5733 5.96843 25.7594 7.06861 25.8493C8.14895 25.9375 9.49311 25.9375 11.2075 25.9375H11.2919C13.0063 25.9375 14.3509 25.9375 15.4313 25.8493C16.5314 25.7594 17.4403 25.5733 18.2629 25.1541C19.6154 24.465 20.7149 23.3655 21.4041 22.013C21.4666 21.8904 21.5239 21.7656 21.5766 21.6386C23.0349 22.2758 24.2292 22.793 25.1987 23.056C26.2298 23.3358 27.2342 23.3934 28.1321 22.8058C29.0301 22.2183 29.3794 21.2747 29.5359 20.2179C29.6876 19.1945 29.6874 17.8446 29.6874 16.1878V13.8123C29.6874 12.1553 29.6876 10.8055 29.5359 9.78209C29.3794 8.72524 29.0301 7.78175 28.1321 7.19421C27.2342 6.60668 26.2298 6.6643 25.1987 6.94403C24.2292 7.20701 23.0349 7.72423 21.5766 8.36136C21.5239 8.23435 21.4666 8.10968 21.4041 7.98694C20.7149 6.63453 19.6154 5.53498 18.2629 4.84589C17.4403 4.42672 16.5314 4.24065 15.4313 4.15076C14.3508 4.06249 13.0066 4.0625 11.2919 4.0625ZM13.4758 10.7748C12.6046 10.2386 11.8932 9.80076 11.3066 9.51241C10.7172 9.22265 10.1035 9.00411 9.4575 9.07648C8.52388 9.18108 7.69499 9.70095 7.16503 10.4785C6.80536 11.0062 6.67948 11.6466 6.62086 12.3277C6.56241 13.0068 6.56243 13.8771 6.56244 14.9551V15.0449C6.56243 16.1229 6.56241 16.9933 6.62086 17.6723C6.67948 18.3534 6.80536 18.9939 7.16503 19.5215C7.69499 20.299 8.52388 20.8189 9.4575 20.9235C10.1035 20.9959 10.7172 20.7774 11.3066 20.4876C11.8932 20.1993 12.6046 19.7614 13.4758 19.2253L13.5584 19.1744C14.4306 18.6376 15.1417 18.2 15.6686 17.8033C16.2033 17.4005 16.6671 16.9556 16.9159 16.3596C17.2779 15.493 17.2779 14.507 16.9159 13.6404C16.6671 13.0444 16.2033 12.5995 15.6686 12.1968C15.1417 11.8 14.4306 11.3623 13.5584 10.8256L13.4758 10.7748Z"
                fill="#C8C8C8"
              />
            </svg>
          )}
        </button>
      </Link>
      <Link href="/account">
        <button className="icon">
          {router.pathname === "/account" ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9999 3.75C11.9572 3.75 9.49066 6.19645 9.49066 9.21429C9.49066 12.2321 11.9572 14.6786 14.9999 14.6786C18.0425 14.6786 20.5092 12.2321 20.5092 9.21429C20.5092 6.19645 18.0425 3.75 14.9999 3.75Z"
                fill="#B8B7FF"
              />
              <path
                d="M18.2512 17.1093C16.0974 16.7683 13.9026 16.7683 11.7488 17.1093L11.5179 17.1458C8.48309 17.6261 6.25 20.2225 6.25 23.2706C6.25 24.9159 7.5947 26.2496 9.25348 26.2496H20.7465C22.4053 26.2496 23.75 24.9159 23.75 23.2706C23.75 20.2225 21.5169 17.6261 18.4821 17.1458L18.2512 17.1093Z"
                fill="#6865FD"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9999 3.75C11.9572 3.75 9.49066 6.19645 9.49066 9.21429C9.49066 12.2321 11.9572 14.6786 14.9999 14.6786C18.0425 14.6786 20.5092 12.2321 20.5092 9.21429C20.5092 6.19645 18.0425 3.75 14.9999 3.75Z"
                fill="#C8C8C8"
              />
              <path
                d="M18.2512 17.1093C16.0974 16.7683 13.9026 16.7683 11.7488 17.1093L11.5179 17.1458C8.48309 17.6261 6.25 20.2225 6.25 23.2706C6.25 24.9159 7.5947 26.2496 9.25348 26.2496H20.7465C22.4053 26.2496 23.75 24.9159 23.75 23.2706C23.75 20.2225 21.5169 17.6261 18.4821 17.1458L18.2512 17.1093Z"
                fill="#C8C8C8"
              />
            </svg>
          )}
        </button>
      </Link>
    </div>
  
  }
    
    </>
    
    
  );
}
