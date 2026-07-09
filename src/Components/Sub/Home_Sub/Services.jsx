import { SITE_CONTENT } from "../../../Constants/siteContent";
import { useAppPreferences } from "../../../context/AppPreferences";

export const Service = () => {
  const { t } = useAppPreferences();

  return (
    <section className="container py-5">
      <div className="mb-4">
        <h1 className="fw-bold">{t({ en: "Services", am: "አገልግሎቶች" })}</h1>
        <p className="text-secondary mb-0">
          {t({
            en: "Flexible service options designed for speed and quality.",
            am: "ለፍጥነት እና ጥራት የተዘጋጁ ተለዋዋጭ አገልግሎቶች።",
          })}
        </p>
      </div>

      <div className="row g-4">
        {SITE_CONTENT.services.map((service) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={service.title.en}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{t(service.title)}</h5>
                <p className="card-text text-secondary">{t(service.description)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};