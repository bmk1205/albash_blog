/* eslint-disable react/prop-types */
import { useAppPreferences } from "../../../context/AppPreferences";

export const PageSection = ({ title, subtitle, description, points = [] }) => {
  const { t } = useAppPreferences();

  return (
    <section className="container py-5">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4 p-md-5">
          <h1 className="fw-bold mb-2">{t(title)}</h1>
          <p className="text-secondary fs-5 mb-3">{t(subtitle)}</p>
          <p className="mb-4">{t(description)}</p>
          {points.length > 0 && (
            <ul className="ps-3 mb-0">
              {points.map((point) => (
                <li key={point.en || point.am || String(point)} className="mb-2">
                  {t(point)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
