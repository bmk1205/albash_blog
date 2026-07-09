import { useMemo, useState } from "react";
import { Carousel } from "react-bootstrap";
import { SITE_CONTENT } from "../../../Constants/siteContent";
import logo from "../../../assets/Images/logo.jpg";
import laundry from "../../../assets/Images/laundary.jpg";
import { useAppPreferences } from "../../../context/AppPreferences";

export const Blogs = () => {
  const { t } = useAppPreferences();
  const [visibleCount, setVisibleCount] = useState(6);
  const imageByKey = { logo, laundry };

  const visibleBlogs = SITE_CONTENT.blogs.slice(0, visibleCount);
  const slides = useMemo(() => {
    const chunkSize = 2;
    const blogChunks = [];
    for (let index = 0; index < visibleBlogs.length; index += chunkSize) {
      blogChunks.push(visibleBlogs.slice(index, index + chunkSize));
    }
    return blogChunks;
  }, [visibleBlogs]);

  return (
    <section className="container py-5">
      <div className="mb-4">
        <h1 className="fw-bold">{t(SITE_CONTENT.blogPage.title)}</h1>
        <p className="text-secondary mb-0">{t(SITE_CONTENT.blogPage.subtitle)}</p>
      </div>

      <Carousel interval={null} indicators={slides.length > 1}>
        {slides.map((slide, slideIndex) => (
          <Carousel.Item key={`slide-${slideIndex}`}>
            <div className="row g-4">
              {slide.map((blog) => (
                <div className="col-md-6" key={blog.title.en}>
                  <div className="card h-100 shadow-sm border-0 blog-card">
                    <img
                      src={imageByKey[blog.image] || laundry}
                      className="card-img-top blog-card-image"
                      alt={t(blog.title)}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{t(blog.title)}</h5>
                      <p className="card-text text-secondary">{t(blog.summary)}</p>
                      <small className="text-muted">{blog.date}</small>
                    </div>
                  </div>
                </div>
              ))}
              {slide.length === 1 && <div className="col-md-6" />}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {visibleCount < SITE_CONTENT.blogs.length && (
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setVisibleCount((prev) => prev + 4)}
          >
            {t(SITE_CONTENT.blogPage.showMore)}
          </button>
        </div>
      )}
    </section>
  );
};