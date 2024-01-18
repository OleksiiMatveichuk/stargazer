import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <button type="button">zvyk</button>
      <span>counter</span>
      <Link href="/Game/Game">Play</Link>
      <Link href="/PrivacyPolicy/PrivacyPolicy">privacy policy</Link>
    </>
  );
};

export default HomePage;
