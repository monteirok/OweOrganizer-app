import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

function MyApp({ Component, pageProps }) {
    return (
        <div className='appContainer'>
            <Header />
            <Main>
                <Component {...pageProps} />
            </Main>
            <Footer />
        </div>
    );
}

export default MyApp;
