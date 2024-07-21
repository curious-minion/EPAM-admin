import{
    headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList,
    exitLink,
 
} from "./header.module.css"
import Link from "next/link";
import laptop from "../../../../public/svg/laptop.svg"

import Image from "next/image";

export default function Header() {
  return (

<header>
            <div className={headerContainer}>
                <Link href="">
                    <Image className={ logo} src={laptop}  alt="go to homepage"/>
                </Link>
            <h2 className={mainHeader}>
                Кафедра “Кібернетика та  <br></br>штучний інтелект”
            </h2>
            <nav className={pageNavigation}>
            <ul className={pageNavigationList}>
                <li><Link href="" >
                    Про кафедру
                    </Link>
                 </li>
                <li> <Link href="">
                        Новини
                     </Link>
                </li> 
                <li> <Link  href="">
                        Адміністрація
                     </Link>
                </li>
                <li><Link href="" >
                        Наукова робота
                    </Link>
                </li>
                <li><Link href="" >
                        Контакти
                    </Link>
                </li>
            </ul>
        </nav>

        <Link className={exitLink} href="./">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4286 3H4V18.75C4 19.3467 4.24082 19.919 4.66947 20.341C5.09812 20.7629 5.67951 21 6.28571 21H15.4286M16.5714 15.375L20 12M20 12L16.5714 8.625M20 12H8.57143" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        Вийти
        </Link>
    </div>
</header>
  ) 
}