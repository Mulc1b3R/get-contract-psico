import AppForm from "../components/AppForm";
import AppPreviewContract from "../components/AppPreviewContract";
import RemixButton from '../components/RemixButton';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <RemixButton />
      {/* The rest of your app's UI */}
    </div>
  );
}
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
