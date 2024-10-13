import { Button } from "@/components/ui/button";
import { langType } from "@/lib/constants";
import { courses } from "@/lib/data";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const ProductView = () => {
 const { i18n, t } = useTranslation();
 const { id } = useParams();
 return (
  <>
   <div className="bg-secondary">
    <div className="grid lg:grid-cols-2 px-8 py-24 items-center max-w-7xl mx-auto">
     {courses.map((course, index) => {
      if (id && course.link === id.split("::")[1]) {
       return (
        <div key={index}>
         <h1 className="text-4xl font-semibold">
          {course[i18n.language as langType].title}
         </h1>
         <p className="text-sm mt-6 text-gray-600">
          {course[i18n.language as langType].desc}
         </p>
         <p className="text-sm mt-2 text-gray-600">
          <span className="font-semibold">
           {t("landing.productView.hero.instructor")}:
          </span>{" "}
          <span className="underline">
           {course[i18n.language as langType].instructor}
          </span>
         </p>
         <div className="mt-8 flex items-center gap-4">
          <div>
           <Button className="p-6">
            {t("landing.productView.hero.enroll")}
           </Button>
          </div>
          <div
           className={
            "flex gap-2 items-center" +
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
       );
      }
     })}
    </div>
   </div>
  </>
 );
};
