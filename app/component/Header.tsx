import React from 'react'
import { useSession } from 'next-auth/react'

export default  function Header() {
const session=useSession()
const xxx=session.data
    return (
        <div>
            <div className="nav-header">
                <a href="#" className="brand-logo">
                    <svg
                        className="logo-abbr"
                        width={51}
                        height={51}
                        viewBox="0 0 51 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="logo-react"
                            d="M35.1455 0.990723H15.1455C6.86124 0.990723 0.145508 7.70645 0.145508 15.9907V35.9907C0.145508 44.275 6.86124 50.9907 15.1455 50.9907H35.1455C43.4298 50.9907 50.1455 44.275 50.1455 35.9907V15.9907C50.1455 7.70645 43.4298 0.990723 35.1455 0.990723Z"
                            fill="white"
                        />
                        <path
                            d="M15.6963 36.6899L6.64551 19.4641H11.0249C11.4921 19.4641 11.9981 19.8534 12.1928 20.048C13.7499 23.065 17.0394 29.3908 17.7401 30.5587C18.4408 31.7265 18.2267 32.4078 18.032 32.6024L15.6963 36.6899Z"
                            fill="var(--primary)"
                        />
                        <path
                            d="M13.9443 19.4641L22.9952 36.6899L32.9219 16.8365C31.6567 16.7392 28.9512 16.6029 28.2505 16.8365C27.5498 17.0701 27.1799 17.7124 27.0826 18.0043L22.9952 26.7632C22.0219 24.9141 20.0171 21.0407 19.7836 20.34C19.55 19.6393 18.5184 19.4641 18.0318 19.4641H13.9443Z"
                            fill="var(--primary)"
                        />
                        <path
                            opacity="0.5"
                            d="M36.7175 37.2738H24.4551L25.9149 34.3542C26.382 33.4199 27.3747 33.4783 27.6667 33.4783H35.8416C39.6371 32.6024 37.8853 28.5149 36.1336 28.5149H28.8345L30.8782 24.7194H35.2577C37.3014 23.5516 36.4255 21.5078 35.2577 21.2159H33.7979C32.8636 21.2159 33.0193 20.2427 33.2139 19.7561L34.3818 17.1284C43.1406 17.4204 40.9023 23.3569 39.3451 26.1792C44.7172 32.4856 39.3451 37.2738 36.7175 37.2738Z"
                            fill="var(--primary)"
                        />
                    </svg>
                    <svg
                        className="brand-title"
                        width={130}
                        height={22}
                        viewBox="0 0 130 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.32533 20.9908L0.145325 1.39081H3.98132L7.50932 16.9868L11.6533 1.39081H15.6013L19.6333 16.9868L23.1613 1.39081H27.0253L21.7053 20.9908H17.4493L13.5573 6.45881L9.55332 20.9908H5.32533ZM35.4332 21.3268C34.1452 21.3268 32.9785 21.1028 31.9332 20.6548C30.8879 20.1882 30.0479 19.4788 29.4132 18.5268C28.7785 17.5748 28.4425 16.3802 28.4052 14.9428H31.9332C31.9519 15.8948 32.2599 16.6975 32.8572 17.3508C33.4732 17.9855 34.3319 18.3028 35.4332 18.3028C36.4785 18.3028 37.2812 18.0135 37.8412 17.4348C38.4012 16.8562 38.6812 16.1282 38.6812 15.2508C38.6812 14.2242 38.3079 13.4495 37.5612 12.9268C36.8332 12.3855 35.8905 12.1148 34.7332 12.1148H33.2772V9.17481H34.7612C35.7132 9.17481 36.5065 8.95081 37.1412 8.50281C37.7759 8.05481 38.0932 7.39221 38.0932 6.51481C38.0932 5.78681 37.8505 5.20821 37.3652 4.77881C36.8985 4.33081 36.2452 4.10681 35.4052 4.10681C34.4905 4.10681 33.7719 4.37751 33.2492 4.91881C32.7452 5.46021 32.4652 6.12281 32.4092 6.90681H28.9092C28.9839 5.09621 29.6092 3.66821 30.7852 2.62281C31.9799 1.57751 33.5199 1.05481 35.4052 1.05481C36.7492 1.05481 37.8785 1.29751 38.7932 1.78281C39.727 2.24951 40.427 2.87481 40.893 3.65881C41.379 4.44281 41.621 5.31081 41.621 6.26281C41.621 7.36421 41.313 8.29751 40.697 9.06281C40.1 9.80951 39.353 10.3135 38.4572 10.5748C39.559 10.7988 40.455 11.3402 41.145 12.1988C41.836 13.0388 42.181 14.1028 42.181 15.3908C42.181 16.4735 41.92 17.4628 41.397 18.3588C40.875 19.2548 40.109 19.9735 39.101 20.5148C38.1119 21.0562 36.8892 21.3268 35.4332 21.3268ZM43.457 20.9908L50.625 1.39081H54.657L61.825 20.9908H58.017L56.449 16.4548H48.805L47.209 20.9908H43.457ZM49.785 13.6548H55.469L52.613 5.50681L49.785 13.6548ZM69.993 21.3268C68.686 21.3268 67.52 21.0095 66.493 20.3748C65.466 19.7402 64.654 18.8722 64.057 17.7708C63.46 16.6695 63.161 15.4188 63.161 14.0188C63.161 12.6188 63.46 11.3775 64.057 10.2948C64.654 9.19351 65.466 8.33481 66.493 7.71881C67.52 7.08421 68.686 6.76681 69.993 6.76681C71.038 6.76681 71.953 6.96281 72.737 7.35481C73.521 7.74681 74.156 8.29751 74.641 9.00681V0.830811H78.225V20.9908H75.033L74.641 19.0028C74.193 19.6188 73.596 20.1602 72.849 20.6268C72.121 21.0935 71.169 21.3268 69.993 21.3268ZM70.749 18.1908C71.906 18.1908 72.849 17.8082 73.577 17.0428C74.324 16.2588 74.697 15.2602 74.697 14.0468C74.697 12.8335 74.324 11.8442 73.577 11.0788C72.849 10.2948 71.906 9.90281 70.749 9.90281C69.61 9.90281 68.668 10.2855 67.921 11.0508C67.174 11.8162 66.801 12.8055 66.801 14.0188C66.801 15.2322 67.174 16.2308 67.921 17.0148C68.668 17.7988 69.61 18.1908 70.749 18.1908ZM81.875 20.9908V7.10281H85.039L85.347 8.97881C85.795 8.30681 86.383 7.77481 87.111 7.38281C87.857 6.97221 88.716 6.76681 89.687 6.76681C91.833 6.76681 93.355 7.59751 94.251 9.25881C94.755 8.49351 95.427 7.88681 96.267 7.43881C97.125 6.99081 98.059 6.76681 99.067 6.76681C100.877 6.76681 102.268 7.30821 103.239 8.39081C104.209 9.47351 104.695 11.0602 104.695 13.1508V20.9908H101.111V13.4868C101.111 12.2922 100.877 11.3775 100.411 10.7428C99.963 10.1082 99.263 9.79081 98.311 9.79081C97.34 9.79081 96.556 10.1455 95.959 10.8548C95.38 11.5642 95.091 12.5535 95.091 13.8228V20.9908H91.507V13.4868C91.507 12.2922 91.273 11.3775 90.807 10.7428C90.34 10.1082 89.621 9.79081 88.651 9.79081C87.699 9.79081 86.924 10.1455 86.327 10.8548C85.748 11.5642 85.459 12.5535 85.459 13.8228V20.9908H81.875ZM110.029 4.94681C109.376 4.94681 108.835 4.75081 108.405 4.35881C107.995 3.96681 107.789 3.47221 107.789 2.87481C107.789 2.27751 107.995 1.79221 108.405 1.41881C108.835 1.02681 109.376 0.830811 110.029 0.830811C110.683 0.830811 111.215 1.02681 111.625 1.41881C112.055 1.79221 112.269 2.27751 112.269 2.87481C112.269 3.47221 112.055 3.96681 111.625 4.35881C111.215 4.75081 110.683 4.94681 110.029 4.94681ZM108.237 20.9908V7.10281H111.821V20.9908H108.237ZM115.562 20.9908V7.10281H118.726L119.006 9.45481C119.436 8.63351 120.052 7.98021 120.854 7.49481C121.676 7.00951 122.637 6.76681 123.738 6.76681C125.456 6.76681 126.79 7.30821 127.742 8.39081C128.694 9.47351 129.17 11.0602 129.17 13.1508V20.9908H125.586V13.4868C125.586 12.2922 125.344 11.3775 124.858 10.7428C124.373 10.1082 123.617 9.79081 122.59 9.79081C121.582 9.79081 120.752 10.1455 120.098 10.8548C119.464 11.5642 119.146 12.5535 119.146 13.8228V20.9908H115.562Z"
                            fill="white"
                        />
                    </svg>
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <h3 className='pt-2 px-3'>Selamat Datang... <a style={{fontWeight:'bold',color:'red'}}>
                                    {xxx?.nama}
                                    </a>!</h3>
                            </div>
                            <ul className="navbar-nav header-right">

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
