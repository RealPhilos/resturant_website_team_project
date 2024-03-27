import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[13vw] py-7 justify-between" style={{backgroundColor: "#FAFAF5"}}>
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <div style={{ marginRight: "5em", textAlign: "center" }}>
            <h1 className="text-s font-serif mb-1">Other Information</h1>
            <ul>
              <li className="text-xxs">
                <Link href="/info">About Us</Link>
              </li>
              <li className="text-xxs">
                <Link href="/info">Careers</Link>
              </li>
              <li className="text-xxs">
                <Link href="/info">More Oaxaca</Link>
              </li>
              <li className="text-xxs">
                <Link href="/info">Help</Link>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: "5em", textAlign: "center" }}>
            <h1 className="text-s font-serif mb-1">Follow Us!</h1>
            <ul>
              <li className="text-xxs">
                <Link href="/info">Instagram</Link>
              </li>
              <li className="text-xxs">
                <Link href="/info">Twitter/X</Link>
              </li>
              <li className="text-xxs">
                <Link href="/info">Facebook</Link>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: "20em", textAlign: "center" }}>
            <h1 className="text-s font-serif mb-1">Download Our App!</h1>
            <ul>
              <li className="text-xxs">
                <Link href="/info">App Store</Link>
              </li>
              <li className="text-xxs">
                <Link href="/info">Google Play Store</Link>
              </li>
            </ul>
          </div>
          <div style={{ textAlign: "center" }}>
          <Link href="/">
          <div className="flex items-center text-green-800">
          <img src="/Icon.png" alt="Oaxaca Icon" className="w-12 h-12" />
          <span className="text-xl text-green-800">axaca</span>
          </div>
      </Link>
          </div>
        </div>

        <div className="text-xxs" style={{ textAlign: "right" }}>
          <Link href="/info">Privacy Statement |</Link>
          <Link href="/info"> Terms & Conditions |</Link>
          <Link href="/info"> Cookie Policy </Link>
        </div>

        <p className="text-xxs" style={{ textAlign: "right" }}>
          © 2023 – 2024 Oaxaca’s. All Rights Reserved
        </p>
      </footer>
  );
}