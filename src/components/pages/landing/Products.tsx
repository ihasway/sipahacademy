import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const Products = () => {
 const [t] = useTranslation();
 return (
  <>
   <Helmet>
    <title>{t("landing.products.meta.title")}</title>
   </Helmet>
  </>
 );
};
