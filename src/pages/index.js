import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>FarmGuard - AI Crop Disease Detection</title>
        <meta name="description" content="Smart solutions for agriculture using AI" />
      </Head>

      <header className="hero">
        <nav className="navbar">
          <div className="logo">FarmGuard</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <button className="btn">Get Started</button>
        </nav>

        <div className="hero-content">
          <div className="text">
            <h1>Smarter Solutions for Farmers</h1>
            <p>AI-powered crop disease detection and farming insights.</p>
            <div className="buttons">
              <button className="btn">Get Started</button>
              <button className="btn-outline">Watch Video</button>
            </div>
          </div>
          <div className="image">
            <Image src="/hero-illustration.png" alt="AI Farm" width={400} height={400} />
          </div>
        </div>
      </header>

      <style jsx>{`
        .hero {
          background: #37517e;
          color: white;
          padding: 2rem;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        .btn {
          background: #47b2e4;
          border: none;
          padding: 0.5rem 1rem;
          color: white;
          border-radius: 5px;
        }
        .btn-outline {
          background: transparent;
          border: 1px solid #fff;
          padding: 0.5rem 1rem;
          margin-left: 1rem;
          color: white;
          border-radius: 5px;
        }
        .hero-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 3rem;
        }
        .text h1 {
          font-size: 2rem;
        }
        .text p {
          margin-top: 1rem;
        }
        .buttons {
          margin-top: 1.5rem;
        }
      `}</style>
    </>
  );
}
