import Galmagal from "./assets/images/songs-images/Galmagal.jpg";
import GalmagalSong from "./assets/musics/[GALMAGAL] - EMIN&ALMA ft LA BLAZE.mp3";
import TurkmenSes from "./assets/images/songs-images/turkmenSes.jpg";
import DaliParty from "./assets/images/songs-images/dali-party.jpg";

export default [
  {
    sys: {
      id: 23,
    },
    fields: {
      name: "Galmagal",
      new: true,
      singers: ["Emin Rasen, ", "Alma"],
      songurl: GalmagalSong,
      atag: "../assets/musics/[GALMAGAL] - EMIN&ALMA ft LA BLAZE.mp3",
      images: [
        {
          fields: {
            file: {
              url: Galmagal,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 22,
    },
    fields: {
      name: "Turkmen Ses",
      new: true,
      singers: ["Emin Rasen, ", "khalegh2a, ", "brave zaman, ", "vahid vase3n"],
      images: [
        {
          fields: {
            file: {
              url: TurkmenSes,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 21,
    },
    fields: {
      name: "Dali Party",
      new: true,
      singers: ["Emin Rasen, ", " Shoxruz(Abadiya), ", "Fariza"],
      images: [
        {
          fields: {
            file: {
              url: DaliParty,
            },
          },
        },
      ],
    },
  },
];
