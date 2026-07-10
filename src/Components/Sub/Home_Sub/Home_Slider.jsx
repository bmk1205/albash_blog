import { Typewriter } from "react-simple-typewriter";
import image1 from "../../../assets/Images/laundary.jpg";
import garmentImage from "../../../assets/Images/albash_garment.png";
import shopImage from "../../../assets/Images/albash_shop.png";
import fashionImage from "../../../assets/Images/albash_fashin.png";
import { SITE_CONTENT } from "../../../Constants/siteContent";
import { useAppPreferences } from "../../../context/AppPreferences";

const Home_Slider = () => {
  const { home } = SITE_CONTENT;
  const { t } = useAppPreferences();
  const showcaseImages = [garmentImage, shopImage, fashionImage];

  return (
    <>
      <section className="py-5 hero-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">{t(home.welcomeTitle)}</h1>
              <p className="fs-4 text-info mb-4 hero-typing">
                <Typewriter
                  words={home.typewriterWords.map((item) => t(item))}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
              {/* <ul className="list-group list-group-flush rounded overflow-hidden shadow-sm">
                {home.highlights.map((item) => (
                  <li
                    key={item.en}
                    className="list-group-item hero-list-item"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul> */}
              <p className="h4 mt-4 mb-0">{t(home.homeServiceText)}</p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={image1}
                alt="Laundry service"
                className="img-fluid rounded shadow laundary_home_image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-2">
        <div className="row g-3">
          {home.showcase.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.title.en}>
              <div className="card h-100 shadow-sm border-0 home-showcase-card">
                <img
                  src={showcaseImages[index % showcaseImages.length]}
                  alt={t(item.title)}
                  className="card-img-top home-showcase-image"
                />
                <div className="card-body">
                  <h5 className="card-title">{t(item.title)}</h5>
                  <p className="card-text text-secondary mb-0">{t(item.description)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5 partners-section">
        <div className="mb-4 text-center">
          <h2 className="fw-bold">{t(home.partners.title)}</h2>
          <p className="text-secondary mb-0">{t(home.partners.subtitle)}</p>
        </div>

        <div className="row g-3 justify-content-center">
          {home.partners.items.map((partner) => (
            <div
              key={partner.name.en}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
            >
              <div className="partner-card text-center h-100">
                <div className="partner-name">{t(partner.name)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home_Slider;