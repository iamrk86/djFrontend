import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
export default function PageNotFound() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          &nbsp;404
        </h1>
        <h4>Sorry, ther is nothing here</h4>
        <Link href="/">Back to home</Link>
      </div>
    </Layout>
  );
}
