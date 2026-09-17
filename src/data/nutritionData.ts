// Nutrition and Calorie Data for Botani Catering by IPB International Convention Center (IICC)

export interface NutritionInfo {
  calories: number; // kcal
  protein: number;  // grams
  carbs: number;    // grams
  fat: number;      // grams
  fiber: number;    // grams
  sodium?: number;  // mg (optional)
}

export interface PresetMenuNutrition {
  id: string;
  category: 'box35k' | 'box50k' | 'specialty' | 'prasmanan';
  categoryLabel: string;
  code: string;
  name: string;
  price: number;
  highlight: string;
  nutrition: NutritionInfo;
  dietaryTags: string[];
  items: string[];
}

export interface ComponentNutritionItem {
  id: string;
  name: string;
  category: 'karbohidrat' | 'protein' | 'sayuran_sup' | 'pelengkap' | 'snack' | 'minuman';
  categoryLabel: string;
  portion: string;
  nutrition: NutritionInfo;
  tag?: string;
}

export const presetMealNutritionData: PresetMenuNutrition[] = [
  // 1. Paket Meal Box Ekonomis Rp 35.000 (Menu A - N)
  {
    id: 'box35-a',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu A',
    name: 'Ayam Rica-Rica & Cah Sayuran',
    price: 35000,
    highlight: 'Pedas Segar Nusantara',
    nutrition: { calories: 685, protein: 32, carbs: 82, fat: 25, fiber: 4.5 },
    dietaryTags: ['Tinggi Protein', 'Pedas Nikmat', 'Halal'],
    items: ['Nasi putih', 'Cah sayuran', 'Ayam rica-rica', 'Mie goreng', 'Kerupuk', 'Sambal']
  },
  {
    id: 'box35-b',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu B',
    name: 'Ikan Bumbu Rujak & Mie Aceh',
    price: 35000,
    highlight: 'Kaya Rempah Aceh',
    nutrition: { calories: 660, protein: 30, carbs: 80, fat: 24, fiber: 5.0 },
    dietaryTags: ['Seafood Pilihan', 'Kaya Rempah', 'Halal'],
    items: ['Nasi putih', 'Buncis daging giling', 'Ikan bumbu rujak', 'Mie aceh', 'Kerupuk', 'Acar']
  },
  {
    id: 'box35-c',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu C',
    name: 'Gurame Dabu-Dabu & Cah Brokoli Toffu',
    price: 35000,
    highlight: 'Favorit Sehat & Buah Segar',
    nutrition: { calories: 595, protein: 35, carbs: 72, fat: 18, fiber: 6.5 },
    dietaryTags: ['Rendah Lemak', 'Tinggi Serat', 'Menu Sehat', 'Halal'],
    items: ['Nasi putih', 'Cah brokoli toffu', 'Gurame dabu-dabu', 'Perkedel kentang', 'Buah kupas', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box35-d',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu D',
    name: 'Ayam Woku & Cah Kailan Ebi',
    price: 35000,
    highlight: 'Aroma Daun Jeruk Manado',
    nutrition: { calories: 620, protein: 33, carbs: 70, fat: 22, fiber: 5.8 },
    dietaryTags: ['Tinggi Protein', 'Sayuran Hijau', 'Halal'],
    items: ['Nasi putih', 'Cah kailan ebi', 'Ayam woku', 'Tahu goreng', 'Buah kupas', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box35-e',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu E',
    name: 'Roast Chicken BBQ & Brokoli Garlic',
    price: 35000,
    highlight: 'Western Fusion',
    nutrition: { calories: 635, protein: 36, carbs: 74, fat: 21, fiber: 5.2 },
    dietaryTags: ['High Protein', 'Panggang Oven', 'Halal'],
    items: ['Nasi putih', 'Brokoli garlic', 'Roast chicken BBQ', 'Chicken noodle', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box35-f',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu F',
    name: 'Rolade Ayam & Cah Kembang Kol',
    price: 35000,
    highlight: 'Klasik Gurih Lembut',
    nutrition: { calories: 610, protein: 28, carbs: 76, fat: 22, fiber: 4.8 },
    dietaryTags: ['Menu Ramah Lambung', 'Seimbang', 'Halal'],
    items: ['Nasi putih', 'Cah kembang kol', 'Rolade ayam', 'Tempe orek', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box35-g',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu G',
    name: 'Ayam Bakar Ketumbar & Bakwan Jagung',
    price: 35000,
    highlight: 'Aroma Bakar Tradisional',
    nutrition: { calories: 670, protein: 33, carbs: 78, fat: 24, fiber: 5.5 },
    dietaryTags: ['Ayam Bakar', 'Buah Segar', 'Halal'],
    items: ['Nasi putih', 'Buncis daging giling', 'Ayam bakar ketumbar', 'Bakwan jagung', 'Buah kupas', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box35-i',
    category: 'box35k',
    categoryLabel: 'Meal Box Rp 35.000',
    code: 'Menu I',
    name: 'Pepes Ayam Kemangi & Soun Pengantin',
    price: 35000,
    highlight: 'Rendah Lemak & Kukus Alami',
    nutrition: { calories: 550, protein: 36, carbs: 66, fat: 15, fiber: 4.5 },
    dietaryTags: ['Rendah Kalori', 'Rendah Lemak', 'Kukus Herbal', 'Halal'],
    items: ['Nasi putih', 'Tumis pakcoy bakso', 'Pepes ayam kemangi', 'Soun pengantin', 'Kerupuk', 'Sambel']
  },

  // 2. Paket Meal Box Eksekutif Rp 50.000 (+Sup/Soto)
  {
    id: 'box50-c',
    category: 'box50k',
    categoryLabel: 'Meal Box Rp 50.000 (+Sup)',
    code: 'Menu C',
    name: 'Soto Ayam Kuah Bening + Gurame Dabu-Dabu',
    price: 50000,
    highlight: 'Komplit Segar Bergizi + Soto',
    nutrition: { calories: 690, protein: 42, carbs: 76, fat: 22, fiber: 6.8 },
    dietaryTags: ['High Protein (42g)', 'Sup Hangat', 'Menu Sehat', 'Halal'],
    items: ['Soto ayam kuah bening', 'Nasi putih', 'Cah brokoli toffu', 'Gurame dabu-dabu', 'Perkedel kentang', 'Buah kupas', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box50-e',
    category: 'box50k',
    categoryLabel: 'Meal Box Rp 50.000 (+Sup)',
    code: 'Menu E',
    name: 'Sop Kacang Merah (Brenebon) + Roast BBQ',
    price: 50000,
    highlight: 'Tinggi Serat & Zat Besi',
    nutrition: { calories: 755, protein: 44, carbs: 88, fat: 23, fiber: 8.5 },
    dietaryTags: ['Kaya Serat (8.5g)', 'Tinggi Protein', 'Sup Brenebon', 'Halal'],
    items: ['Sop kacang merah (Brenebon)', 'Nasi putih', 'Brokoli garlic', 'Roast chicken BBQ', 'Chicken noodle', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box50-f',
    category: 'box50k',
    categoryLabel: 'Meal Box Rp 50.000 (+Sup)',
    code: 'Menu F',
    name: 'Tomyam Goong + Rolade Ayam',
    price: 50000,
    highlight: 'Sup Asam Pedas Thailand',
    nutrition: { calories: 695, protein: 36, carbs: 80, fat: 24, fiber: 5.3 },
    dietaryTags: ['Segar Hangat', 'Tomyam Pilihan', 'Halal'],
    items: ['Tomyam goong asam pedas', 'Nasi putih', 'Cah kembang kol', 'Rolade ayam', 'Tempe orek', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box50-i',
    category: 'box50k',
    categoryLabel: 'Meal Box Rp 50.000 (+Sup)',
    code: 'Menu I',
    name: 'Soto Betawi Rempah + Pepes Kemangi',
    price: 50000,
    highlight: 'Gurih Kaya Cita Rasa',
    nutrition: { calories: 785, protein: 43, carbs: 75, fat: 31, fiber: 5.0 },
    dietaryTags: ['Kuah Susu Gurih', 'Kaya Rempah', 'Halal'],
    items: ['Soto betawi kuah susu rempah', 'Nasi putih', 'Tumis pakcoy bakso', 'Pepes ayam kemangi', 'Soun pengantin', 'Kerupuk', 'Sambel']
  },
  {
    id: 'box50-j',
    category: 'box50k',
    categoryLabel: 'Meal Box Rp 50.000 (+Sup)',
    code: 'Menu J',
    name: 'Asparagus Sup Kepiting + Chicken Kungpao',
    price: 50000,
    highlight: 'Chinese Banquet Style',
    nutrition: { calories: 760, protein: 39, carbs: 86, fat: 26, fiber: 5.6 },
    dietaryTags: ['Asparagus Bergizi', 'Oriental Lezat', 'Halal'],
    items: ['Asparagus sup kepiting lezat', 'Nasi putih', 'Sapo tahu', 'Chicken kungpao', 'Kwetiaw bakso', 'Kerupuk', 'Sambel']
  },

  // 3. Signature Bento & Tradisional Boxes
  {
    id: 'spec-japanese',
    category: 'specialty',
    categoryLabel: 'Signature Bento',
    code: 'SP-05',
    name: 'Japanese Executive Bento',
    price: 50000,
    highlight: 'Beef Teriyaki & Chicken Yakiniku',
    nutrition: { calories: 680, protein: 40, carbs: 78, fat: 22, fiber: 4.8 },
    dietaryTags: ['Dual Protein (40g)', 'Gaya Jepang', 'Salad Wijen', 'Halal'],
    items: ['Beef Teriyaki', 'Chicken Yakiniku Panggang', 'Nasi Bento Pulen', 'Salad Sayur Saus Wijen', 'Puding Silky']
  },
  {
    id: 'spec-timbel',
    category: 'specialty',
    categoryLabel: 'Signature Tradisional',
    code: 'SP-06',
    name: 'Nasi Timbel Ayam Parahyangan',
    price: 50000,
    highlight: 'Khas Sunda Daun Pisang',
    nutrition: { calories: 660, protein: 35, carbs: 76, fat: 23, fiber: 5.8 },
    dietaryTags: ['Lalapan Segar', 'Khas Priangan', 'Puding', 'Halal'],
    items: ['Nasi Timbel Daun', 'Ayam Goreng Gurih', 'Tahu Goreng Kuning', 'Lalapan Timun Kemangi', 'Sambal Terasi', 'Puding']
  },
  {
    id: 'spec-bali',
    category: 'specialty',
    categoryLabel: 'Signature Tradisional',
    code: 'SP-04',
    name: 'Nasi Bali Dewata',
    price: 50000,
    highlight: 'Sate Lilit & Sambal Matah',
    nutrition: { calories: 645, protein: 37, carbs: 74, fat: 21, fiber: 5.4 },
    dietaryTags: ['Sate Lilit Ikan', 'Sambal Matah', 'Telur Pindang', 'Halal'],
    items: ['Nasi Putih Pulen', 'Ayam Sambal Matah', 'Sate Lilit Tradisional', 'Telur Pindang', 'Lawar Sayur', 'Puding Manis']
  },
  {
    id: 'spec-liwet',
    category: 'specialty',
    categoryLabel: 'Signature Tradisional',
    code: 'SP-01',
    name: 'Nasi Liwet Daging Spesial',
    price: 50000,
    highlight: 'Aroma Daun Salam & Sereh',
    nutrition: { calories: 735, protein: 36, carbs: 84, fat: 27, fiber: 5.1 },
    dietaryTags: ['Daging Empuk', 'Nasi Liwet Harum', 'Halal'],
    items: ['Nasi Liwet Rempah', 'Empal Daging Gepuk', 'Tahu & Tempe Bacem', 'Urap Sayuran', 'Sambal Bajak', 'Puding']
  },

  // 4. Prasmanan / Buffet Standar (per Porsi)
  {
    id: 'prasmanan-corp',
    category: 'prasmanan',
    categoryLabel: 'Prasmanan Gathering',
    code: 'PRAS-01',
    name: 'Porsi Buffet Non-Wedding (Rp 75k)',
    price: 75000,
    highlight: 'Standar Porsi Sehat Prasmanan',
    nutrition: { calories: 720, protein: 38, carbs: 82, fat: 26, fiber: 6.0 },
    dietaryTags: ['Dual Protein', 'Sayuran Segar', 'Sup Hangat', 'Halal'],
    items: ['Nasi Putih', 'Soto Ayam Kuah Hangat', 'Ayam Bakar Madu', 'Ikan Dori Krispi', 'Cah Brokoli Wortel', 'Kerupuk & Sambal', 'Buah Potong']
  },
  {
    id: 'prasmanan-royal',
    category: 'prasmanan',
    categoryLabel: 'Prasmanan Wedding',
    code: 'PRAS-02',
    name: 'Porsi Royal Wedding Buffet (Rp 125k)',
    price: 125000,
    highlight: 'Pilihan Lengkap Perjamuan Istimewa',
    nutrition: { calories: 860, protein: 46, carbs: 95, fat: 32, fiber: 7.2 },
    dietaryTags: ['Executive Buffet', 'Daging Sapi & Unggas', 'Dessert Corner', 'Halal'],
    items: ['Nasi Putih / Nasi Goreng', 'Zuppa Soup / Sup Pengantin', 'Daging Rolade / Rendang', 'Ayam Panggang', 'Cah Brokoli Jamur', 'Dessert & Puding', 'Buah Segar']
  }
];

// Component items for custom DIY Meal builder
export const componentNutritionList: ComponentNutritionItem[] = [
  // Karbohidrat
  {
    id: 'c-nasi-putih',
    name: 'Nasi Putih Pulen Wangi',
    category: 'karbohidrat',
    categoryLabel: 'Karbohidrat Pokok',
    portion: '1 porsi (150g)',
    nutrition: { calories: 195, protein: 4, carbs: 43, fat: 0.5, fiber: 0.8 },
    tag: 'Standar'
  },
  {
    id: 'c-nasi-merah',
    name: 'Nasi Merah Organik',
    category: 'karbohidrat',
    categoryLabel: 'Karbohidrat Pokok',
    portion: '1 porsi (150g)',
    nutrition: { calories: 165, protein: 4.5, carbs: 35, fat: 1.2, fiber: 3.5 },
    tag: 'Tinggi Serat / Diet'
  },
  {
    id: 'c-nasi-liwet',
    name: 'Nasi Liwet Gurih Rempah',
    category: 'karbohidrat',
    categoryLabel: 'Karbohidrat Pokok',
    portion: '1 porsi (150g)',
    nutrition: { calories: 235, protein: 4.2, carbs: 44, fat: 4.5, fiber: 1.2 },
    tag: 'Gurih Harum'
  },
  {
    id: 'c-mie-goreng',
    name: 'Mie Goreng Telur Sayur',
    category: 'karbohidrat',
    categoryLabel: 'Karbohidrat Pokok',
    portion: '1 porsi (80g)',
    nutrition: { calories: 185, protein: 4.5, carbs: 28, fat: 6.5, fiber: 1.5 }
  },
  {
    id: 'c-kentang-panggang',
    name: 'Kentang Panggang Parsley',
    category: 'karbohidrat',
    categoryLabel: 'Karbohidrat Pokok',
    portion: '1 porsi (120g)',
    nutrition: { calories: 120, protein: 3, carbs: 26, fat: 0.5, fiber: 2.8 },
    tag: 'Rendah Lemak'
  },

  // Protein / Lauk Utama
  {
    id: 'p-ayam-bakar',
    name: 'Ayam Bakar Ketumbar Manis Gurih',
    category: 'protein',
    categoryLabel: 'Lauk Utama Protein',
    portion: '1 potong (120g)',
    nutrition: { calories: 220, protein: 24, carbs: 5, fat: 11, fiber: 0.5 },
    tag: 'Favorit'
  },
  {
    id: 'p-ayam-rica',
    name: 'Ayam Rica-Rica Kemangi',
    category: 'protein',
    categoryLabel: 'Lauk Utama Protein',
    portion: '1 potong (120g)',
    nutrition: { calories: 235, protein: 23, carbs: 6, fat: 13, fiber: 1.0 },
    tag: 'Pedas'
  },
  {
    id: 'p-pepes-ayam',
    name: 'Pepes Ayam Kemangi (Kukus)',
    category: 'protein',
    categoryLabel: 'Lauk Utama Protein',
    portion: '1 potong (110g)',
    nutrition: { calories: 160, protein: 25, carbs: 3, fat: 5.5, fiber: 1.2 },
    tag: 'Super Lean / Rendah Lemak'
  },
  {
    id: 'p-gurame-dabu',
    name: 'Gurame Goreng Sambal Dabu-Dabu',
    category: 'protein',
    categoryLabel: 'Lauk Utama Protein',
    portion: '1 potong (120g)',
    nutrition: { calories: 195, protein: 22, carbs: 4, fat: 9.5, fiber: 0.8 },
    tag: 'Segar Kaya Omega-3'
  },
  {
    id: 'p-beef-teriyaki',
    name: 'Beef Teriyaki Saus Wijen Jepang',
    category: 'protein',
    categoryLabel: 'Lauk Utama Protein',
    portion: '1 porsi (100g)',
    nutrition: { calories: 245, protein: 26, carbs: 9, fat: 12, fiber: 0.5 },
    tag: 'Executive Choice'
  },
  {
    id: 'p-empal-gepuk',
    name: 'Empal Daging Gepuk Parahyangan',
    category: 'protein',
    categoryLabel: 'Lauk Utama Protein',
    portion: '1 potong (90g)',
    nutrition: { calories: 260, protein: 25, carbs: 8, fat: 14, fiber: 0.5 },
    tag: 'Daging Empuk'
  },
  {
    id: 'p-dori-mentega',
    name: 'Ikan Dori Crispy Saus Mentega',
    category: 'protein',
    categoryLabel: 'Lauk Utama Protein',
    portion: '1 potong (110g)',
    nutrition: { calories: 215, protein: 20, carbs: 10, fat: 10.5, fiber: 0.3 }
  },

  // Sayuran & Sup
  {
    id: 's-brokoli-tofu',
    name: 'Cah Brokoli Wortel Tofu Sutra',
    category: 'sayuran_sup',
    categoryLabel: 'Sayuran & Aneka Sup',
    portion: '1 mangkuk (100g)',
    nutrition: { calories: 75, protein: 4, carbs: 7, fat: 3.5, fiber: 3.2 },
    tag: 'Sehat & Serat'
  },
  {
    id: 's-buncis-daging',
    name: 'Buncis Tumis Daging Giling',
    category: 'sayuran_sup',
    categoryLabel: 'Sayuran & Aneka Sup',
    portion: '1 porsi (90g)',
    nutrition: { calories: 95, protein: 5.5, carbs: 6, fat: 5.5, fiber: 2.8 }
  },
  {
    id: 's-kailan-ebi',
    name: 'Cah Kailan Saus Tiram Ebi',
    category: 'sayuran_sup',
    categoryLabel: 'Sayuran & Aneka Sup',
    portion: '1 porsi (90g)',
    nutrition: { calories: 65, protein: 3.5, carbs: 5, fat: 3.2, fiber: 2.9 }
  },
  {
    id: 's-soto-bening',
    name: 'Soto Ayam Rempah Bening Hangat',
    category: 'sayuran_sup',
    categoryLabel: 'Sayuran & Aneka Sup',
    portion: '1 mangkuk (150ml)',
    nutrition: { calories: 110, protein: 11, carbs: 5, fat: 4.8, fiber: 1.0 },
    tag: 'Segar Rendah Kalori'
  },
  {
    id: 's-tomyam',
    name: 'Tomyam Goong Segar Asam Pedas',
    category: 'sayuran_sup',
    categoryLabel: 'Sayuran & Aneka Sup',
    portion: '1 mangkuk (150ml)',
    nutrition: { calories: 95, protein: 8, carbs: 6, fat: 4.2, fiber: 1.5 },
    tag: 'Sup Segar'
  },
  {
    id: 's-sop-brenebon',
    name: 'Sop Kacang Merah Daging (Brenebon)',
    category: 'sayuran_sup',
    categoryLabel: 'Sayuran & Aneka Sup',
    portion: '1 mangkuk (150ml)',
    nutrition: { calories: 155, protein: 9, carbs: 18, fat: 5.2, fiber: 4.2 },
    tag: 'Tinggi Serat & Zat Besi'
  },

  // Pelengkap Tradisional
  {
    id: 'pl-perkedel',
    name: 'Perkedel Kentang Daun Bawang',
    category: 'pelengkap',
    categoryLabel: 'Lauk Pelengkap',
    portion: '1 butir (45g)',
    nutrition: { calories: 85, protein: 2.5, carbs: 12, fat: 3.2, fiber: 1.0 }
  },
  {
    id: 'pl-bakwan-jagung',
    name: 'Bakwan Jagung Manis Renyah',
    category: 'pelengkap',
    categoryLabel: 'Lauk Pelengkap',
    portion: '1 buah (50g)',
    nutrition: { calories: 115, protein: 2.8, carbs: 14, fat: 5.5, fiber: 1.2 }
  },
  {
    id: 'pl-tempe-orek',
    name: 'Tempe Orek Manis Pedas',
    category: 'pelengkap',
    categoryLabel: 'Lauk Pelengkap',
    portion: '1 porsi (40g)',
    nutrition: { calories: 110, protein: 6, carbs: 8, fat: 5.8, fiber: 2.2 },
    tag: 'Protein Nabati'
  },
  {
    id: 'pl-buah-potong',
    name: 'Buah Potong Segar (Melon, Pepaya, Semangka)',
    category: 'pelengkap',
    categoryLabel: 'Lauk Pelengkap',
    portion: '1 cup (100g)',
    nutrition: { calories: 45, protein: 0.8, carbs: 10.5, fat: 0.2, fiber: 1.8 },
    tag: 'Vitamin Alami'
  },
  {
    id: 'pl-kerupuk-sambal',
    name: 'Kerupuk Udang & Sambal Racikan IICC',
    category: 'pelengkap',
    categoryLabel: 'Lauk Pelengkap',
    portion: '1 set',
    nutrition: { calories: 85, protein: 1.5, carbs: 10, fat: 4.5, fiber: 0.5 }
  },

  // Snack Kudapan (Optional Tambahan)
  {
    id: 'sn-lemper',
    name: 'Lemper Ayam Kukus Daun Pisang',
    category: 'snack',
    categoryLabel: 'Snack Kudapan Rapat',
    portion: '1 buah',
    nutrition: { calories: 155, protein: 5.5, carbs: 22, fat: 5.2, fiber: 1.0 },
    tag: 'Tradisional'
  },
  {
    id: 'sn-pastel',
    name: 'Pastel Ayam Sayuran Renyah',
    category: 'snack',
    categoryLabel: 'Snack Kudapan Rapat',
    portion: '1 buah',
    nutrition: { calories: 180, protein: 4.8, carbs: 20, fat: 9.0, fiber: 1.5 }
  },
  {
    id: 'sn-brownies',
    name: 'Fudgy Brownies Cokelat Belgia',
    category: 'snack',
    categoryLabel: 'Snack Kudapan Rapat',
    portion: '1 potong',
    nutrition: { calories: 230, protein: 3.2, carbs: 28, fat: 12.0, fiber: 1.8 },
    tag: 'Manis Mewah'
  },
  {
    id: 'sn-pie-buah',
    name: 'Fruit Tartlet / Pie Buah Segar',
    category: 'snack',
    categoryLabel: 'Snack Kudapan Rapat',
    portion: '1 buah',
    nutrition: { calories: 145, protein: 2.2, carbs: 19, fat: 6.8, fiber: 1.2 }
  },

  // Minuman
  {
    id: 'dr-air-mineral',
    name: 'Air Mineral Higienis (Botol 330ml)',
    category: 'minuman',
    categoryLabel: 'Minuman Segar',
    portion: '330 ml',
    nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 },
    tag: 'Bebas Kalori'
  },
  {
    id: 'dr-infused-water',
    name: 'Infused Water Lemon Mint Dingin',
    category: 'minuman',
    categoryLabel: 'Minuman Segar',
    portion: '1 gelas (250ml)',
    nutrition: { calories: 8, protein: 0.2, carbs: 1.8, fat: 0, fiber: 0.3 },
    tag: 'Detoks Alami'
  },
  {
    id: 'dr-teh-manis',
    name: 'Teh Melati Wangi Alami (Sedang)',
    category: 'minuman',
    categoryLabel: 'Minuman Segar',
    portion: '1 gelas (220ml)',
    nutrition: { calories: 70, protein: 0, carbs: 17, fat: 0, fiber: 0 }
  }
];

export interface EventProfileBenchmark {
  id: string;
  name: string;
  description: string;
  targetCaloriesMin: number;
  targetCaloriesMax: number;
  targetProteinMin: number;
  badge: string;
  advice: string;
}

export const eventProfiles: EventProfileBenchmark[] = [
  {
    id: 'board-meeting',
    name: 'Rapat Direksi & Konsentrasi (Sedentary/Indoor)',
    description: 'Rapat intensif di ruangan ber-AC. Memerlukan makanan yang tidak membuat mengantuk (sugar crash) dan menjaga fokus.',
    targetCaloriesMin: 550,
    targetCaloriesMax: 680,
    targetProteinMin: 30,
    badge: 'Fokus & Anti-Kantuk',
    advice: 'Pilih protein tinggi, lauk bakar/kukus, sayuran hijau kaya serat, dan kurangi gorengan berlebih agar peserta tetap segar dan produktif.'
  },
  {
    id: 'seminar-fullday',
    name: 'Seminar & Workshop Seharian (Full-Day Event)',
    description: 'Acara pelatihan dan seminar 6-8 jam dengan aktivitas otak tinggi dan diselingi diskusi panel.',
    targetCaloriesMin: 650,
    targetCaloriesMax: 780,
    targetProteinMin: 32,
    badge: 'Energi Berkelanjutan',
    advice: 'Kombinasi seimbang karbohidrat kompleks, protein hewani berkualitas, sup hangat untuk relaksasi tenggorokan, dan buah segar penambah vitamin.'
  },
  {
    id: 'outdoor-sport',
    name: 'Acara Lapangan, Outbound & Gathering Aktif',
    description: 'Aktivitas fisik tinggi, dinamika tim, atau acara olahraga dengan pembakaran kalori intens.',
    targetCaloriesMin: 780,
    targetCaloriesMax: 950,
    targetProteinMin: 38,
    badge: 'Kebutuhan Kalori Tinggi',
    advice: 'Butuh asupan kalori dan karbohidrat yang cukup serta protein padat untuk memulihkan cadangan glikogen dan stamina peserta.'
  },
  {
    id: 'gala-wedding',
    name: 'Resepsi Pesta / Gala Dinner Malam Hari',
    description: 'Perjamuan mewah merayakan momen spesial dengan variasi hidangan gourmet melimpah.',
    targetCaloriesMin: 720,
    targetCaloriesMax: 920,
    targetProteinMin: 35,
    badge: 'Perjamuan Mewah',
    advice: 'Pastikan ketersediaan ragam menu protein (unggas, daging, ikan) serta dessert corner yang seimbang dengan buah segar.'
  }
];
