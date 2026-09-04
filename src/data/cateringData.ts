import vanillaSultanaImg from '../assets/images/regenerated_image_1788486172290.png';
import kayaTwistImg from '../assets/images/regenerated_image_1788486566369.png';
import pandanLatticeImg from '../assets/images/regenerated_image_1788486567352.png';
import bananaCakeImg from '../assets/images/regenerated_image_1788486568280.png';
import fudgyBrowniesImg from '../assets/images/regenerated_image_1788486569008.png';
import applePieImg from '../assets/images/regenerated_image_1788486569745.png';
import chocolateCakeImg from '../assets/images/regenerated_image_1788486570551.png';
import classicEclairImg from '../assets/images/regenerated_image_1788486571684.png';
import marmerCakeImg from '../assets/images/regenerated_image_1788486572380.png';
import lemonCakeImg from '../assets/images/regenerated_image_1788486573068.png';
import tahuBaksoImg from '../assets/images/regenerated_image_1788489409793.png';
import sosisSoloImg from '../assets/images/regenerated_image_1788489410745.png';
import risolMayoImg from '../assets/images/regenerated_image_1788489411667.png';
import samosaImg from '../assets/images/regenerated_image_1788489412687.png';
import macaroniSchotelImg from '../assets/images/regenerated_image_1788489413480.png';
import sosisRollImg from '../assets/images/regenerated_image_1788489414368.png';
import asinanBuahImg from '../assets/images/regenerated_image_1788489415282.png';
import tempeMendoanImg from '../assets/images/regenerated_image_1788489416418.png';
import kroketRagoutImg from '../assets/images/regenerated_image_1788489417224.png';
import bitterballenImg from '../assets/images/regenerated_image_1788489418356.png';
import keripikSingkongImg from '../assets/images/regenerated_image_1788489660922.png';
import telurGabusImg from '../assets/images/regenerated_image_1788489661766.png';
import kacangTelurImg from '../assets/images/regenerated_image_1788489662578.png';
import keripikPisangImg from '../assets/images/regenerated_image_1788489663386.png';
import talasStickImg from '../assets/images/regenerated_image_1788489664240.png';
import spec1Img from '../assets/images/regenerated_image_1788492343245.png';
import spec2Img from '../assets/images/regenerated_image_1788492346088.png';
import spec3Img from '../assets/images/regenerated_image_1788492348985.png';
import spec4Img from '../assets/images/regenerated_image_1788492351584.png';
import spec5Img from '../assets/images/regenerated_image_1788492340495.png';
import spec6Img from '../assets/images/regenerated_image_1788492358759.png';
import spec7Img from '../assets/images/regenerated_image_1788492361183.png';
import spec8Img from '../assets/images/regenerated_image_1788492363192.png';
import mealBoxEkonomisImg from '../assets/images/regenerated_image_1788506826450.png';

export interface MenuItemDetail {
  id: string;
  code: string;
  name: string;
  category: 'Meal Box' | 'Prasmanan' | 'Snack Box' | 'Signature';
  subCategory?: string;
  price: number;
  priceDisplay: string;
  minOrder?: string;
  description?: string;
  image: string;
  badge?: string;
  popular?: boolean;
  dishes: string[];
  variants?: {
    code: string;
    title: string;
    items: string[];
    highlight?: string;
  }[];
}

export interface SnackItem {
  id: string;
  name: string;
  category: 'manis' | 'asin' | 'kletikan';
  categoryLabel: string;
  image: string;
  description: string;
  badge?: string;
}

