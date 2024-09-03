import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "../component/MenuItem";
import CategoryFilter from "../component/CategoryFilter ";

import category_bg from "../assets/images/category_bg.jpg";
import menu_logo from "../assets/images/menu_logo.png";
import hotDrink from "../assets/images/coffeeArtuk.jpg";
import coldDrinkAllMenu from "../assets/images/coldDrinkAllMenu.jpg";
import tralichaAllMenu from "../assets/images/tralichaAllMenu.jpg";
import bademAllMenu from "../assets/images/bademAllMenu.jpg";
import chocolate from "../assets/images/chooclate.jpg";
import fruitAllMenu from "../assets/images/fruitAllMenu.jpg";
import artukbey_turk_kahvesi_100gr from "../assets/images/artukbey-turk-kahvesi-100gr.jpg";
import special_kahve_100gr from "../assets/images/special-kahve-100gr.jpeg";
import menengic_kahve_100gr from "../assets/images/menengic-kahve-100gr.jpeg";
import artukbey_damla_sakizli_turk_kahvesi_100gr from "../assets/images/artukbey_damla_sakizli_turk_kahvesi_100gr.jpg";
import menengic_coffee_dibek_100gr from "../assets/images/menengic_coffee_dibek_100gr.webp";
import dibek_coffee_artukbey_turkish_coffee_400g from "../assets/images/dibek_coffee_artukbey_turkish_coffee_400g.webp";
import artukbey_special_damla_sakizli_dibek from "../assets/images/artukbey_special_damla_sakizli_dibek.jpg";
import artukbeydibek_7_kahve_3_bitki_special from "../assets/images/artukbey_dibek_7_kahve_3_bitki_special.jpg";
import damlasakizli_turk_kahvesi_teneke_kutu from "../assets/images/damlasakizli_turk_kahvesi_teneke_kutu.jpg";
import special_damlasakizli_dibek_kahvesi_ten from "../assets/images/special_damlasakizli_dibek_kahvesi_ten.jpg";
import artukbey_suryani_dibek_kahvesi_400gr from "../assets/images/artukbey_suryani_dibek_kahvesi_400gr.jpg";
import special_damla_sakizli_dibek_kahvesi_300gr from "../assets/images/special_damla_sakizli_dibek_kahvesi_300gr.jpg";
import artukbey_menengic_kahvesi_300gr from "../assets/images/artukbey_menengic_kahvesi_300gr.jpg";
import artukbey_antep_fistikli_dibek_kahvesi from "../assets/images/artukbey_antep_fistikli_dibek_kahvesi.jpg";
import Artukbey_Sade_Dibek_Turk_Coffee_300gr from "../assets/images/Artukbey_Sade_Dibek_Turk_Coffee_300gr.jpg";
import Special_Dibek_Kahvesi_300gr from "../assets/images/Special_Dibek_Kahvesi_300gr.jpg";
import Bitter_Cikolatali_Dibek_Coffee_400gr from "../assets/images/Bitter_Cikolatali_Dibek_Coffee_400gr.jpg";
import Artukbey_Damla_Sakizli_Turk_Coffee_400gr from "../assets/images/Artukbey_Damla_Sakizli_Turk_Coffee_400gr.jpg";
import Artukbey_Findikli_Dibek_Coffee_300gr from "../assets/images/Artukbey_Findikli_Dibek_Coffee_300gr.jpg";
import Srtukbey_Kakuleli_Dibek_Coffee_400gr from "../assets/images/Srtukbey_Kakuleli_Dibek_Coffee_400gr.jpg";
import Artukbey_7_Si_1_Arada_Dibek_Coffee_300gr from "../assets/images/Artukbey_7_Si_1_Arada_Dibek_Coffee_300gr.jpg";
import Artukbey_Sade_Dibek_Turkish_Coffee_Kese from "../assets/images/Artukbey_Sade_Dibek_Turkish_Coffee_Kese.jpg";
import Special_Dibek_Coffee_Kese_100gr from "../assets/images/Special_Dibek_Coffee_Kese_100gr.jpg";
import Artukbey_Kakuleli_Dibek_Coffee_Kese from "../assets/images/Artukbey_Kakuleli_Dibek_Coffee_Kese.jpg";
import Artukbey_Menengic_Coffee_kese_200gr from "../assets/images/Artukbey_Menengic_Coffee_kese_200gr.jpg";
import Artukbey_Suryani_Dibek_Coffee_Kese_200gr from "../assets/images/Artukbey_Suryani_Dibek_Coffee_Kese_200gr.jpg";
import Artukbey_7_Si_Bir_Arada_Dibek_Coffee_100gr from "../assets/images/Artukbey_7_Si_Bir_Arada_Dibek_Coffee_100gr.jpg";
import Artukbey_Damla_Sakizli_Dibek_Coffee_100gr from "../assets/images/Artukbey_Damla_Sakizli_Dibek_Coffee_100gr.jpg";
import Artukbey_Kayisili_Dibek_Coffee_Kese_200gr from "../assets/images/Artukbey_Kayisili_Dibek_Coffee_Kese_200gr.jpg";
import Special_Damla_Sakizli_Dibek_Kese_100gr from "../assets/images/Special_Damla_Sakizli_Dibek_Kese_100gr.jpg";
import Espresso_Coffee_Cekirdegi_1kg from "../assets/images/Espresso_Coffee_Cekirdegi_1kg.jpg";
// PICES COFFEE
import Artukbey_Filtre_Coffee_1_kg from "../assets/images/Artukbey_Filtre_Coffee_1_kg.jpg";
import Classic_Filtre_Coffee_250gr from "../assets/images/Classic_Filtre_Coffee_250gr.jpg";
import Costa_Rica_Filtre_Coffee_250gr from "../assets/images/Costa_Rica_Filtre_Coffee_250gr.jpg";
import Kenya_Filtre_Coffee_Cekirdegi_250gr from "../assets/images/Kenya_Filtre_Coffee_Cekirdegi_250gr.jpg";
import Ethiopia_Filtre_Coffee_Cekirdegi_250gr from "../assets/images/Ethiopia_Filtre_Coffee_Cekirdegi_250gr.jpg";
import Columbia_Filtre_Cpffee_250gr from "../assets/images/Columbia_Filtre_Cpffee_250gr.jpg";
import Blend_Filtre_Coffee_250gr from "../assets/images/Blend_Filtre_Coffee_250gr.jpg";
import Guatemala_Filtre_Coffee_Cekirdegi_250gr from "../assets/images/Guatemala_Filtre_Coffee_Cekirdegi_250gr.jpg";
// TAKEAWAY COFFEE
//3u_1_Arada_Klasik_48_Adet_18gr 3 in 1 Classic (48 pieces * 18gr)
import u_1_Arada_Klasik_48_Adet_18gr from "../assets/images/3u_1_Arada_Klasik_48_Adet_18gr.jpg";
import u_1_Arada_Fistikli_48_Adet18gr from "../assets/images/3u_1_Arada_Fistikli_48_Adet18gr.jpg";
import u_1_Arada_Findikli_48_Adet18gr from "../assets/images/3u_1_Arada_Findikli_48_Adet18gr.jpg";
import u_1_Srada_Extra_Coffee_48_Adet18gr from "../assets/images/3u_1_Srada_Extra_Coffee_48_Adet18gr.jpg";
import Clasic_Coffee_50_Adet2gr from "../assets/images/Clasic_Coffee_50_Adet2gr.jpg";
import si_1_Arada_Special_Dibek_Coffee_48_Ade_18gr from "../assets/images/7si_1_Arada_Special_Dibek_Coffee_48_Ade_18gr.jpg";
import si_1_Arada_Sekersiz_48_adet12gr from "../assets/images/2si_1_Arada_Sekersiz_48_adet12gr.jpg";
import Gold_Coffee_50_adet2gr from "../assets/images/Gold_Coffee_50_adet2gr.jpg";
import Hazirset_Sicak_Cikolata_40_adet25gr from "../assets/images/Hazirset_Sicak_Cikolata_40_adet25gr.jpg";
import Sade_Turkish_Coffee_Hazir_Set from "../assets/images/Sade_Turkish_Coffee_Hazir_Set.jpg";
import Special_Menengic_Coffee_Hazir_Set from "../assets/images/Special_Menengic_Coffee_Hazir_Set.jpg";
import Special_Damla_Sakizli_Dibek_Coffee from "../assets/images/Special_Damla_Sakizli_Dibek_Coffee.jpg";


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeSubcategory, setActiveSubcategory] = useState("ALL COFFEE");
  const location = useLocation();
  const path = location.pathname;

  const allMenuItems = [
    {
      imgSrc: Special_Damla_Sakizli_Dibek_Coffee,
      altText: " Special_Damla_Sakizli_Dibek_Coffee Coffee",
      title: "Special Damla Gum Dibek Coffee",
      description: "Coffee",
      price: "........... 16,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: Special_Menengic_Coffee_Hazir_Set,
      altText: " Special_Menengic_Coffee_Hazir_Set Coffee",
      title: "Special Meningic Coffee Ready Set",
      description: "Coffee",
      price: "........... 16,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: Sade_Turkish_Coffee_Hazir_Set,
      altText: " Sade_Turkish_Coffee_Hazir_Set Coffee",
      title: "Plain Turkish Coffee Ready Set",
      description: "Coffee",
      price: "........... 10,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: Hazirset_Sicak_Cikolata_40_adet25gr,
      altText: " Hazirset_Sicak_Cikolata_40_adet25gr Coffee",
      title: "Ready Hot Chocolate (40 pieces * 25gr)",
      description: "Coffee",
      price: "........... 51,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: Gold_Coffee_50_adet2gr,
      altText: " Gold_Coffee_50_adet2gr Coffee",
      title: "Gold Coffee (50 Piece * 2gr)",
      description: "Coffee",
      price: "........... 21,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: si_1_Arada_Special_Dibek_Coffee_48_Ade_18gr,
      altText: " si_1_Arada_Special_Dibek_Coffee_48_Ade_18gr Coffee",
      title: "7in1 Arada Special Dibek Coffee (48 Piece * 18gr)",
      description: "Coffee",
      price: "........... 21,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: si_1_Arada_Sekersiz_48_adet12gr,
      altText: " si_1_Arada_Sekersiz_48_adet12gr Coffee",
      title: "2si 1 Between Sugar-Free (48 pieces * 12gr)",
      description: "Coffee",
      price: "........... 21,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: Clasic_Coffee_50_Adet2gr,
      altText: " Clasic_Coffee_50_Adet2gr Coffee",
      title: "Classic Coffee (50 Piece * 2gr)",
      description: "Coffee",
      price: "........... 21,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: u_1_Srada_Extra_Coffee_48_Adet18gr,
      altText: " 3u_1_Srada_Extra_Coffee_48_Adet18gr Coffee",
      title: "3u 1 Srada Extra Coffee 48 Quantity_18gr",
      description: "Coffee",
      price: "........... 21,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: u_1_Arada_Findikli_48_Adet18gr,
      altText: "3u_1_Arada_Findikli_48_Adet18gr Coffee",
      title: "3u 1 Arada Hazelnut 48 Piece18gr",
      description: "Coffee",
      price: "........... 2,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: u_1_Arada_Fistikli_48_Adet18gr,
      altText: "3u_1_Arada_Fistikli_48_Adet18gr Coffee",
      title: "3u 1 Arada Pistachio 48 Pieces18gr",
      description: "Coffee",
      price: "........... 2,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: u_1_Arada_Klasik_48_Adet_18gr,
      altText: "3u_1_Arada_Klasik_48_Adet_18gr Coffee",
      title: "3 in 1 Classic (48 pieces * 18gr)",
      description: "Coffee",
      price: "........... 2,000 IQD",
      category: "HOT DRINK",
      type: "TAKEAWAY COFFEE"
    },
    {
      imgSrc: Guatemala_Filtre_Coffee_Cekirdegi_250gr,
      altText: "Guatemala_Filtre_Coffee_Cekirdegi_250gr Coffee",
      title: "Guatemala Filtre Coffee Cekirdegi 250gr",
      description: "Coffee",
      price: "...........43,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: Blend_Filtre_Coffee_250gr,
      altText: "Blend_Filtre_Coffee_250gr Coffee",
      title: "Blend Filtre Coffee 250gr",
      description: "Coffee",
      price: "...........35,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: Columbia_Filtre_Cpffee_250gr,
      altText: "Columbia_Filtre_Cpffee_250gr Coffee",
      title: "Columbia Filtre Cpffee 250gr",
      description: "Coffee",
      price: "...........22,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: Ethiopia_Filtre_Coffee_Cekirdegi_250gr,
      altText: "Ethiopia_Filtre_Coffee_Cekirdegi_250gr Coffee",
      title: "Ethiopia Filtre Coffee Cekirdegi 250gr",
      description: "Coffee",
      price: "...........25,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: Kenya_Filtre_Coffee_Cekirdegi_250gr,
      altText: "Kenya_Filtre_Coffee_Cekirdegi_250gr Coffee",
      title: "Kenya Filtre Coffee Cekirdegi 250gr",
      description: "Coffee",
      price: "...........15,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: Costa_Rica_Filtre_Coffee_250gr,
      altText: "Costa_Rica_Filtre_Coffee_250gr Coffee",
      title: "Costa Rica Filtre Coffee 250gr",
      description: "Coffee",
      price: "........... 7,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: Classic_Filtre_Coffee_250gr,
      altText: "Classic_Filtre_Coffee_250gr Coffee",
      title: "Classic Filtre Coffee 250gr",
      description: "Coffee",
      price: "........... 4,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: Artukbey_Filtre_Coffee_1_kg,
      altText: "Artukbey_Filtre_Coffee_1_kg Coffee",
      title: "Artukbey Filtre Coffee 1 kg",
      description: "Coffee",
      price: "........... 5,000 IQD",
      category: "HOT DRINK",
      type: "PICES COFFEE"
    },
    {
      imgSrc: special_kahve_100gr,
      altText: "Turkish Coffee",
      title: "Special Coffe 100gr ",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Espresso_Coffee_Cekirdegi_1kg,
      altText: "Espresso_Coffee_Cekirdegi_1kg Coffee",
      title: "Espresso Coffee Cekirdegi 1kg",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Special_Damla_Sakizli_Dibek_Kese_100gr,
      altText: "Special_Damla_Sakizli_Dibek_Kese_100gr Coffee",
      title: "Special Damla Sakizli Dibek Kese 100gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Kayisili_Dibek_Coffee_Kese_200gr,
      altText: "Artukbey_Kayisili_Dibek_Coffee_Kese_200gr Coffee",
      title: "Artukbey Kayisili Dibek Coffee Kese 200gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Damla_Sakizli_Dibek_Coffee_100gr,
      altText: "Artukbey_Damla_Sakizli_Dibek_Coffee_100gr Coffee",
      title: "Artukbey Damla Sakizli Dibek Coffee 100gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_7_Si_Bir_Arada_Dibek_Coffee_100gr,
      altText: "Artukbey_7_Si_Bir_Arada_Dibek_Coffee_100gr Coffee",
      title: "Artukbey 7 Si Bir Arada Dibek Coffee 100gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Suryani_Dibek_Coffee_Kese_200gr,
      altText: "Artukbey_Suryani_Dibek_Coffee_Kese_100gr Coffee",
      title: "Artukbey Suryani Dibek Coffee Kese 100gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Menengic_Coffee_kese_200gr,
      altText: "Artukbey_Menengic_Coffee_kese_100gr Coffee",
      title: "Artukbey Menengic Coffee kese 100gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Kakuleli_Dibek_Coffee_Kese,
      altText: "Artukbey_Kakuleli_Dibek_Coffee_Kese Coffee",
      title: "Artukbey Kakuleli Dibek Coffee Kese 100gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Special_Dibek_Coffee_Kese_100gr,
      altText: "Special_Dibek_Coffee_Kese_100gr Coffee",
      title: "Special Dibek Coffee Kese 100gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Sade_Dibek_Turkish_Coffee_Kese,
      altText: "Artukbey_Sade_Dibek_Turkish_Coffee_Kese Coffee",
      title: "Artukbey Sade Dibek Turkish Coffee Kese 100gr",
      description: "Coffee",
      price: "........... 8,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_7_Si_1_Arada_Dibek_Coffee_300gr,
      altText: "Artukbey_7_Si_1_Arada_Dibek_Coffee_300gr Coffee",
      title: "Artukbey 7 Si 1 Arada Dibek Coffee 300gr",
      description: "Coffee",
      price: "........... 13,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Srtukbey_Kakuleli_Dibek_Coffee_400gr,
      altText: "Srtukbey_Kakuleli_Dibek_Coffee_400gr Coffee",
      title: "Srtukbey Kakuleli Dibek Coffee 400gr",
      description: "Coffee",
      price: "........... 10,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Findikli_Dibek_Coffee_300gr,
      altText: "Artukbey_Findikli_Dibek_Coffee_300gr Coffee",
      title: "Artukbey Findikli Dibek Coffee 300gr",
      description: "Coffee",
      price: "........... 7,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Damla_Sakizli_Turk_Coffee_400gr,
      altText: "Artukbey_Damla_Sakizli_Turk_Coffee_400gr Coffee",
      title: "Artukbey Damla Sakizli Turk Coffee 400gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Bitter_Cikolatali_Dibek_Coffee_400gr,
      altText: "Bitter_Cikolatali_Dibek_Coffee_400gr Coffee",
      title: "Bitter Cikolatali Dibek Coffee 400gr",
      description: "Coffee",
      price: "........... 4,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Special_Dibek_Kahvesi_300gr,
      altText: "Special_Dibek_Kahvesi_300gr Coffee",
      title: "Special Dibek Coffee 300gr",
      description: "Coffee",
      price: "........... 4,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: Artukbey_Sade_Dibek_Turk_Coffee_300gr,
      altText: "Artukbey_Sade_Dibek_Turk_Coffee_300gr Coffee",
      title: "Artukbey Sade Dibek Turk Coffee 300gr",
      description: "Coffee",
      price: "........... 4,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: artukbey_antep_fistikli_dibek_kahvesi,
      altText: "artukbey_antep_fistikli_dibek_kahvesi Coffee",
      title: "Artukbey Antep Fistikli Dibek Coffee",
      description: "Coffee",
      price: "........... 4,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: artukbey_menengic_kahvesi_300gr,
      altText: "artukbey_menengic_kahvesi_300gr Coffee",
      title: "Artukbey Menengic Coffee 300gr",
      description: "Coffee",
      price: "........... 4,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: special_damla_sakizli_dibek_kahvesi_300gr,
      altText: "special_damla_sakizli_dibek_kahvesi_300gr Coffee",
      title: "Special Damla Sakizli Dibek Cffee 300gr",
      description: "Coffee",
      price: "........... 9,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: artukbey_suryani_dibek_kahvesi_400gr,
      altText: "artukbey_suryani_dibek_kahvesi_400gr Coffee",
      title: "Artukbey Suryani Dibek Coffee 400gr",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: special_damlasakizli_dibek_kahvesi_ten,
      altText: "special_damlasakizli_dibek_kahvesi_ten Coffee",
      title: "Special Damlasakizli Dibek Coffee Ten",
      description: "Coffee",
      price: "........... 8,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: damlasakizli_turk_kahvesi_teneke_kutu,
      altText: "damlasakizli_turk_kahvesi_teneke_kutu Coffee",
      title: "Damla Sakizli Turkish Coffee Teneke Kutu",
      description: "Coffee",
      price: "........... 15,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: artukbeydibek_7_kahve_3_bitki_special,
      altText: "artukbeydibek_7_kahve_3_bitki_special Coffee",
      title: "Artukbey Dibek 7 Coffee 3 Bitki Special",
      description: "Coffee",
      price: "........... 15,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: dibek_coffee_artukbey_turkish_coffee_400g,
      altText: "dibek_coffee_artukbey_turkish_coffee_400g Coffee",
      title: "Dibek Coffee Artukbey Turkish Coffee 400g",
      description: "Coffee",
      price: "........... 15,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: artukbey_special_damla_sakizli_dibek,
      altText: "Turkish Coffee",
      title: "Artukbey Special Damla Sakizli Dibek ",
      description: "Coffee",
      price: "........... 15,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: menengic_coffee_dibek_100gr,
      altText: "Turkish Coffee",
      title: "Special Menengic Dibek 250gr ",
      description: "Coffee",
      price: "........... 15,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: artukbey_damla_sakizli_turk_kahvesi_100gr,
      altText: "Turkish Coffee",
      title: "Artukbey Damla Sakizli Turk Coffee 100gr ",
      description: "Coffee",
      price: "........... 7,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: menengic_kahve_100gr,
      altText: "Turkish Coffee",
      title: "Menengic Coffee 100gr ",
      description: "Coffee",
      price: "........... 6,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    
    {
      imgSrc: hotDrink,
      altText: "Turkish Coffee",
      title: "Turkish Coffee",
      description: "2/3 espresso, 1/3 steamed milk",
      price: "........... 2,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    {
      imgSrc: artukbey_turk_kahvesi_100gr,
      altText: "Turkish Coffee",
      title: "Artukbey Turk Coffee 100gr",
      description: "Coffee",
      price: "........... 7,000 IQD",
      category: "HOT DRINK",
      type: "PAWDER COFFEE"
    },
    
  
    {
      imgSrc: coldDrinkAllMenu,
      altText: "Milk Coffee",
      title: "Milk Shake Lotos",
      description: "1/3 Chocolate, 2/3 steamed milk",
      price: "........... 6,000 IQD",
      category: "COLD DRINK",
    },
    {
      imgSrc: tralichaAllMenu,
      altText: "Tralicha Cake",
      title: "Tralicha Cake",
      description: "1/3 Chocolate, 2/3 steamed milk",
      price: "........... 3,000 IQD",
      category: "CAKE",
    },
    {
      imgSrc: bademAllMenu,
      altText: "Badem",
      title: "Badem",
      description: "Calorie-rich almond treat",
      price: "........... 10,000 IQD",
      category: "NUT",
    },
    {
      imgSrc: chocolate,
      altText: "Dark Chocolate",
      title: "Dark Chocolate",
      description: "2/3 Cocoa solids, 1/3 Sugar",
      price: "........... 7,000 IQD",
      category: "SWEET",
    },
    {
      imgSrc: fruitAllMenu,
      altText: "Fruit",
      title: "Fruit",
      description: "Natural Sugar",
      price: "........... 5,000 IQD",
      category: "FRUIT",
    },
  ];

  const allCategories = ["ALL", "HOT DRINK", "COLD DRINK", "SWEET", "NUT", "CAKE", "FRUIT"];
  const hotDrinkCategories = ["ALL COFFEE", "PAWDER COFFEE", "PICES COFFEE", "TAKEAWAY COFFEE"];

  const filteredMenuItems = allMenuItems.filter(item => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "HOT DRINK" && activeSubcategory !== "ALL COFFEE") {
      return item.category === activeCategory && item.type === activeSubcategory;
    }
    return item.category === activeCategory;
  });

  useEffect(() => {
    // Reset the subcategory when the main category changes
    setActiveSubcategory("ALL COFFEE");
  }, [activeCategory]);

  return (
    <section
      className="section bg-cover bg-center min-h-screen py-5"
      style={{ backgroundImage: `url(${category_bg})` }}
    >
      <div className="container mx-auto p-5 max-w-[1300px]">
        {/* Text Section */}
        <div className="text-center my-12">
          <div className="text-yellow-500 uppercase">Choose Best Coffee</div>
          <h3 className="text-4xl font-bold text-white my-4">
            Artukbey Kahve Menu
          </h3>
        </div>

        {/* Category Filter */}
        {path !== "/" && (
          <>
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              categories={allCategories}
            />
            {activeCategory === "HOT DRINK" && (
              <CategoryFilter
                activeCategory={activeSubcategory}
                setActiveCategory={setActiveSubcategory}
                categories={hotDrinkCategories}
              />
            )}
          </>
        )}

        {/* Menu Items */}
        <div
          className="bg-black/40 flex justify-center items-center rounded-lg relative px-5 py-10"
          style={{ backgroundImage: `url(${menu_logo})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-20">
            {filteredMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                imgSrc={item.imgSrc}
                altText={item.altText}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
