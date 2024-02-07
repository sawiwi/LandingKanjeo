import { Helmet } from 'react-helmet';

const HelmetHead = ({ titlePage, contentPage, keywords }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          YoKanjeo {titlePage ? `| ${titlePage}` : 'Not found page...'}
        </title>
        <meta
          name="description"
          content={contentPage ? contentPage : 'No description...'} // Descripción de la página
        />
        <meta
          name="keywords"
          content={keywords ? keywords : 'No keywords...'} // Palabra clave 1, palabra clave 2, palabra clave 3...
        />
      </Helmet>
    </>
  );
};

export default HelmetHead;
