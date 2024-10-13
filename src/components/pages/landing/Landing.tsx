import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { langType } from "@/lib/constants";
import { Link } from "react-router-dom";
import { courses } from "@/lib/data";

export const Landing = () => {
 const { t, i18n } = useTranslation();

 return (
  <>
   <Helmet>
    <title>{t("landing.main.meta.title")}</title>
    <meta name="description" content={t("landing.main.meta.description")} />
   </Helmet>
   <div className="grid lg:grid-cols-2 px-8 py-24 items-center max-w-7xl mx-auto">
    <div>
     <h1 className="text-4xl font-bold">{t("landing.main.hero.title")}</h1>
     <p className="text-lg mt-6 text-gray-500">
      {t("landing.main.hero.subtitle")}
     </p>
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
        <h3 className="text-xl font-semibold">
         {t("landing.main.hero.search.title")}
        </h3>
        <p className="text-gray-500 text-sm mt-2">
         {t("landing.main.hero.search.null")}
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="bg-primary text-primary-foreground px-8 py-14 rounded-t-3xl">
    <div className="text-center max-w-2xl mx-auto">
     <h1 className="text-4xl font-bold">{t("landing.main.courses.title")}</h1>
     <p className="text-lg mt-4 text-gray-400">
      {t("landing.main.courses.subtitle")}
     </p>
    </div>

    <div className="grid grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
     {courses.map((course, index) => (
      <Link key={index} to={`/product/${course.type}::${course.link}`}>
       <div className="!max-w-[300px] cursor-pointer hover:transform hover:scale-105 transition-transform">
        <img
         src={`${import.meta.env.BASE_URL}uploads/${course.cover}`}
         alt="couimport { courses } from './../../../lib/data';
rse"
         className="w-full object-cover rounded-t-lg aspect-w-16 aspect-h-9"
        />
        <div className="bg-secondary text-secondary-foreground p-3 rounded-b-lg">
         <h3 className="font-semibold">
          {course[i18n.language as langType].title}
         </h3>
         <p className="text-gray-500 text-xs">
          {course[i18n.language as langType].instructor}
         </p>
         <div className="flex items-center justify-between gap-2">
          <span className="text-xs mt-2 inline-block bg-primary text-primary-foreground px-2 py-1 rounded">
           {course[i18n.language as langType].lang}
          </span>
          <div
           className={
            "mt-2 flex gap-2 items-center" +
            (i18n.language === "ar" ? " flex-row-reverse tracking-tighter" : "")
           }
          >
           <p className="text-sm text-gray-500 line-through ml-2">
            {i18n.language === "ar"
             ? course.ar.price + " ৳"
             : "৳" + course[i18n.language as langType].price}
           </p>
           <p className="text-md font-semibold">
            {i18n.language === "ar"
             ? course.ar.reducedPrice + " ৳"
             : "৳" + course[i18n.language as langType].reducedPrice}
           </p>
          </div>
         </div>
        </div>
       </div>
      </Link>
     ))}
    </div>
   </div>
  </>
 );
};
