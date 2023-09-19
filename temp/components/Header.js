import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

function Header() {
    return (
        <header>
            {/* logo */}
            <Link className={utilStyles.headerTitle} href="/">
                <h1>kmDev</h1>
            </Link>
            {/* github */}
            <>
                <Link className={utilStyles.githubIcon} href="https://github.com/monteirok" target='_blank'>
                    <Image
                        priority
                        src="/images/github.png"
                        className={utilStyles.githubIconImg}
                        height={43}
                        width={50}
                        alt=""
                    />
                </Link>
            </>
        </header>
    );
}

export default Header;