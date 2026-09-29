
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Images/logo.jpg";
import { SITE_CONTENT } from "../../../Constants/siteContent";
import { useAppPreferences } from "../../../context/AppPreferences";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
const Home_Header = () => {
  const { theme, language, toggleTheme, setLanguage, t } = useAppPreferences();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      if (prevLanguage === "en") return "am";
      if (prevLanguage === "am") return "om";
      return "en";
    });
  };

  return (
    <>
      <Navbar
        expand="lg"
        bg={theme === "dark" ? "dark" : "light"}
        data-bs-theme={theme}
        className="border-bottom"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt={t(SITE_CONTENT.brand.logoAlt)}
              className="img-fluid mx-1 rounded icon"
            />
            {t(SITE_CONTENT.brand.name)}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-lg-center gap-lg-2">
              {SITE_CONTENT.navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link header-nav-link${isActive ? " active fw-semibold" : ""}`
                  }
                >
                  {t(item.label)}
                </NavLink>
              ))}
            </Nav>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 py-2 py-lg-0">
              <button
                type="button"
                className="btn btn-sm"
                onClick={toggleTheme}
                aria-label={t(SITE_CONTENT.controls.toggleTheme)}
              >
                {theme === "dark" ? (
                  <MdDarkMode className="icon2" />
                ) : (
                  <MdLightMode className="icon2" />
                )}
              </button>

              <button
                type="button"
                className="btn btn-sm d-flex align-items-center gap-1"
                onClick={toggleLanguage}
                aria-label={t(SITE_CONTENT.controls.toggleLanguage)}
                title={t(SITE_CONTENT.controls.toggleLanguage)}
              >
                <MdOutlineLanguage className="icon2" />
                <span className="small fw-semibold text-uppercase">
                  {language === "en"
                    ? t(SITE_CONTENT.languages.en)
                    : language === "am"
                      ? t(SITE_CONTENT.languages.am)
                      : t(SITE_CONTENT.languages.om)}
                </span>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home_Header;