import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import oweOrgStyles from '../styles/owe-org.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | kmDev</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={`${utilStyles.center} ${utilStyles.mainHeaderContainer}`}>
        {/* <h1 className={utilStyles.mainHeader}>MY PROJECTS</h1>
        <p className={utilStyles.mainSubHeader}>Some personal projects that I've completed for fun/to further develop my developing skills. Enjoy!<span className={utilStyles.smileySymbol}> ◡̈</span></p> */}
        <h1 className={`${utilStyles.mainHeader} ${utilStyles.responsiveHeader}`}>MY PROJECTS</h1>
        <p className={`${utilStyles.mainSubHeader} ${utilStyles.responsiveSubHeader}`}>
          Some personal projects that I've completed for fun/to further develop my developing skills. Enjoy!
          <span className={utilStyles.smileySymbol}> ◡̈</span>
        </p>
        {/* projects */}
        <>
          <Link className={`${utilStyles.oweOrganizerProj} ${utilStyles.responsiveOweOrganizerProj}`} href="/projects/owe-organizer">
            <Image
                priority
                src="/images/oweOrganizerProj.png"
                className={oweOrgStyles.oweOrganizerProjImg}
                height={350}
                width={350}
                alt=""
            />
          </Link>
        </>
      </div>
    </>
  );
}
