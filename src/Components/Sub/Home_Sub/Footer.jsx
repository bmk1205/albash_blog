import { SITE_CONTENT } from "../../../Constants/siteContent";
import { useAppPreferences } from "../../../context/AppPreferences";
import {
  SiTiktok,
  SiTelegram,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";

export const Footer = () => {
  const { t, theme } = useAppPreferences();
  const socialIcons = {
    tiktok: SiTiktok,
    telegram: SiTelegram,
    facebook: SiFacebook,
    instagram: SiInstagram,
    linkedin: SiLinkedin,
  };

  return (
    <>
      <footer
        className={`text-center p-3 mt-auto footer-shell ${
          theme === "dark" ? "text-light" : "text-dark"
        }`}
      >
        <p className="mb-2 fw-semibold">{t(SITE_CONTENT.socialLinks.title)}</p>
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
          {SITE_CONTENT.socialLinks.items.map((item) => {
            const Icon = socialIcons[item.key];
            return (
              <a
                key={item.key}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={item.label}
                title={item.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <h6 className="mb-0">{t(SITE_CONTENT.brand.copyright)}</h6>
      </footer>
    </>
  );
};