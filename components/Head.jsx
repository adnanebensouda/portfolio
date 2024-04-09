import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Adnane Bensouda is a Software Engineer developer with experiences in computer science. "
      />
      <meta
        name="keywords"
        content="Adnane Bensouda, Adnane Bensouda, web developer portfolio,  web developer,  developer, portfolio, full stack, frontend, react, next, backend, mysql, express.js, django, API's, Nginx"
      />
      <meta property="og:title" content="Adnane Bensouda Portfolio" />
      <link rel="canonical" href="https://adnanebensouda.me"></link>
      <meta
        property="og:description"
        content="A Software Engineer developer with experiences in computer science. "
      />
      <meta property="og:url" content="https://adnanebensouda.me" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Adnane Bensouda',
};
