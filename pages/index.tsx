import AppForm from "../components/AppForm";
import AppPreviewContract from "../components/AppPreviewContract";

import styles from '../styles/ConnectWalletButton.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <ConnectWalletButton />
      {/* The rest of your app's UI */}
    </div>
  );
};

export default Home;

export default function Home() {
  return (
    <div>
      <div className="mx-auto w-full max-w-md py-10">
        <AppForm />
      </div>
      <AppPreviewContract />
    </div>
  );
}
