import { Button } from "@/components/ui/button";
import logo from "/uploads/sipahacademy-logo1.png";

import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { LANGUAGES } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";

export const Landing = () => {
 const { i18n, t } = useTranslation();

 const onChangeLang = (lang_code: string) => {
  i18n.changeLanguage(lang_code);
 };

 return (
  <>
   <nav className="sticky top-0 left-0 w-full px-8 py-3 bg-background border-b border-input flex items-center gap-4 justify-between">
    <div className="flex gap-1 items-center">
     <img src={logo} alt="profile" className="w-10 h-10 rounded-full" />
     <div className="font-medium">
      <h1 className="text-sm leading-[1.1rem]">
       {t("nav.title").split(" ")[0]}
      </h1>
      <h1 className="text-xs">{t("nav.title").split(" ")[1]}</h1>
     </div>
    </div>

    <NavigationMenu>
     <NavigationMenuList className="gap-4">
      <NavigationMenuItem>
       <NavigationMenuTrigger>{t("nav.menu.0")}</NavigationMenuTrigger>

       <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
       </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
       {/*<Link href="/docs" legacyBehavior passHref>*/}
       <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {t("nav.menu.1")}
       </NavigationMenuLink>
       {/*</Link>*/}
      </NavigationMenuItem>

      <NavigationMenuItem>
       <Select onValueChange={onChangeLang}>
        <SelectTrigger>
         <SelectValue
          placeholder={LANGUAGES.find((l) => l.code === i18n.language)?.label}
         />
        </SelectTrigger>
        <SelectContent>
         {LANGUAGES.map(({ code, label }) => (
          <SelectItem key={code} value={code}>
           {label}
          </SelectItem>
         ))}
        </SelectContent>
       </Select>
      </NavigationMenuItem>
     </NavigationMenuList>
    </NavigationMenu>
    <Button>{t("nav.button")}</Button>
   </nav>

   <div className="grid lg:grid-cols-2 px-8 py-24 items-center max-w-7xl mx-auto">
    <div>
     <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
     <p className="text-lg mt-6 text-gray-500">{t("hero.subtitle")}</p>
     <Button className="mt-6">{t("hero.button")}</Button>
    </div>

    <div className="flex justify-center lg:justify-end">
     <div className="w-full max-w-md">
      <Input
       type="search"
       placeholder={t("hero.search.placeholder")}
       className="py-5"
      />
      <div className="w-full bg-secondary/50 p-4 rounded-lg mt-4 border border-input">
       <div className="min-h-[200px]">
        <h3 className="text-xl font-semibold">{t("hero.search.title")}</h3>
        <p className="text-gray-500 text-sm mt-2">{t("hero.search.null")}</p>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="bg-primary text-primary-foreground px-8 py-14 rounded-t-3xl">
    <div className="text-center max-w-2xl mx-auto">
     <h1 className="text-4xl font-bold">{t("courses.title")}</h1>
     <p className="text-lg mt-4 text-gray-400">{t("courses.subtitle")}</p>
    </div>

    <div className="grid grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
     <div>
      <img
       src={`${import.meta.env.BASE_URL}uploads/sohoje_spoken_arbi_16x9.jpg`}
       alt="course"
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
