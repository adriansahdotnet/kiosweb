import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} | Buat Sekarang Besok Jadi}`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Jasa pembuatan website No. #1 Brebes."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="image"
        content="https://www.adriansah.net/assets/img/logo/logobiru.png"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/faviconu.ico" />
    </Head>
  </>
);

export default SEO;
