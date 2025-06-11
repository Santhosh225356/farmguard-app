import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>FarmGuard | Smart Farming</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI-Powered Crop Disease Detection and Farming Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="hero">
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
            <Image
              src="/hero-illustration.png"
              alt="AI Farming"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </main>

      <style jsx>{`
        .hero {
          background: #37517e;
          color: white;
          padding: 2rem;
          min-height: 100vh;
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
          flex-wrap: wrap;
        }
        .text h1 {
          font-size: 2rem;
        }
        .buttons {
          margin-top: 1.5rem;
        }
      `}</style>
    </>
  );
}
