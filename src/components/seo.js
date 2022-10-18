import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} | Buat Sekarang Besok Jadi`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Jasa pembuatan website No. #1 Brebes."
      />
      <link rel="canonical" href="https://kiosweb.id/" />
      <meta property="og:locale" content="id_ID" />
      <meta
        name="google-site-verification"
        content="ZyWy7M6AF49uV4kAjjb4ngI7GzbUmBWRud2w9y6FZCg"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:url" content="https://kiosweb.id/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ardhiyasa11" />
      <meta
        name="image"
        content="https://www.kiosweb.id/assets/img/logo/logobiru.png"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/faviconu.ico" />
    </Head>
  </>
);

export default SEO;
