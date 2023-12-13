import Link from "next/link";
import style from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Link href="/" className={style.btnBackHome}>
        Back Home
      </Link>
    </>
  );
};

export default PrivacyPolicy;
