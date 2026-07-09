import { PageSection } from "./PageSection";
import { SITE_CONTENT } from "../../../Constants/siteContent";

export const Garment = () => {
  const { garment } = SITE_CONTENT.pages;

  return <PageSection {...garment} />;
};