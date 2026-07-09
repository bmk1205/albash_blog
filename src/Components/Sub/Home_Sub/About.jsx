import ownerImage from "../../../assets/Images/Owner_img.jpg";
import { SITE_CONTENT } from "../../../Constants/siteContent";
import { useAppPreferences } from "../../../context/AppPreferences";

export const About = () => {
  const { about } = SITE_CONTENT.pages;
  const { t } = useAppPreferences();

  return (
    <section className="container py-5">
      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src={ownerImage}
              alt={t(about.owner.name)}
              className="card-img-top owner-photo"
            />
            <div className="card-body">
              <h5 className="card-title mb-1">{t(about.owner.name)}</h5>
              <p className="text-secondary mb-2">{t(about.owner.role)}</p>
              <p className="card-text mb-0">{t(about.owner.bio)}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="row g-3">
            {about.missionVision.map((item) => (
              <div className="col-12" key={item.title.en}>
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="mb-2">{t(item.title)}</h5>
                    <p className="text-secondary mb-0">{t(item.text)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body p-4 p-md-5">
          <h1 className="fw-bold mb-2">{t(about.title)}</h1>
          <p className="text-secondary fs-5 mb-3">{t(about.subtitle)}</p>
          <p className="mb-4">{t(about.description)}</p>
          <ul className="ps-3 mb-0">
            {about.points.map((point) => (
              <li key={point.en} className="mb-2">
                {t(point)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      

      <div className="row g-3">
        {about.highlights.map((item) => (
          <div className="col-6 col-lg-3" key={item.label.en}>
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <p className="text-secondary mb-1 small">{t(item.label)}</p>
                <h6 className="mb-0 fw-bold">{item.value}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};