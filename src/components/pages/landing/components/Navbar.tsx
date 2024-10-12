import { LANGUAGES } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import logo from "/uploads/sipahacademy-logo1.png";

import {
 NavigationMenu,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
 const { i18n, t } = useTranslation();

 const onChangeLang = (lang_code: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("lang", lang_code);
  localStorage.setItem("lang", lang_code);
  window.location.search = urlParams.toString();
 };

 return (
  <>
   <nav className="sticky top-0 left-0 w-full px-8 py-3 bg-background border-b border-input flex items-center gap-4 justify-between">
    <Link to="/">
     <div className="flex gap-1 items-center">
      <img src={logo} alt="profile" className="w-10 h-10 rounded-full" />
      <div className="font-medium">
       <h1 className="text-sm leading-[1.1rem]">
        {t("nav.title").split(" ")[0]}
       </h1>
       <h1 className="text-xs">{t("nav.title").split(" ")[1]}</h1>
      </div>
     </div>
    </Link>

    <NavigationMenu>
     <NavigationMenuList className="gap-4">
      <NavigationMenuItem>
       <Link to="/products">
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
         {t("nav.menu.0")}
        </NavigationMenuLink>
       </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
       <Link to="/about-us">
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
         {t("nav.menu.1")}
        </NavigationMenuLink>
       </Link>
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
  </>
 );
};

export default Navbar;
