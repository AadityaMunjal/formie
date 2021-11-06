import Head from "next/head";

export default function Meta({ title = "Formie-Forms for normies" }) {
  return (
    <Head>
      <title> {title} </title>
      <meta
        name="description"
        content="Formie-Make awesome forms that attracts!! A Form web app for normies!"
      />
    </Head>
  );
}
