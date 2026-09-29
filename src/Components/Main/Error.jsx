import { Link } from "react-router-dom";
import { SITE_CONTENT } from "../../Constants/siteContent";
import { useAppPreferences } from "../../context/AppPreferences";

const Error = () => {
  const { t } = useAppPreferences();

  return (
    <section className="container py-5 text-center">
      <h1 className="text-danger mb-3">{t(SITE_CONTENT.errors.notFound.title)}</h1>
      <p className="text-secondary mb-3">{t(SITE_CONTENT.errors.notFound.description)}</p>
      <Link to="/" className="btn btn-dark">
        {t(SITE_CONTENT.common.backHome)}
      </Link>
    </section>
  );
};

export default Error;