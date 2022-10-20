import {Datatype} from "./Datatype";

//day-1
import pancapiana from "../asset/images/day-1/distensioni-panca-piana.png"
import crocipancainclinata from "../asset/images/day-1/croci-panca-inclinata.png"
import piegamenti from "../asset/images/day-1/piegamenti-a-terra.png"
import lentoavanti from "../asset/images/day-1/lento-avanti-seduto.png"
import alzatefrontali from "../asset/images/day-1/alzate-frontali-in-piedi.png"
import alzatelaterali from "../asset/images/day-1/alzata-laterale-sdraiato.png"
import curlinpiedi from "../asset/images/day-1/curl-in-piedi-cavo-basso.png"
import pancascott from "../asset/images/day-1/bicipiti-panca-scott.png"
import plank from "../asset/images/day-1/plank.png"
import sideplank from "../asset/images/day-1/side-plank.png"

//day-2
import squatmultipower from "../asset/images/day-2/squat-al-multipower.png"
import legextension from "../asset/images/day-2/leg-extension-monopedalica.png"
import legcurl from "../asset/images/day-2/leg-curl.png"
import trazioni from "../asset/images/day-2/trazione-avanti-sbarra.png"
import rematore from "../asset/images/day-2/rematore-in-piedi-due-manubri.png"
import pulleybasso from "../asset/images/day-2/pulley-basso.png"
import kickback from "../asset/images/day-2/kick-back-seduto-due-manubri.png"
import pushdown from "../asset/images/day-2/push-down-cavo-singolo.png"
import crunchbracciatese from "../asset/images/day-2/crunch-braccia-tese-con-braccia.png"
import crosscrunch from "../asset/images/day-2/cross-crunch-gambe-su-panca.png"




export const dayOne: Datatype[] = [
  {
    exerciseImage: pancapiana,
    muscleGroup:"Pettorali",
    title:"Panca piana",
    description: "4 x 10",
    recovery: "60"
  },
  {
    exerciseImage: crocipancainclinata,
    muscleGroup:"Pettorali",
    title:"Croci panca inclinata ",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: piegamenti,
    muscleGroup:"Pettorali",
    title:"Piegamenti a terra",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: lentoavanti,
    muscleGroup:"Spalle",
    title:"Lento avanti bilanciere",
    description: "4 x 10",
    recovery: "60"
  },
  {
    exerciseImage: alzatefrontali,
    muscleGroup:"Spalle",
    title:"Alzate frontali",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: alzatelaterali,
    muscleGroup:"Spalle",
    title:"Alzate laterali sdraiato",
    description: "4 x 10",
    recovery: "60"
  },
  {
    exerciseImage: curlinpiedi,
    muscleGroup:"Bicipiti",
    title:"Curl in piedi al cavo basso ",
    description: "4 x 10",
    recovery: "60"
  },
  {
    exerciseImage: pancascott,
    muscleGroup:"Bicipiti",
    title:"Panca scott 1 manubrio",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: plank,
    muscleGroup:"Addominali",
    title:"Plank",
    description: "3 x MAX",
    recovery: "30"
  },
  {
    exerciseImage: sideplank,
    muscleGroup:"Addominali",
    title:"Sideplank",
    description: "3 x MAX",
    recovery: "30"
  },
]

//day two

export const dayTwo: Datatype[] = [
  {
    exerciseImage: squatmultipower,
    muscleGroup:"Quadricipiti",
    title:"Squat al multipower",
    description: "4 x 10",
    recovery: "60"
  },
  {
    exerciseImage: legextension,
    muscleGroup:"Quadricipiti",
    title:"Leg extension mono ",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: legcurl,
    muscleGroup:"Femorali",
    title:"leg curl",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: trazioni,
    muscleGroup:"Dorsali",
    title:"Trazioni avanti alla sbarra",
    description: "4 x MAX",
    recovery: "60"
  },
  {
    exerciseImage: rematore,
    muscleGroup:"Dorsali",
    title:"Rematore in piedi manubri",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: pulleybasso,
    muscleGroup:"Dorsali",
    title:"Pulley basso",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: kickback,
    muscleGroup:"Tricipiti",
    title:"Kick back 2 manubri",
    description: "4 x 10",
    recovery: "60"
  },
  {
    exerciseImage: pushdown,
    muscleGroup:"Tricipiti",
    title:"Push down al cavo singolo",
    description: "3 x 10",
    recovery: "60"
  },
  {
    exerciseImage: crunchbracciatese,
    muscleGroup:"Addominali",
    title:"Crunch braccia tese",
    description: "3 x 15",
    recovery: "60"
  },
  {
    exerciseImage: crosscrunch,
    muscleGroup:"Addominali",
    title:"Cross crunch panca",
    description: "3 x 15",
    recovery: "60"
  },
]