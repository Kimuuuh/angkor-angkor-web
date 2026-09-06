// Données complètes du menu Angkor & Angkor
const MENU = {
  entrees: {
    label: "Entrées",
    icon: "🥟",
    groups: [
      {
        title: "Fritures",
        items: [
          { name: "Nems croustillants (4 pcs)", desc: "Nems frits et croustillants, farcis au choix, vermicelles et légumes", variants: [["Porc", "6,90 €"], ["Poulet", "6,90 €"], ["Légumes", "6,90 €"], ["Crevettes", "7,50 €"]] },
          { name: "Gyozas croustillants (5 pcs)", desc: "Petits raviolis japonais délicatement poêlés, garnis au choix et de légumes", variants: [["Poulet", "7,50 €"], ["Légumes", "7,50 €"]] },
          { name: "Tempura de crevettes (4 pcs)", desc: "Crevettes enrobées d'une friture légère, croustillantes et dorées", price: "7,00 €" },
          { name: "Khoung (2 pcs)", desc: "Rouleaux frits et croustillants, farcis d'un mélange parfumé aux épices traditionnelles khmères", price: "8,00 €" },
          { name: "Ailes de poulet frites", desc: "Ailes de poulet marinées enrobées d'une friture légère, croustillantes et dorées", price: "7,50 €" },
          { name: "Cuisses de caille frites", desc: "Cuisses de caille marinées enrobées d'une friture légère, croustillantes et dorées", price: "10,50 €" },
        ]
      },
      {
        title: "Salades & soupes",
        items: [
          { name: "Soupe à la citronnelle", desc: "Bouillon réconfortant et acidulé à la viande au choix, herbes fraîches et citronnelle", variants: [["Poulet", "8,00 €"], ["Crevettes", "8,50 €"]] },
          { name: "Salade de bœuf grillé", desc: "Émincé de bœuf grillé, oignons rouges et assaisonnement citronné", price: "9,50 €" },
          { name: "Salade aux crevettes", desc: "Crevettes mêlées à des herbes aromatiques et une sauce acidulée", price: "10,50 €" },
          { name: "Rouleaux de printemps (2 pcs)", desc: "Rouleaux frais enveloppés de galettes de riz, garnis de crevettes, soja, carrottes, vermicelles et menthe fraîche", price: "7,90 €" },
        ]
      },
      {
        title: "À la vapeur",
        items: [
          { name: "Bouchées (4 pcs)", desc: "Petites bouchées cuites à la vapeur, tendres et parfumées", variants: [["Porc", "6,90 €"], ["Crevettes", "6,90 €"]] },
          { name: "Raviolis (4 pcs)", desc: "Raviolis vapeur légers et savoureux", variants: [["Légumes", "6,50 €"], ["Crevettes", "6,90 €"]] },
        ]
      },
    ]
  },

  specialites: {
    label: "Spécialités",
    icon: "🍲",
    groups: [
      {
        title: null,
        items: [
          { name: "Amok au poisson", price: "17,50 €", desc: "Filet de cabillaud fondant cuit à la vapeur dans une feuille de bananier, nappé d'un curry rouge onctueux au lait de coco et aux feuilles de bananier", img: "amok.svg" },
          { name: "Entrecôte à la sauce spéciale cambodgienne", price: "24,90 €", desc: "Bœuf grillé servi avec notre sauce spéciale cambodgienne et les légumes traditionnelles", img: "entrecote_cambodgienne.svg" },
          { name: "Somlor Machou Kroueng", price: "14,90 €", desc: "Soupe traditionnelle khmère acidulée au bœuf, pâte de krœung (aromates pilés), liserons d'eau et citronnelle", img: "somlor_machou.svg" },
          { name: "Khor Ko", price: "15,50 €", desc: "Bouillon riche et parfumé aux épices douces, pâtes de riz et morceaux de bœuf longuement mijotés", img: "khor_ko.svg" },
          { name: "Nom Banh Jok", price: "14,50 €", desc: "Vermicelles de riz nappés d'une sauce traditionnelle khmère au poisson et à la citronnelle, accompagnés de légumes crus croquants", img: "nom_banh_jok.svg" },
          { name: "Soupe Ko", price: "14,90 €", desc: "Soupe traditionnelle de bœuf aux herbes fraîches et bouillon limpide savoureux", img: "soupe_ko.svg" },
          { name: "Bok Lahong", price: "12,90 €", desc: "Papaye verte râpée, carottes, cacahuètes, herbes fraîches et vinaigrette traditionnelle légèrement relevée", img: "bok_lahong.svg" },
        ]
      }
    ]
  },

  plats: {
    label: "Plats",
    icon: "🍛",
    note: "(Accompagnement à part)",
    groups: [
      {
        title: null,
        items: [
          { name: "Bœuf grillé servi avec sa sauce au tamarin acidulée et des légumes", price: "22,90 €", desc: "Bœuf grillé servi avec sa sauce au tamarin acidulée et des légumes", img: "entrecote_tamarin.svg" },
          { name: "Viande choix mijotée dans un curry rouge parfumé au lait de coco", desc: "Viande au choix mijotée dans un curry rouge parfumé au lait de coco", img: "curry_rouge.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"], ["Crevettes", "14,90 €"], ["Tofu", "13,90 €"]] },
          { name: "Viande au choix sautée aux aromates et feuilles de basilic frais", desc: "Viande au choix sautée avec des feuilles de basilic", img: "saute_basilic.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"], ["Crevettes", "14,90 €"], ["Tofu", "13,90 €"]] },
          { name: "Viande sautée au wok avec de la citronnelle fraîche et des oignons", desc: "Viande au choix sautée à la citronnelle", img: "saute_citronnelle.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"]] },
          { name: "Brochettes à la citronnelle (3 pcs)", desc: "Brochettes de viande au choix marinée à la citronnelle et grillée à la flamme", img: "brochette_3pcs.svg", variants: [["Bœuf", "14,90 €"], ["Poulet", "13,90 €"]] },
          { name: "Poulet sauté à l'ananas frais et noix de cajou", price: "13,90 €", desc: "Mélange sucré-salé de poulet sauté avec des morceaux d'ananas frais et croquant de noix de cajou", img: "poulet_ananas.svg" },
          { name: "Travers de porc au sel et au poivre", price: "14,90 €", desc: "Petits morceaux de porc croustillants relevés au sel et au poivre", img: "travers_porc.svg" },
          { name: "Crevettes au sel et au poivre", price: "15,90 €", desc: "Crevettes croustillantes sautées au sel et poivre", img: "crevettes_sel_poivre.svg" },
          { name: "Saumon grillé à la sauce curry rouge", price: "15,90 €", desc: "Pavé de saumon tendre nappé d'une sauce curry rouge", img: "saumon_grille.svg" },
          { name: "Tofu et aubergines sautés aux feuilles de basilic", desc: "Aubergines et tofu sautés au wok avec des feuilles de basilic et des poivrons", price: "12,90 €", img: "tofu_aubergines.svg" },
        ]
      }
    ]
  },

  assiettes: {
    label: "Assiettes",
    icon: "🍽️",
    groups: [
      {
        title: null,
        items: [
          { name: "Brochettes à la citronnelle (2 pcs)", desc: "Assiette complète de deux généreuses brochettes de viande à la citronnelle, accompagnées de riz et d'une salade", img: "brochette_2pcs.svg", variants: [["Bœuf", "14,50 €"], ["Poulet", "13,50 €"]] },
          { name: "Assiette de nouilles sautées", desc: "Nouilles sautées au wok avec oeufs et petits légumes", img: "nouilles_sautees.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"], ["Crevettes", "14,90 €"], ["Légumes", "13,90 €"]] },
          { name: "Viande sautée aux oignons", desc: "Viande tendre sautée aux oignons et ciboulette, servie avec du riz", img: "viande_oignons.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"]] },
          { name: "Assiette de riz sauté", desc: "Riz sauté au wok avec oeufs et petits légumes", img: "riz_saute.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"], ["Crevettes", "14,90 €"], ["Légumes", "13,90 €"]] },
          { name: "Riz Loc-Lac", price: "15,90 €", desc: "Incontournable plat khmer de dés de bœuf marinés saisis au wok à l'ail, servis sur un lit de salade, oignons, tomates et riz rouge à la tomate (accompagné de son oeuf au plat et de sa sauce citron-poivre)", img: "riz_loclac.svg" },
          { name: "Riz avec cuisse de poulet grillée à la citronnelle", price: "13,90 €", desc: "Cuisse de poulet marinée à la citronnelle, grillée et servie avec du riz parfumé", img: "riz_poulet_grille.svg" },
          { name: "Riz avec poulet croustillant", desc: "Poulet frit à la croûte dorée et croustillante, servi avec du riz", price: "13,90 €", img: "riz_poulet_croustillant.svg" },
          { name: "Riz sauté à l'ananas", desc: "Riz parfumé sauté au wok avec des morceaux d'ananas et votre viande au choix", img: "riz_saute_ananas.svg", variants: [["Poulet", "15,90 €"], ["Crevettes", "16,90 €"]] },
          { name: "Pad thaï", desc: "Pâtes de riz sautées au wok avec oeufs, germes de soja et cacahuètes concassées", img: "pad_thai.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"], ["Crevettes", "14,90 €"], ["Légumes", "13,90 €"]] },
          { name: "Pâtes de riz sautées", desc: "Larges nouilles de riz sautées au choix, aux légumes et sauce savoureuse", img: "pates_riz.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"], ["Crevettes", "14,90 €"], ["Légumes", "13,90 €"]] },
          { name: "Bo Bun", desc: "Salade de vermicelles de riz, sauté aux oignons, nems croustillants, cacahuètes et menthe fraîche", img: "bo_bun.svg", variants: [["Bœuf", "13,90 €"], ["Poulet", "13,90 €"], ["Crevettes", "14,90 €"], ["Légumes", "13,90 €"]] },
        ]
      }
    ]
  },

  accompagnements: {
    label: "Accompagnements",
    icon: "🍚",
    groups: [
      {
        title: null,
        items: [
          { name: "Riz nature", price: "2,90 €" },
          { name: "Riz gluant à la vapeur", price: "3,90 €" },
          { name: "Riz sauté nature", price: "5,50 €" },
          { name: "Riz sauté à la sauce tomate", price: "5,50 €" },
          { name: "Nouilles sautées nature", price: "5,50 €" },
        ]
      }
    ]
  },

  desserts: {
    label: "Desserts",
    icon: "🍧",
    groups: [
      {
        title: null,
        items: [
          { name: "Perles de coco", price: "6,00 €" },
          { name: "Trois couleurs", price: "6,90 €" },
          { name: "Litchis au sirop", price: "4,90 €" },
          { name: "Ananas frais", price: "5,50 €" },
          { name: "Mangue fraîche", price: "6,00 €" },
          { name: "Flan avec riz gluant", price: "6,90 €" },
        ]
      }
    ]
  },
};