// Complete Menu Box 35k Variants (Menu A - N from Booklet Page 3)
export const menuBox35kVariants = [
  {
    code: 'Menu A',
    title: 'Ayam Rica-Rica & Cah Sayuran',
    items: ['Nasi putih', 'Cah sayuran', 'Ayam rica-rica', 'Mie goreng', 'Kerupuk', 'Sambal'],
    highlight: 'Pedas Segar Nusantara'
  },
  {
    code: 'Menu B',
    title: 'Ikan Bumbu Rujak & Mie Aceh',
    items: ['Nasi putih', 'Buncis daging giling', 'Ikan bumbu rujak', 'Mie aceh', 'Kerupuk', 'Acar'],
    highlight: 'Kaya Rempah Aceh'
  },
  {
    code: 'Menu C',
    title: 'Gurame Dabu-Dabu & Cah Brokoli Toffu',
    items: ['Nasi putih', 'Cah brokoli toffu', 'Gurame dabu-dabu', 'Perkedel kentang', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Favorit Sehat & Buah'
  },
  {
    code: 'Menu D',
    title: 'Ayam Woku & Cah Kailan Ebi',
    items: ['Nasi putih', 'Cah kailan ebi', 'Ayam woku', 'Tahu goreng', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Aroma Daun Jeruk Manado'
  },
  {
    code: 'Menu E',
    title: 'Roast Chicken BBQ & Brokoli Garlic',
    items: ['Nasi putih', 'Brokoli garlic', 'Roast chicken BBQ', 'Chicken noodle', 'Kerupuk', 'Sambel'],
    highlight: 'Western Fusion'
  },
  {
    code: 'Menu F',
    title: 'Rolade Ayam & Cah Kembang Kol',
    items: ['Nasi putih', 'Cah kembang kol', 'Rolade ayam', 'Tempe orek', 'Kerupuk', 'Sambel'],
    highlight: 'Klasik Gurih'
  },
  {
    code: 'Menu G',
    title: 'Ayam Bakar Ketumbar & Bakwan Jagung',
    items: ['Nasi putih', 'Buncis daging giling', 'Ayam bakar ketumbar', 'Bakwan jagung', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Aroma Bakar Gurih Manis'
  },
  {
    code: 'Menu H',
    title: 'Bistik Lidah & Tumis Sawi Ijo Komplit',
    items: ['Nasi putih', 'Tumis sawi ijo komplit', 'Bistik lidah', 'Tempe mendoan', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Executive Special Lidah'
  },
  {
    code: 'Menu I',
    title: 'Pepes Ayam Kemangi & Tumis Pakcoy',
    items: ['Nasi putih', 'Tumis pakcoy bakso', 'Pepes ayam kemangi', 'Soun pengantin', 'Kerupuk', 'Sambel'],
    highlight: 'Tradisional Sunda Wangi'
  },
  {
    code: 'Menu J',
    title: 'Chicken Kungpao & Sapo Tahu',
    items: ['Nasi putih', 'Sapo tahu', 'Chicken kungpou', 'Kwetiaw baso', 'Kerupuk', 'Sambel'],
    highlight: 'Oriental Delight'
  },
  {
    code: 'Menu K',
    title: 'Ayam Palekko & Tumis Daun Singkong',
    items: ['Nasi putih', 'Tumis daun singkong', 'Ayam palekko', 'Bakwan sayur', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Khas Bugis Pedas Nikmat'
  },
  {
    code: 'Menu L',
    title: 'Daging Belimbing Wuluh & Jagung Muda',
    items: ['Nasi putih', 'Tumis jagung muda komplit', 'Daging tumis belimbing wuluh', 'Mie goreng kampung', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Segar Asam Manis Gurih'
  },
  {
    code: 'Menu M',
    title: 'Bistik Daging & Buncis Belacan',
    items: ['Nasi putih', 'Buncis belacan', 'Bistik daging', 'Vietnam noodle', 'Kerupuk', 'Sambel'],
    highlight: 'Daging Empuk Saus Bistik'
  },
  {
    code: 'Menu N',
    title: 'Ayam Pop & Gulai Nangka',
    items: ['Nasi putih', 'Gulai nangka', 'Ayam pop', 'Tahu goreng tepung', 'Kerupuk', 'Sambel'],
    highlight: 'Khas Minang Otentik'
  },
];

// Complete Menu Box 50k Variants with Signature Soup (Menu A - N from Booklet Page 4)
export const menuBox50kVariants = [
  {
    code: 'Menu A',
    title: 'Soto Bogor + Ayam Rica-Rica',
    items: ['Soto bogor gurih hangat', 'Nasi putih', 'Cah sayuran', 'Ayam rica-rica', 'Mie goreng', 'Kerupuk', 'Sambel'],
    highlight: 'Khas IICC Kota Hujan'
  },
  {
    code: 'Menu B',
    title: 'Soto Tangkar + Ikan Bumbu Rujak',
    items: ['Soto tangkar santan gurih', 'Nasi putih', 'Buncis daging giling', 'Ikan bumbu rujak', 'Mie aceh', 'Kerupuk', 'Acar'],
    highlight: 'Kuah Rempah Betawi'
  },
  {
    code: 'Menu C',
    title: 'Soto Ayam + Gurame Dabu-Dabu',
    items: ['Soto ayam kuah bening', 'Nasi putih', 'Cah brokoli toffu', 'Gurame dabu-dabu', 'Perkedel kentang', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Komplit Segar Bergizi'
  },
  {
    code: 'Menu D',
    title: 'Sop Ayam Bakso + Ayam Woku',
    items: ['Sop ayam bakso hangat', 'Nasi putih', 'Cah kailan ebi', 'Ayam woku', 'Tahu goreng', 'Buah kupas', 'Sambel'],
    highlight: 'Favorit Rapat Korporat'
  },
  {
    code: 'Menu E',
    title: 'Sop Kacang Merah + Roast BBQ Chicken',
    items: ['Sop kacang merah (Brenebon)', 'Nasi putih', 'Brokoli garlic', 'Roast chicken BBQ', 'Chicken noodle', 'Kerupuk', 'Sambel'],
    highlight: 'Menu Sehat Tinggi Serat'
  },
  {
    code: 'Menu F',
    title: 'Tomyam Goong + Rolade Ayam',
    items: ['Tomyam goong asam pedas', 'Nasi putih', 'Cah kembang kol', 'Rolade ayam', 'Tempe orek', 'Kerupuk', 'Sambel'],
    highlight: 'Sup Khas Thailand'
  },
  {
    code: 'Menu G',
    title: 'Soto Banjar + Ayam Bakar Ketumbar',
    items: ['Soto banjar rempah harum', 'Nasi putih', 'Buncis daging giling', 'Ayam bakar ketumbar', 'Bakwan jagung', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Cita Rasa Kalimantan'
  },
  {
    code: 'Menu H',
    title: 'Sop Pengantin + Bistik Lidah & Lemon Sereh',
    items: ['Sop pengantin istimewa', 'Nasi putih', 'Tumis sawi ijo komplit', 'Bistik lidah', 'Tempe mendoan', 'Buah kupas', 'Lemon sereh', 'Kerupuk', 'Sambel'],
    highlight: 'VIP Executive Set'
  },
  {
    code: 'Menu I',
    title: 'Soto Betawi + Pepes Ayam Kemangi',
    items: ['Soto betawi kuah susu rempah', 'Nasi putih', 'Tumis pakcoy bakso', 'Pepes ayam kemangi', 'Soun pengantin', 'Kerupuk', 'Sambel'],
    highlight: 'Gurih Kaya Cita Rasa'
  },
  {
    code: 'Menu J',
    title: 'Asparagus Soup + Chicken Kungpao',
    items: ['Asparagus sup kepiting lezat', 'Nasi putih', 'Sapo tahu', 'Chicken kungpao', 'Kwetiaw bakso', 'Kerupuk', 'Sambel'],
    highlight: 'Chinese Banquet Style'
  },
  {
    code: 'Menu K',
    title: 'Cotto Makassar + Ayam Palekko',
    items: ['Cotto makassar rempah kacang', 'Nasi putih', 'Tumis daun singkong', 'Ayam palekko', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Kuliner Sulawesi Legendaris'
  },
  {
    code: 'Menu L',
    title: 'Soto Lamongan + Daging Belimbing Wuluh',
    items: ['Soto lamongan koya gurih', 'Nasi putih', 'Tumis jagung muda komplit', 'Daging tumis belimbing wuluh', 'Mie goreng kampung', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Kuah Koya Harum'
  },
  {
    code: 'Menu M',
    title: 'Tomyum Soup + Bistik Daging',
    items: ['Tomyam soup segar', 'Nasi putih', 'Buncis belacan', 'Bistik daging', 'Vietnam noodle', 'Kerupuk', 'Sambel'],
    highlight: 'Perpaduan Asam Gurih Lezat'
  },
  {
    code: 'Menu N',
    title: 'Sop Bakso Daging + Ayam Pop & Gulai',
    items: ['Sop bakso daging sapi', 'Nasi putih', 'Gulai nangka', 'Ayam pop', 'Tahu goreng tepung', 'Kerupuk', 'Sambel'],
    highlight: 'Selera Nusantara Juara'
  },
];

// Specialty Menu Boxes (Page 5)
export const specialtyMenuBoxes: MenuItemDetail[] = [
  {
    id: 'spec-1',
    code: 'SP-01',
    name: 'Nasi Liwet Daging Spesial',
    category: 'Signature',
    subCategory: 'Indonesian Heritage',
    price: 75000,
    priceDisplay: 'Rp 75.000',
    minOrder: 'Min. 10 Box',
    description: 'Nasi liwet aromatik gurih bertabur ikan asin, empal gepuk empuk lezat, tahu & tempe goreng, lalapan segar, sambal terasi khas IICC, ikan balado renyah, dan puding cokelat manis.',
    image: spec1Img,
    badge: 'Best Seller VIP',
    popular: true,
    dishes: ['Nasi Liwet Harum Daun Salam', 'Empal Gepuk Daging Empuk', 'Ikan Balado Renyah', 'Tahu & Tempe Goreng', 'Lalapan Segar + Sambal Terasi', 'Puding Cokelat Dessert']
  },
  {
    id: 'spec-2',
    code: 'SP-02',
    name: 'Nasi Timbel Gepuk Parahyangan',
    category: 'Signature',
    subCategory: 'Sundanese Signature',
    price: 65000,
    priceDisplay: 'Rp 65.000',
    minOrder: 'Min. 10 Box',
    description: 'Nasi timbel pulen berbalut daun pisang, empal gepuk lembut bumbu rempah kelapa, tahu goreng kuning, lalapan segar lengkap, sambal terasi cobek, dan puding cokelat.',
    image: spec2Img,
    badge: 'Favorit Executive',
    popular: true,
    dishes: ['Nasi Timbel Daun Pisang', 'Empal Gepuk Sapi Legit', 'Tahu Goreng Gurih', 'Lalapan Segar Pilihan', 'Sambal Terasi Harum', 'Puding Cokelat Penutup']
  },
  {
    id: 'spec-3',
    code: 'SP-03',
    name: 'Nasi Liwet Ayam Tradisional',
    category: 'Signature',
    subCategory: 'Indonesian Heritage',
    price: 55000,
    priceDisplay: 'Rp 55.000',
    minOrder: 'Min. 10 Box',
    description: 'Nasi liwet kaya rempah dengan ayam goreng bumbu kuning kremes, tahu & tempe goreng, lalapan botani segar, sambal terasi teruji, ikan balado, dan penutup puding cokelat.',
    image: spec3Img,
    badge: 'Paling Diminati',
    popular: true,
    dishes: ['Nasi Liwet Gurih Rempah', 'Ayam Goreng Lengkuas', 'Ikan Balado Renyah', 'Tahu & Tempe Goreng', 'Lalapan & Sambal Terasi', 'Puding Cokelat Segar']
  },
  {
    id: 'spec-4',
    code: 'SP-04',
    name: 'Nasi Bali Eksotis',
    category: 'Signature',
    subCategory: 'Nusantara Regional',
    price: 50000,
    priceDisplay: 'Rp 50.000',
    minOrder: 'Min. 10 Box',
    description: 'Nasi putih pulen, ayam suwir sambal matah wangi sereh kecombrang, telur pindang gurih, sate lilit ikan khas Gianyar, lawar kacang panjang kelapa bakar, dan dessert puding.',
    image: spec4Img,
    badge: 'Eksotis & Segar',
    popular: false,
    dishes: ['Nasi Putih Pulen', 'Ayam Sambal Matah Segar', 'Sate Lilit Tradisional', 'Telur Pindang Bumbu Rempah', 'Lawar Sayur Khas Bali', 'Puding Manis']
  },
  {
    id: 'spec-5',
    code: 'SP-05',
    name: 'Japanese Executive Bento',
    category: 'Signature',
    subCategory: 'International Cuisine',
    price: 50000,
    priceDisplay: 'Rp 50.000',
    minOrder: 'Min. 10 Box',
    description: 'Bento box modern berstandar hotel: Irisan Beef Teriyaki manis gurih meresap, Chicken Yakiniku panggang wijen, Nasi putih Jepang pulen, Salad bento segar saus mayo wijen, dan puding.',
    image: spec5Img,
    badge: 'International Choice',
    popular: true,
    dishes: ['Beef Teriyaki Saus Manis Gurih', 'Chicken Yakiniku Panggang Wijen', 'Nasi Putih Pulen Bento', 'Salad Sayur Saus Wijen Jepang', 'Puding Silky']
  },
  {
    id: 'spec-6',
    code: 'SP-06',
    name: 'Nasi Timbel Ayam Parahyangan',
    category: 'Signature',
    subCategory: 'Sundanese Signature',
    price: 50000,
    priceDisplay: 'Rp 50.000',
    minOrder: 'Min. 10 Box',
    description: 'Nasi timbel bungkus daun, ayam goreng rempah kemiri lengkuas, tahu goreng hangat, lalapan kebun segar, sambal terasi harum menggugah selera, dan puding manis.',
    image: spec6Img,
    badge: 'Menu Rapat Favorit',
    popular: false,
    dishes: ['Nasi Timbel Daun', 'Ayam Goreng Gurih Parahyangan', 'Tahu Goreng Kuning', 'Lalapan Timun Kemangi Selada', 'Sambal Terasi Segar', 'Puding Cokelat']
  },
  {
    id: 'spec-7',
    code: 'SP-07',
    name: 'Chinese Deluxe Box',
    category: 'Signature',
    subCategory: 'International Cuisine',
    price: 35000,
    priceDisplay: 'Rp 35.000',
    minOrder: 'Min. 10 Box',
    description: 'Ayam Chicken Kungpao dengan saus asam manis pedas berpadu kacang mete, brokoli tumis bawang putih wangi, mie goreng Chinese noodle lembut, dan nasi putih.',
    image: spec7Img,
    badge: 'Oriental Klasik',
    popular: false,
    dishes: ['Chicken Kungpao Saus Istimewa', 'Brokoli Garlic Tumis Segar', 'Chinese Noodle Gurih', 'Nasi Putih Pulen']
  },
  {
    id: 'spec-8',
    code: 'SP-08',
    name: 'Nasi Rames Nusantara',
    category: 'Signature',
    subCategory: 'Indonesian Heritage',
    price: 35000,
    priceDisplay: 'Rp 35.000',
    minOrder: 'Min. 10 Box',
    description: 'Paket rames komplit kaya lauk: Nasi putih, ayam goreng renyah bumbu ungkep, tempe orek manis pedas, telur balado merah merona, lalapan segar, dan sambal pedas nikmat.',
    image: spec8Img,
    badge: 'Ekonomis Komplit',
    popular: false,
    dishes: ['Nasi Putih Gurih', 'Ayam Goreng Ungkep', 'Telur Balado Merah', 'Tempe Orek Manis Pedas', 'Lalapan Segar + Sambal']
  }
];

// Complete Prasmanan Menu Sets (Menu A - N from Booklet Page 8)
export const prasmananVariants = [
  {
    code: 'Menu A',
    title: 'Soto Bogor & Dori Saus Mentega',
    items: ['Soto bogor hangat', 'Nasi putih', 'Cah sayuran segar', 'Ayam bakar kabayan', 'Dori saus mentega renyah', 'Mie goreng spesial', 'Kerupuk', 'Sambel'],
    highlight: 'Dua Pilihan Protein Utama (Ayam & Ikan Dori)'
  },
  {
    code: 'Menu B',
    title: 'Soto Tangkar & Ikan Bumbu Rujak',
    items: ['Soto tangkar Betawi', 'Nasi putih', 'Buncis daging giling', 'Ikan bumbu rujak', 'Ayam tumis kecap manis gurih', 'Mie aceh harum rempah', 'Kerupuk', 'Sambel'],
    highlight: 'Kombinasi Seafood & Daging'
  },
  {
    code: 'Menu C',
    title: 'Soto Ayam, Gurame Dabu-Dabu & Ayam Saus Mentega',
    items: ['Soto ayam kaldu bening', 'Nasi putih', 'Cah brokoli toffu', 'Gurame dabu-dabu segar', 'Ayam saus mentega', 'Perkedel kentang', 'Buah kupas potong segar', 'Kerupuk', 'Sambel'],
    highlight: 'Pilihan Prasmanan Paling Diminati'
  },
  {
    code: 'Menu D',
    title: 'Sop Ayam Bakso, Ayam Woku & Ikan Saus Padang',
    items: ['Sop ayam bakso hangat', 'Nasi putih', 'Cah kailan ebi', 'Ayam woku Manado', 'Ikan saus padang pedas gurih', 'Tahu goreng tepung', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Sensasi Rasa Manado & Minang'
  },
  {
    code: 'Menu E',
    title: 'Sop Kacang Merah, Roast Chicken BBQ & Dori Mayonase',
    items: ['Sop kacang merah brenebon', 'Nasi putih', 'Brokoli garlic saus tiram', 'Roast chicken BBQ', 'Dory crispy saus mayonase', 'Chicken noodle', 'Kerupuk', 'Sambel'],
    highlight: 'Menu Modern Western Banquet'
  },
  {
    code: 'Menu F',
    title: 'Tomyam Seafood, Ayam Bakar Bali & Krengseng Daging',
    items: ['Tomyam seafood segar asam pedas', 'Nasi putih', 'Cah kembang kol', 'Ayam bakar bali bumbu genep', 'Krengseng daging empuk', 'Tempe orek', 'Kerupuk', 'Sambel'],
    highlight: 'Kaya Rempah Pedas Mewah'
  },
  {
    code: 'Menu G',
    title: 'Soto Banjar, Ayam Bakar Ketumbar & Gurame Bangkok',
    items: ['Soto banjar kayu manis', 'Nasi putih', 'Buncis daging giling', 'Ayam bakar ketumbar harum', 'Gurame saus bangkok asam manis', 'Bakwan jagung renyah', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Favorit Resepsi Pernikahan'
  },
  {
    code: 'Menu H',
    title: 'Sop Pengantin, Udang Mayonase & Ayam Tuturuga',
    items: ['Sop pengantin kuah kaldu rempah', 'Nasi putih', 'Tumis sawi ijo komplit', 'Udang mayonase krispi', 'Ayam tuturuga wangi kemangi', 'Tempe mendoan hangat', 'Buah potong segar', 'Kerupuk', 'Sambel'],
    highlight: 'Executive Royal VIP'
  },
  {
    code: 'Menu I',
    title: 'Soto Betawi, Pepes Kemangi & Tumis Cumi Asin',
    items: ['Soto betawi kuah rempah susu', 'Nasi putih', 'Tumis pakcoy bakso', 'Pepes ayam kemangi Sunda', 'Tumis cumi asin cabai hijau', 'Soun pengantin', 'Kerupuk', 'Sambel'],
    highlight: 'Cita Rasa Tradisional Kaya Selera'
  },
  {
    code: 'Menu J',
    title: 'Asparagus Soup, Chicken Kungpao & Fish Katsu',
    items: ['Asparagus soup gurih lembut', 'Nasi putih', 'Sapo tahu seafood', 'Chicken kungpao saus oriental', 'Fish katsu renyah saus tartar', 'Chicken noodle', 'Kerupuk', 'Sambel'],
    highlight: 'Oriental Buffet Banquet'
  },
  {
    code: 'Menu K',
    title: 'Cotto Makassar, Ayam Palekko & Daging Asam Padeh',
    items: ['Cotto makassar rempah istimewa', 'Nasi putih', 'Tumis daun singkong teri', 'Ayam palekko pedas', 'Daging asam padeh Minang', 'Bakwan sayur', 'Buah kupas', 'Kerupuk', 'Sambel'],
    highlight: 'Kombinasi Nusantara Timur & Barat'
  },
  {
    code: 'Menu L',
    title: 'Soto Lamongan, Daging Belimbing Wuluh & Ayam Kecap',
    items: ['Soto lamongan koya', 'Nasi putih', 'Tumis jagung muda komplit', 'Daging tumis belimbing wuluh segar', 'Ayam bakar kecap mentega', 'Balado kentang', 'Buah kupas', 'Jus segar dingin', 'Kerupuk', 'Sambel'],
    highlight: 'Paket Komplit Termasuk Jus Segar'
  },
  {
    code: 'Menu M',
    title: 'Tomyum Soup, Bistik Lidah & Ikan Woku',
    items: ['Tomyum soup asam gurih', 'Nasi putih', 'Buncis balacan', 'Bistik lidah sapi empuk', 'Ikan woku kemangi', 'Vietnam noodle', 'Kerupuk', 'Sambel'],
    highlight: 'Perpaduan Mewah Bistik & Woku'
  },
  {
    code: 'Menu N',
    title: 'Sop Bakso Daging, Ayam Pop & Ikan Bakar Padang',
    items: ['Sop bakso daging sapi hangat', 'Nasi putih', 'Gulai nangka kapau', 'Ayam pop lembut gurih', 'Ikan bakar padang bumbu merah', 'Tahu goreng tepung', 'Kerupuk', 'Sambel'],
    highlight: 'Sajian Pesta Khas Padang'
  },
];

// All 25 Snacks for the Custom Snack Box Builder (Booklet Page 9)
export const snackItemsData: SnackItem[] = [
  // 1. Pilihan Snack Manis (10 items)
  {
    id: 'snack-m-1',
    name: 'Vanilla Sultana',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: vanillaSultanaImg,
    description: 'Pastry pastry spiral renyah dengan krim vanilla lembut dan kismis sultana manis alami.'
  },
  {
    id: 'snack-m-2',
    name: 'Kaya Twist',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: kayaTwistImg,
    description: 'Danish pastry kepang bertabur gula dengan selai srikaya pandan wangi gurih.'
  },
  {
    id: 'snack-m-3',
    name: 'Pandan Lattice',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: pandanLatticeImg,
    description: 'Pastry anyam dengan aroma pandan suji asli dan isian krim lembut memanjakan lidah.'
  },
  {
    id: 'snack-m-4',
    name: 'Banana Cake',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: bananaCakeImg,
    description: 'Bolu pisang lembut moist dengan potongan pisang raja asli dan aroma karamel.'
  },
  {
    id: 'snack-m-5',
    name: 'Fudgy Brownies',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: fudgyBrowniesImg,
    description: 'Brownies cokelat Belgia pekat dengan tekstur fudgy dan kerak shiny crust lezat.'
  },
  {
    id: 'snack-m-6',
    name: 'Apple Pie',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: applePieImg,
    description: 'Pie renyah mentega dengan isian apel Malang manis asam bumbu kayu manis aromatik.'
  },
  {
    id: 'snack-m-7',
    name: 'American Chocolate Cake',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: chocolateCakeImg,
    description: 'Kue cokelat klasik Amerika dengan ganache pekat dan sentuhan cokelat leleh mewah.'
  },
  {
    id: 'snack-m-8',
    name: 'Classic Eclair',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: classicEclairImg,
    description: 'Sus panjang lembut dengan isian pastry cream vanilla diplomat dan glazing cokelat.'
  },
  {
    id: 'snack-m-9',
    name: 'Marmer Cake Premium',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: marmerCakeImg,
    description: 'Bolu marmer klasik butter Wijsman beraroma harum vanila dan cokelat Belanda.'
  },
  {
    id: 'snack-m-10',
    name: 'Lemon Cake Glaze',
    category: 'manis',
    categoryLabel: 'Snack Manis',
    image: lemonCakeImg,
    description: 'Cake lembut dengan perasan sari lemon segar dan lapisan gula glaze asam manis segar.'
  },

  // 2. Pilihan Snack Asin (10 items)
  {
    id: 'snack-a-1',
    name: 'Tahu Bakso Sapi',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: tahuBaksoImg,
    description: 'Tahu pong gurih padat berisi adonan bakso daging sapi cincang berbumbu bawang putih.'
  },
  {
    id: 'snack-a-2',
    name: 'Sosis Solo Suwir Ayam',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: sosisSoloImg,
    description: 'Dadar telur tipis lembut membungkus cincangan daging ayam gurih bumbu santan Solo.'
  },
  {
    id: 'snack-a-3',
    name: 'Risol Mayo Smoked Beef',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: risolMayoImg,
    description: 'Risol panir krispi keemasan dengan isian smoked beef gurih, telur rebus, dan creamy mayo.'
  },
  {
    id: 'snack-a-4',
    name: 'Samosa Kari Daging',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: samosaImg,
    description: 'Pastry segitiga super renyah berisi kentang dan daging cincang bumbu rempah kari wangi.'
  },
  {
    id: 'snack-a-5',
    name: 'Macaroni Schotel Panggang',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: macaroniSchotelImg,
    description: 'Macaroni pasta panggang dengan keju cheddar melimpah, daging sapi giling, dan susu gurih.'
  },
  {
    id: 'snack-a-6',
    name: 'Sosis Roll Pastry',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: sosisRollImg,
    description: 'Sosis sapi premium berbalut puff pastry gurih berlapis mentega yang dipanggang renyah.'
  },
  {
    id: 'snack-a-7',
    name: 'Asinan Buah Botani Segar',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: asinanBuahImg,
    description: 'Potongan buah segar mangga, kedondong, nanas, jambu dengan kuah asinan merah khas Bogor.'
  },
  {
    id: 'snack-a-8',
    name: 'Tempe Mendoan Daun Bawang',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: tempeMendoanImg,
    description: 'Tempe kedelai berbalut adonan tepung berbumbu ketumbar dan daun bawang dengan cocolan sambal kecap.'
  },
  {
    id: 'snack-a-9',
    name: 'Holland Kroket Ragout',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: kroketRagoutImg,
    description: 'Kroket kentang lumer berisikan ragout ayam wortel creamy khas resep peninggalan Belanda.'
  },
  {
    id: 'snack-a-10',
    name: 'Bitterballen Keju Daging',
    category: 'asin',
    categoryLabel: 'Snack Asin',
    image: bitterballenImg,
    description: 'Bola-bola daging lezat dengan adonan roux keju leleh, dibalut tepung panir keemasan.'
  },

  // 3. Pilihan Kletikan (5 items)
  {
    id: 'snack-k-1',
    name: 'Keripik Singkong Balado',
    category: 'kletikan',
    categoryLabel: 'Kletikan Renyah',
    image: keripikSingkongImg,
    description: 'Keripik singkong renyah tipis dengan balutan karamel cabai balado manis pedas gurih.'
  },
  {
    id: 'snack-k-2',
    name: 'Telur Gabus Asin Gurih',
    category: 'kletikan',
    categoryLabel: 'Kletikan Renyah',
    image: telurGabusImg,
    description: 'Camilan tradisional tepung tapioka dan keju gurih renyah tanpa bahan pengawet.'
  },
  {
    id: 'snack-k-3',
    name: 'Kacang Telur Spesial',
    category: 'kletikan',
    categoryLabel: 'Kletikan Renyah',
    image: kacangTelurImg,
    description: 'Kacang tanah pilihan dibalut tepung telur manis gurih renyah tahan lama.'
  },
  {
    id: 'snack-k-4',
    name: 'Keripik Pisang Madu',
    category: 'kletikan',
    categoryLabel: 'Kletikan Renyah',
    image: keripikPisangImg,
    description: 'Irisan pisang kepok pilihan digoreng krispi dengan lapisan madu manis legit.'
  },
  {
    id: 'snack-k-5',
    name: 'Talas Stick Gurih Bogor',
    category: 'kletikan',
    categoryLabel: 'Kletikan Renyah',
    image: talasStickImg,
    description: 'Stik talas asli Bogor renyah asin bertabur garam laut dan bumbu gurih khas.'
  }
];

// Terms & Conditions (Booklet Page 10)
export const termsAndConditions = [
  {
    id: 'term-1',
    title: '1. Ketentuan Umum',
    subtitle: 'Dasar Hubungan Kerja & Persetujuan Layanan',
    points: [
      'Syarat dan ketentuan ini mengatur hubungan kerja antara Penyedia Jasa Catering dan Pelanggan/Klien dalam penyediaan layanan makanan dan minuman untuk berbagai jenis acara.',
      'Dengan melakukan pemesanan, Klien dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam dokumen ini.'
    ]
  },
  {
    id: 'term-2',
    title: '2. Ketentuan Pemesanan (Paling Lambat H-7)',
    subtitle: 'Konfirmasi Resmi & Data Kelengkapan Acara',
    points: [
      'Pemesanan dinyatakan resmi dan mengikat setelah Klien menyetujui penawaran harga secara tertulis dan melakukan pembayaran uang muka (Down Payment/DP).',
      'Pemesanan catering dilakukan paling lambat H-7 sebelum tanggal pelaksanaan acara, kecuali disepakati lain secara tertulis.',
      'Klien wajib memberikan informasi yang lengkap dan akurat mengenai: Jenis acara, Tanggal, waktu, dan lokasi pelaksanaan, Jumlah peserta, serta Pilihan menu dan layanan tambahan (jika ada).'
    ]
  },
  {
    id: 'term-3',
    title: '3. Perubahan Pesanan (Maksimal H-3)',
    subtitle: 'Penyesuaian Porsi, Menu, & Batas Waktu',
    points: [
      'Permintaan perubahan menu, jumlah porsi, waktu, atau detail layanan lainnya dapat dilakukan maksimal H-3 sebelum hari pelaksanaan acara.',
      'Setiap perubahan akan disesuaikan dengan ketersediaan bahan dan dapat mempengaruhi total biaya tagihan.',
      'Pengurangan jumlah porsi setelah batas waktu perubahan (H-3) tidak dapat mengurangi nilai tagihan yang telah disepakati.',
      'Penambahan jumlah porsi di luar batas waktu perubahan tidak dapat dijamin pemenuhannya, namun tim kami akan berupaya semaksimal mungkin.'
    ]
  },
  {
    id: 'term-4',
    title: '4. Skema Pembayaran (DP 50% & Pelunasan H-1)',
    subtitle: 'Metode Pembayaran Resmi PT BLST IPB',
    points: [
      'Klien wajib melakukan pembayaran uang muka (DP) sebesar 50% dari total nilai pesanan sebagai konfirmasi pemesanan.',
      'Pelunasan pembayaran wajib dilakukan paling lambat H-1 sebelum hari pelaksanaan acara, kecuali disepakati lain secara tertulis.',
      'Seluruh pembayaran dilakukan melalui transfer ke rekening resmi Penyedia Jasa Catering (PT BLST / IPB International Convention Center).',
      'Seluruh biaya administrasi perbankan (jika ada) menjadi tanggung jawab Klien.',
      'Keterlambatan pembayaran dapat mengakibatkan penundaan atau pembatalan layanan.'
    ]
  },
  {
    id: 'term-5',
    title: '5. Kebijakan Pembatalan & Force Majeure',
    subtitle: 'Konsekuensi Pembatalan & Keadaan Kahar',
    points: [
      'Pembatalan pemesanan wajib disampaikan secara tertulis oleh Klien.',
      'Pembatalan H-7 atau lebih sebelum acara: Uang muka (DP) tidak dapat dikembalikan.',
      'Pembatalan H-3 atau kurang sebelum acara: Klien dikenakan 100% dari total nilai pesanan.',
      'Penyedia Jasa Catering berhak menagihkan biaya yang telah timbul akibat pembatalan.',
      'Penyedia Jasa Catering tidak bertanggung jawab atas keterlambatan atau kegagalan pelaksanaan yang disebabkan oleh keadaan kahar (force majeure) seperti bencana alam, cuaca ekstrem, gangguan keamanan, atau kebijakan pemerintah darurat.'
    ]
  },
  {
    id: 'term-6',
    title: '6. Pelaksanaan Layanan & Komplain',
    subtitle: 'Standar Penyajian & Penyelesaian Hari-H',
    points: [
      'Penyedia Jasa Catering bertanggung jawab menyediakan makanan dan layanan higienis sesuai dengan kesepakatan tertulis yang telah disetujui.',
      'Keluhan atau komplain terkait layanan wajib disampaikan pada hari yang sama dengan pelaksanaan acara agar dapat ditindaklanjuti secara langsung oleh tim supervisor kami.'
    ]
  },
  {
    id: 'term-7',
    title: '7. Harga dan Biaya Tambahan',
    subtitle: 'Ketentuan Peralatan Khusus & Dekorasi',
    points: [
      'Harga yang tercantum dalam penawaran belum termasuk biaya tambahan seperti: Peralatan khusus di luar standar, Dekorasi tambahan khusus tematik, serta Permintaan menu kustom di luar paket yang disepakati.',
      'Biaya tambahan akan diinformasikan secara transparan dan disetujui secara terpisah sebelum pelaksanaan.'
    ]
  }
];

export const cateringPackagesSummary = [
  {
    id: 'pkg-box-35',
    name: 'Menu Box Ekonomis',
    category: 'Meal Box',
    price: 35000,
    priceDisplay: 'Rp 35.000 / Box',
    minOrder: 'Min. 20 Box',
    subtitle: 'Solusi Rapat & Acara Praktis Berkualitas',
    image: mealBoxEkonomisImg,
    badge: 'Paling Populer',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: '14 pilihan varian menu (Menu A - N) dengan komposisi seimbang karbohidrat, lauk utama, tumisan sayur segar, kerupuk, dan sambal khas.',
    features: [
      '14 Pilihan Kombinasi Menu (Menu A - N)',
      'Nasi Putih Pulen + Lauk Utama Pilihan',
      'Sayuran Tumis / Cah Segar',
      'Pelengkap Mie / Perkedel / Bakwan / Tempe',
      'Buah Potong Segar (Varian tertentu)',
      'Kerupuk Renyah + Sambal Khas',
      'Kotak Bento Higienis + Sendok & Tisu'
    ],
    variantsCount: 14,
    variantType: 'box35k'
  },
  {
    id: 'pkg-box-50',
    name: 'Menu Box Eksekutif + Sup/Soto',
    category: 'Meal Box',
    price: 50000,
    priceDisplay: 'Rp 50.000 / Box',
    minOrder: 'Min. 20 Box',
    subtitle: 'Paket Komplit dengan Sajian Sup & Soto Hangat',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    badge: 'Executive Set',
    badgeColor: 'bg-blue-100 text-[#063694] border-blue-300',
    description: '14 variasi paket lengkap (Menu A - N) dilengkapi dengan sup atau soto khas Nusantara hangat yang kaya rempah (Soto Bogor, Betawi, Tomyam, Banjar, Cotto Makassar).',
    features: [
      '14 Pilihan Menu Eksekutif Lengkap (Menu A - N)',
      'Termasuk Pilihan Sup/Soto Khas Nusantara',
      'Lauk Daging Sapi / Ayam / Ikan Berkualitas',
      'Menu Tumisan Sayuran Bergizi',
      'Pelengkap Mie Aceh / Bakwan / Soun Pengantin',
      'Buah Potong Segar Pilihan',
      'Kerupuk & Sambal Racikan Khas IICC',
      'Kemasan Box Premium Khusus VIP'
    ],
    variantsCount: 14,
    variantType: 'box50k'
  },
  {
    id: 'pkg-prasmanan-nonwed',
    name: 'Paket Prasmanan (Non-Wedding)',
    category: 'Prasmanan',
    price: 75000,
    priceDisplay: 'Mulai dari Rp 75.000 / PAX',
    minOrder: 'Min. Order 50 PAX',
    subtitle: 'Untuk Corporate Gathering, Seminar, & Acara Keluarga',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    badge: 'Corporate Standard',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'Sajian buffet prasmanan mewah berstandar hotel berbintang. Dilengkapi peralatan chafing dish stainless steel elegan, meja buffet rapi, dan waiter profesional.',
    features: [
      '14 Pilihan Kombinasi Menu Prasmanan (Menu A - N)',
      '1 Pilihan Sup / Soto Nusantara Hangat',
      '2 Pilihan Lauk Utama (Ayam & Ikan / Daging)',
      '1 Sayuran Sehat & 1 Lauk Pendamping',
      'Nasi Putih Pulen Hangat',
      'Buah Potong Segar + Kerupuk + Sambal',
      'Termasuk Peralatan Pemanas & Meja Buffet',
      'Pramusaji & Service Crew Standby'
    ],
    variantsCount: 14,
    variantType: 'prasmanan'
  },
  {
    id: 'pkg-prasmanan-wed',
    name: 'Paket Prasmanan Royal Wedding',
    category: 'Prasmanan',
    price: 125000,
    priceDisplay: 'Mulai dari Rp 125.000 / PAX',
    minOrder: 'Min. Order 200 PAX',
    subtitle: 'Kemewahan Resepsi Pernikahan di Ballroom IICC IPB',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    badge: 'Luxury Wedding',
    badgeColor: 'bg-[#D4AF37]/20 text-[#8B6D1B] border-[#D4AF37]',
    description: 'Pengalaman kuliner pesta pernikahan tak terlupakan dengan dekorasi meja buffet bertingkat, aneka stall pondokan hidangan penutup manis, dan pelayanan VVIP.',
    features: [
      '14 Pilihan Set Menu Royal Wedding Berkelas',
      'Sup Pembuka Mewah (Sop Pengantin / Asparagus)',
      'Hidangan Utama 3 Pilihan (Daging Sapi, Ayam, Seafood)',
      'Stall Dessert Table: Roll Cake, Pastry & Buah Segar',
      'Welcome Drink & Aneka Jus Buah Segar',
      'Dekorasi Meja Prasmanan Elegan & Mewah',
      'Full Set Peralatan Piring Porselen & Sendok Garpu',
      'Dedicated Event Supervisor & Waiter Profesional'
    ],
    variantsCount: 14,
    variantType: 'prasmanan'
  },
  {
    id: 'pkg-snack-custom',
    name: 'Custom Snack Box Builder',
    category: 'Snack Box',
    price: 25000,
    priceDisplay: 'Mulai dari Rp 25.000 / Box',
    minOrder: 'Min. 20 Box',
    subtitle: 'Bebas Pilih Kombinasi Manis, Asin, & Kletikan',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    badge: 'Customizable',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    description: 'Pilih sendiri 3-4 item favorit dari 25 pilihan snack berkualitas: pastry manis, roti & cake lembut, gorengan & schotel asin gurih, serta kletikan renyah.',
    features: [
      '25 Pilihan Snack (10 Manis, 10 Asin, 5 Kletikan)',
      'Bebas Mix & Match sesuai anggaran',
      'Bahan Premium Halal & Higienis',
      'Kotak Snack Elegan Putih + Alas Renda',
      'Termasuk Air Mineral Cup / Botol (Opsional)',
      'Cocok untuk Coffee Break Seminar & Rapat'
    ],
    variantsCount: 25,
    variantType: 'snack'
  }
];

export const companyInfo = {
  brandName: 'Saji Catering by IICC',
  legalName: 'Unit Usaha PT BLST IPB University',
  parentCenter: 'IPB International Convention Center (IICC)',
  tagline: 'Elegan, Higienis, & Berstandar IICC IPB',
  subTagline: 'Official Catering of IPB International Convention Center',
  whatsapp: '+628111330659',
  whatsappDisplay: '+62 81 1133 0659',
  instagram: '@botani.catering.iicc',
  instagramUrl: 'https://instagram.com/botani.catering.iicc',
  address: 'IPB International Convention Center, Botani Square Building, Jl. Raya Pajajaran, Tegallega, Bogor Tengah, Kota Bogor, Jawa Barat 16127, Indonesia.',
  googleMapsUrl: 'https://maps.google.com/?q=IPB+International+Convention+Center+Botani+Square+Bogor',
  operatingHours: 'Senin - Minggu: 08.00 - 18.00 WIB (Layanan Acara 24 Jam)',
  quoteMotto: 'Perpaduan bahan pilihan, proses yang higienis, dan penyajian profesional adalah komitmen kami.'
};
