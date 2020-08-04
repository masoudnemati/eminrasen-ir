import UNUT from "./assets/images/songs-images/unut.jpg";
import UNUTSong from "./assets/musics/Unut [Emin ft Shoxruz].mp3";
import Basla from "./assets/images/songs-images/basla.jpg";
import BaslaSong from "./assets/musics/Emin - Bashla(1).mp3";
import Aglama from "./assets/images/songs-images/aglama.jpg";
import AglamaSong from "./assets/musics/Emin Rasen &  Alma  (AĞLAMA).mp3";
import Ilim from "./assets/images/songs-images/Ilim.jpg";
import IlimSong from "./assets/musics/Ilim - Emin Rasen ft Alma.mp3";
import Alma from "./assets/images/songs-images/Alma.jpg";
import AlmaSong from "./assets/musics/Alma - Emin.mp3";
import RepBebek from "./assets/images/songs-images/Rep-Bebek.jpg";
import RepBebekSong from "./assets/musics/Rep Bebek - Emin.mp3";
import Bilgiler from "./assets/images/songs-images/Bilgiler.jpg";
import BilgilerSong from "./assets/musics/Emin - Bilgiler.mp3";

import Galmagal from "./assets/images/songs-images/Galmagal.jpg";
import GalmagalSong from "./assets/musics/[GALMAGAL] - EMIN&ALMA ft LA BLAZE.mp3";
import TurkmenSes from "./assets/images/songs-images/turkmenSes.jpg";
import TurkmenSesSong from "./assets/musics/Turkmen Ses.mp3";
import DaliParty from "./assets/images/songs-images/dali-party.jpg";
import DaliPartySong from "./assets/musics/Shoxruz_Abadiya_ - Party_ft Emin Rasen _ Fariza_.mp3";
import YADADİM from "./assets/images/songs-images/yadadim.jpg";
import YADADİMSong from "./assets/musics/Ýadadym .mp3";

export default [
  {
    sys: {
      id: 24,
    },
    fields: {
      name: "YADADİM",
      new: true,
      singers: ["Emin Rasen, ", "DarKray, ", "Begmyrat_K"],
      songurl: YADADİMSong,
      images: [
        {
          fields: {
            file: {
              url: YADADİM,
            },
          },
        },
      ],
    },
  },
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
      new: false,
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
  {
    sys: {
      id: 20,
    },
    fields: {
      name: "UNUT",
      new: false,
      singers: ["Emin Rasen, ", " Shoxruz(Abadiya)"],
      songurl: UNUTSong,
      images: [
        {
          fields: {
            file: {
              url: UNUT,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 19,
    },
    fields: {
      name: "Basla",
      new: false,
      singers: ["Emin Rasen"],
      songurl: BaslaSong,
      images: [
        {
          fields: {
            file: {
              url: Basla,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 18,
    },
    fields: {
      name: "Aglama",
      new: false,
      singers: ["Emin Rasen, ", " Alma"],
      songurl: AglamaSong,
      images: [
        {
          fields: {
            file: {
              url: Aglama,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 17,
    },
    fields: {
      name: "Ilim",
      new: false,
      singers: ["Emin Rasen, ", " Alma"],
      songurl: IlimSong,
      images: [
        {
          fields: {
            file: {
              url: Ilim,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 16,
    },
    fields: {
      name: "Alma",
      new: false,
      singers: ["Emin Rasen, ", " Alma"],
      songurl: AlmaSong,
      images: [
        {
          fields: {
            file: {
              url: Alma,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 15,
    },
    fields: {
      name: "Rep Bebek",
      new: false,
      singers: ["Emin Rasen"],
      songurl: RepBebekSong,
      images: [
        {
          fields: {
            file: {
              url: RepBebek,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: 14,
    },
    fields: {
      name: "Bilgiler",
      new: false,
      singers: ["Emin Rasen"],
      songurl: BilgilerSong,
      images: [
        {
          fields: {
            file: {
              url: Bilgiler,
            },
          },
        },
      ],
    },
  },
];
