import Galmagal from "./assets/images/songs-images/Galmagal.jpg";
import GalmagalSong from "./assets/musics/[GALMAGAL] - EMIN&ALMA ft LA BLAZE.mp3";
import TurkmenSes from "./assets/images/songs-images/turkmenSes.jpg";
import TurkmenSesSong from "./assets/musics/Turkmen Ses.mp3";
import DaliParty from "./assets/images/songs-images/dali-party.jpg";
import DaliPartySong from "./assets/musics/Shoxruz_Abadiya_ - Party_ft Emin Rasen _ Fariza_.mp3";

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
      songurl: TurkmenSesSong,
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
      songurl: DaliPartySong,
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
