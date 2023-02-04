import { award01, award02, award03, award05 } from "../assets"
import About from "./About"
import Believe from "./Believe"
import Find from "./Find"
import Footer from "./Footer"
import Gallery from "./Gallery"
import Intro from "./Intro"
import Laures from "./Laures"
import SpecialMenu from "./SpecialMenu"
import Welcome from "./Welcome"
import Navbar from "../components/navbar/Navbar"
import { gallery01, gallery02, gallery03, gallery04 } from "../assets"
export { Navbar, About, Believe, Find, Footer, Gallery, Intro, Laures, SpecialMenu, Welcome }

const wines = [
   { id: 1, name: 'Chapel Hill Shiraz', price: '$56', components: ['AU', 'Bottle'] },
   { id: 2, name: 'Catena Malbec', price: '$59', components: ['AR', 'Bottle'] },
   { id: 3, name: 'La Vieille Rosé', price: '$44', components: ['FR', '750 ml'] },
   { id: 4, name: 'Rhino Pale Ale', price: '$31', components: ['CA', '750 ml'] },
   { id: 5, name: 'Irish Guinness', price: '$26', components: ['IE', '750 ml'] },
]
const coctailes = [
   { id: 1, name: 'Aperol Spritrz', price: '$20', components: ['Aperol', 'Villa Marchesi prosecco', 'soda', '30ml'] },
   { id: 2, name: 'Dark \'N\' Stormy', price: '$16', components: ['Dark rum', 'Ginger beer', 'Slice of lime'] },
   { id: 3, name: 'Daiquiri', price: '$10', components: ['Rum', 'Citrus juice', 'Sugar'] },
   { id: 4, name: 'Old Fashioned', price: '$31', components: ['Bourbon', 'Brown sugar', 'Angostura Bitters'] },
   { id: 5, name: 'Negroni', price: '$26', components: ['Gin', 'Sweet Vermouth', 'Campari', 'Orange garnish'] },
]

export {
   wines,
   coctailes,
   footerLinks,
   laures,
   imageInst
}

export interface IMenu {
   id: number,
   name: string,
   price: string,
   components: string[],
}

const footerLinks = [
   { id: 1, name: '9 W 53rd St, New York, NY 10019, USA', href: '' },
   { id: 2, name: '+1 212-344-1230', href: '' },
   { id: 3, name: '+1 212-344-1230', href: '' }

]

const laures = [
   { id: 1, name: 'Bib Gourmond', info: 'Lorem ipsum dolor sit amet, consectetur.', imgUrl: `${award02}` },
   { id: 2, name: 'AA Hospitality ', info: 'Lorem ipsum dolor sit amet, consectetur.', imgUrl: `${award05}` },
   { id: 3, name: 'Rising Star', info: 'Lorem ipsum dolor sit amet, consectetur.', imgUrl: `${award01}` },
   { id: 4, name: 'Outstanding Chef', info: 'Lorem ipsum dolor sit amet, consectetur.', imgUrl: `${award03}` },
]

const imageInst = [
   { id: 1, imgUrl: `${gallery01}`, link: '#' },
   { id: 2, imgUrl: `${gallery02}`, link: '#' },
   { id: 3, imgUrl: `${gallery03}`, link: '#' },
   { id: 4, imgUrl: `${gallery03}`, link: '#' },
]
