'use client';

import { useRef, useState } from 'react';
import styles from './Header.module.scss';
import SidebarMenu from './SidebarMenu';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ data, lang }) {
  const { headerData, sidebarData } = data;


  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef(null);

  const baseUrl = 'http://localhost:1337'; // Or use env: process.env.NEXT_PUBLIC_STRAPI_URL
  const logoUrl = headerData.logo?.url ? `${baseUrl}${headerData.logo.url}` : '/default-logo.png';

  const handleShowMenu = () => {
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
    headerRef.current.style.zIndex = 0;
  }

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <button onClick={handleShowMenu} className={styles.icon}>
          ☰
        </button>

        <Link href="/" className={styles.logo}>
          <Image src={logoUrl} alt="VIB Logo" width={50} height={30} />
        </Link>

        <div className={styles.rightIcons}>
          {headerData.rightIcons?.map((icon) => (
            <Link
              key={icon.id}
              href={icon.link}
              className={styles.icon}
              title={icon.label}
            >
              <Image
                src={`${baseUrl}${icon.icon.url}`}
                alt={icon.label}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </header>

      <SidebarMenu lang={lang} sidebarData={sidebarData}  isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
}
