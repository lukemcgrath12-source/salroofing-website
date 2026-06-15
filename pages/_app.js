import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header style={{ background: '#141414', color: '#F2F2F0', padding: '20px', position: 'sticky', top: 0, zIndex: 100 }}>
        <nav style={{ display: 'flex', gap: '30px', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#F2F2F0', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            SAL Roofing
          </Link>
          <Link href="/" style={{ color: '#F2F2F0', textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="/services" style={{ color: '#F2F2F0', textDecoration: 'none' }}>
            Services
          </Link>
          <Link href="/about" style={{ color: '#F2F2F0', textDecoration: 'none' }}>
            About
          </Link>
          <Link href="/contact" style={{ color: '#F2F2F0', textDecoration: 'none' }}>
            Contact
          </Link>
          <a href="tel:0432910369" style={{ color: '#C8A86B', textDecoration: 'none', marginLeft: 'auto' }}>
            0432 910 369
          </a>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;