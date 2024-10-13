import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const Landing = () => {
 const { t } = useTranslation();
 return (
  <>
  <Helmet>
    <title>{t("landing.main.meta.title")}</title>
    <meta name="description" content={t("landing.main.meta.description")} />
  </Helmet>
   <div className="grid lg:grid-cols-2 px-8 py-24 items-center max-w-7xl mx-auto">
    <div>
     <h1 className="text-4xl font-bold">{t("landing.main.hero.title")}</h1>
     <p className="text-lg mt-6 text-gray-500">{t("landing.main.hero.subtitle")}</p>
     <Button className="mt-6">{t("landing.main.hero.button")}</Button>
    </div>

    <div className="flex justify-center lg:justify-end">
     <div className="w-full max-w-md">
      <Input
       type="search"
       placeholder={t("landing.main.hero.search.placeholder")}
       className="py-5"
      />
      <div className="w-full bg-secondary/50 p-4 rounded-lg mt-4 border border-input">
       <div className="min-h-[200px]">
        <h3 className="text-xl font-semibold">{t("landing.main.hero.search.title")}</h3>
        <p className="text-gray-500 text-sm mt-2">{t("landing.main.hero.search.null")}</p>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="bg-primary text-primary-foreground px-8 py-14 rounded-t-3xl">
    <div className="text-center max-w-2xl mx-auto">
     <h1 className="text-4xl font-bold">{t("landing.main.courses.title")}</h1>
     <p className="text-lg mt-4 text-gray-400">{t("landing.main.courses.subtitle")}</p>
    </div>

    <div className="grid grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
     <div>
      <img
       src={`${import.meta.env.BASE_URL}uploads/sohoje_spoken_arbi_16x9.jpg`}
       alt="couimport Navbar from './components/Navbar';
rse"
       className="w-full object-cover rounded-t-lg aspect-w-16 aspect-h-9"
      />
      <div className="bg-secondary text-secondary-foreground p-4 rounded-b-lg">
       <h3 className="text-xl font-semibold">Easy Spoken Arabic</h3>
       <p className="text-gray-500 text-sm mt-2">Mahade Hasan</p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
