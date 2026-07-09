import { SITE_CONTENT } from "../../../Constants/siteContent";
import { useAppPreferences } from "../../../context/AppPreferences";

export const Contact = () => {
  const { contact } = SITE_CONTENT;
  const { t } = useAppPreferences();

  return (
    <section className="container py-5">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4 p-md-5">
          <h1 className="fw-bold mb-2">{t(contact.title)}</h1>
          <p className="text-secondary mb-4">{t(contact.subtitle)}</p>
          <div className="row g-3">
            {contact.details.map((item) => (
              <div className="col-12 col-md-6" key={item.label.en || item.label}>
                <div className="p-3 bg-light rounded h-100">
                  <h6 className="mb-1">{t(item.label)}</h6>
                  <p className="mb-0 text-secondary">{t(item.value)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4 className="mb-3">{t(contact.branchesTitle)}</h4>
            <div className="row g-3">
              {contact.branches.map((branch) => (
                <div className="col-12 col-lg-6" key={branch.type.en}>
                  <div className="p-3 bg-light rounded h-100">
                    <h5 className="mb-2">{t(branch.type)}</h5>
                    <p className="mb-2 text-secondary">
                      <strong>{t({ en: "Address", am: "አድራሻ" })}: </strong>
                      {t(branch.address)}
                    </p>
                    <p className="mb-2 text-secondary">
                      <strong>{t({ en: "Phone", am: "ስልክ" })}: </strong>
                      {branch.phone}
                    </p>
                    <p className="mb-0 text-secondary">
                      <strong>{t({ en: "Email", am: "ኢሜይል" })}: </strong>
                      {branch.email}
                    </p>
                    <div className="map-wrapper rounded overflow-hidden border mt-3">
                      <iframe
                        src={branch.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${branch.type.en} location map`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};