import Layout from "@/components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout title="About DJ Events">
      <h1>About</h1>
      <p>
        THis is an app to find the latests DJ Events and other musical events
      </p>
      <p>Version : 1.0.0</p>
      <Link href="/">Events</Link>
    </Layout>
  );
}
