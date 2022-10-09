import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} | Kiosweb -  Jasa pembuatan website No. #1 Indonesia.}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Jasa pembuatan website No. #1 Indonesia."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="image" content="/public/assets/img/logo/logobiru.png" />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/faviconu.ico" />
    </Head>
  </>
);

export default SEO;
