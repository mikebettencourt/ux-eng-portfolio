
// black and white
import bwBackyardShow from '../assets/photos/bw_backyard_show.jpg';
import bwBeachDune from '../assets/photos/bw_beach_dune.jpg';
import bwElPaso from '../assets/photos/bw_el_paso.jpg';
import bwFlatTire from '../assets/photos/bw_flat_tire.jpg';
import bwHatterasWaves from '../assets/photos/bw_hatteras_waves.jpg';
import bwLiaMirror from '../assets/photos/bw_lia_mirror.jpg';
import bwLiaVT from '../assets/photos/bw_lia_vt.jpg';
import bwOceanPlane from '../assets/photos/bw_ocean_plane.jpg';
import bwPlaneRockies from '../assets/photos/bw_plane.jpg';
import bwSamBball from '../assets/photos/bw_sam_bball.jpg';
import bwThanksgiving from '../assets/photos/bw_thanksgiving.jpg';
import bwTruroDune from '../assets/photos/bw_truro_dune.jpg';

// color 
import alpineCowboys from '../assets/photos/alpine_cowboys.jpg';
import bounceHouse from '../assets/photos/bounce_house.jpg';
import fenwayHomerun from '../assets/photos/fenway_homerun.jpg';
import gloucester from '../assets/photos/gloucester.jpg';
import harvardStadium from '../assets/photos/harvard-stadium.jpg';
import liaArubaPool from '../assets/photos/lia_aruba_pool.jpg';
import liaTri from '../assets/photos/lia_tri.jpg';
import oldOrchardDunes from '../assets/photos/old_orchard_sunrise_dunes.jpg';
import portlandLighthouse from '../assets/photos/portland_lighthouse.jpg';
import txSunrise from '../assets/photos/tx_sunrise.jpg';


const photos = [
  {
    id: 1,
    altText: "",
    subHeader: ".",
    src: bwThanksgiving,
    orientation: "landscape",
    color: "bw all",
  },
  {
    id: 2,
    altText: "",
    subHeader: ".",
    src: bwBackyardShow,
    orientation: "landscape",
    color: "bw all",
  },
  {
    id: 3,
    altText: "",
    subHeader: ".",
    src: bwBeachDune,
    orientation: "portrait",
    color: "bw all",
  },
  {
    id: 4,
    altText: "",
    subHeader: ".",
    src: bwElPaso,
    orientation: "portrait",
    color: "bw all",
  },
  {
    id: 5,
    altText: "",
    subHeader: ".",
    src: bwHatterasWaves,
    orientation: "landscape",
    color: "bw all",
  },
  {
    id: 6,
    altText: "",
    subHeader: ".",
    src: bwLiaMirror,
    orientation: "portrait",
    color: "bw all",
  },
  {
    id: 7,
    altText: "",
    subHeader: ".",
    src: bwPlaneRockies,
    orientation: "portrait",
    color: "bw all",
  },
  {
    id: 8,
    altText: "",
    subHeader: ".",
    src: bwSamBball,
    orientation: "landscape",
    color: "bw all",
  },
  {
    id: 9,
    altText: "",
    subHeader: ".",
    src: bwFlatTire,
    orientation: "portrait",
    color: "bw all",
  },
  {
    id: 10,
    altText: "",
    subHeader: ".",
    src: bwLiaVT,
    orientation: "landscape",
    color: "bw all",
  },
  {
    id: 11,
    altText: "",
    subHeader: ".",
    src: bwOceanPlane,
    orientation: "portrait",
    color: "bw all",
  },
  {
    id: 12,
    altText: "",
    subHeader: ".",
    src: bwTruroDune,
    orientation: "landscape",
    color: "bw all",
  },
  {
    id: 13,
    altText: "",
    subHeader: ".",
    src: alpineCowboys,
    orientation: "landscape",
    color: "color all",
  },
  {
    id: 14,
    altText: "",
    subHeader: ".",
    src: bounceHouse,
    orientation: "landscape",
    color: "color all",
  },
  {
    id: 15,
    altText: "",
    subHeader: ".",
    src: fenwayHomerun,
    orientation: "landscape",
    color: "color all",
  },
  {
    id: 16,
    altText: "",
    subHeader: ".",
    src: gloucester,
    orientation: "portrait",
    color: "color all",
  },
  {
    id: 17,
    altText: "",
    subHeader: "",
    src: harvardStadium,
    orientation: "portrait",
    color: "color all",
  },
  {
    id: 18,
    altText: "",
    subHeader: "",
    src: liaArubaPool,
    orientation: "landscape",
    color: "color all",
  },
  {
    id: 19,
    altText: "",
    subHeader: "",
    src: liaTri,
    orientation: "landscape",
    color: "color all",
  },
  {
    id: 20,
    altText: "",
    subHeader: "",
    src: oldOrchardDunes,
    orientation: "landscape",
    color: "color all",
  },
  {
    id: 21,
    altText: "",
    subHeader: "",
    src: portlandLighthouse,
    orientation: "portrait",
    color: "color all",
  },
  {
    id: 22,
    altText: "",
    subHeader: "",
    src: txSunrise,
    orientation: "landscape",
    color: "color all",
  },
];

const photosToRender = photos.sort((a, b) => 0.5 - Math.random());

export default photosToRender;