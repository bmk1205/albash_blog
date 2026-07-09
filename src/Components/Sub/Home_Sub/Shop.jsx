import { SITE_CONTENT } from "../../../Constants/siteContent";
import laundry from "../../../assets/Images/laundary.jpg";
import logo from "../../../assets/Images/logo.jpg";
import { useAppPreferences } from "../../../context/AppPreferences";

export const Shop = () => {
  const { t } = useAppPreferences();
  const imageByKey = { laundry, logo };

  return (
    <section className="container py-5">
      <div className="mb-4">
        <h1 className="fw-bold">{t(SITE_CONTENT.shopPage.title)}</h1>
        <p className="text-secondary mb-0">{t(SITE_CONTENT.shopPage.subtitle)}</p>
      </div>

      <div className="row g-4">
        {SITE_CONTENT.shopProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.name.en}>
            <div className="card h-100 shadow-sm border-0 shop-card">
              <img
                src={imageByKey[product.image] || laundry}
                alt={t(product.name)}
                className="card-img-top shop-card-image"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-2">{t(product.name)}</h5>
                <p className="card-text text-secondary mb-3">{t(product.description)}</p>
                <div className="mt-auto shop-price-tag">
                  {t(SITE_CONTENT.shopPage.priceLabel)}:{" "}
                  <strong>
                    {product.price} {t(SITE_CONTENT.shopPage.currency)}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};