import { Button } from "@/components/ui/button";
import { langType } from "@/lib/constants";
import { courses } from "@/lib/data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const ProductView = () => {
 const { i18n, t } = useTranslation();
 const { id } = useParams();
 const [showVideo, setShowVideo] = useState(false);

 const course = courses.find(
  (course) => id && course.link === id.split("::")[1]
 );

 return (
  <>
   <div className="bg-secondary">
    <div className="grid lg:grid-cols-2 gap-8 px-8 pt-24 pb-32 items-center max-w-7xl mx-auto">
     <div>
      <div>
       <h1 className="text-4xl font-semibold">
        {course?.[i18n.language as langType]?.title || "Course Title"}
       </h1>
       <p className="text-sm mt-6 text-gray-600">
        {course?.[i18n.language as langType]?.desc || "Course Description"}
       </p>
       <p className="text-sm mt-2 text-gray-600">
        <span className="font-semibold">
         {t("landing.productView.hero.instructor")}:
        </span>{" "}
        <span className="underline">
         {course?.[i18n.language as langType]?.instructor || "Instructor Name"}
        </span>
       </p>
       <div className="mt-8 flex items-center gap-4">
        <div>
         <Button className="p-6">{t("landing.productView.hero.enroll")}</Button>
        </div>
        <div
         className={
          "flex gap-2 items-center" +
          (i18n.language === "ar" ? " flex-row-reverse tracking-tighter" : "")
         }
        >
         <p className="text-lg text-gray-500 line-through ml-2">
          {i18n.language === "ar"
           ? course?.ar?.price + " ৳"
           : "৳" + course?.[i18n.language as langType]?.price || "৳0"}
         </p>
         <p className="text-xl font-semibold">
          {i18n.language === "ar"
           ? course?.ar?.reducedPrice + " ৳"
           : "৳" + course?.[i18n.language as langType]?.reducedPrice || "৳0"}
         </p>
        </div>
       </div>
      </div>
     </div>
     <div className="flex justify-center lg:justify-end">
      {!showVideo ? (
       <div className="p-2 bg-white border border-input relative">
        <img
         className="w-full max-w-[500px] aspect-video"
         src="https://cdn.10minuteschool.com/images/Thumbnails/sohoje_spoken_arbi_16x9.jpg?w=867&h=480"
         alt="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full p-2">
         <div className="bg-black bg-opacity-20 w-full h-full"></div>
        </div>
        <Button
         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-3 h-auto"
         onClick={() => setShowVideo(true)}
        >
         <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
         >
          <path
           fillRule="evenodd"
           d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
           clipRule="evenodd"
          />
         </svg>
        </Button>
       </div>
      ) : (
       <iframe
        className="aspect-video w-full max-w-[500px] bg-white border border-input p-2"
        src="https://www.youtube.com/embed/jZD32FvI2Fk?autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
       ></iframe>
      )}
     </div>
    </div>
   </div>
   <div className="px-8">
    <div className="-mt-14 w-full max-w-7xl mx-auto bg-background rounded-lg border border-input shadow-lg">
     <div className="grid grid-cols-4">
      {[
       {
        title: t("landing.productView.shortInfo.0"),
        value:
         course?.[i18n.language as langType]?.shortInfo?.duration || "N/A",
       },
       {
        title: t("landing.productView.shortInfo.1"),
        value: course?.[i18n.language as langType]?.shortInfo?.videos || "N/A",
       },
       {
        title: t("landing.productView.shortInfo.2"),
        value: course?.[i18n.language as langType]?.shortInfo?.notes || "N/A",
       },
       {
        title: t("landing.productView.shortInfo.3"),
        value:
         course?.[i18n.language as langType]?.shortInfo?.flexibility || "N/A",
       },
      ].map((info, index) => (
       <div key={index} className="p-6 border-r border-input">
        <p className="text-lg font-semibold">{info.value}</p>
        <p className="text-xs text-gray-500">{info.title}</p>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 );
};
