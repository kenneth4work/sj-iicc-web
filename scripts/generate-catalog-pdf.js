import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();

  // Color Palette matching Botani Catering by IICC
  const navy = rgb(6 / 255, 54 / 255, 148 / 255);       // #063694
  const gold = rgb(212 / 255, 175 / 255, 55 / 255);     // #D4AF37
  const darkNavy = rgb(4 / 255, 35 / 255, 97 / 255);    // #042361
  const darkText = rgb(15 / 255, 23 / 255, 42 / 255);   // #0F172A
  const slateText = rgb(71 / 255, 85 / 255, 105 / 255); // #475569
  const lightBg = rgb(248 / 255, 250 / 255, 252 / 255); // #F8FAFC
  const borderCol = rgb(226 / 255, 232 / 255, 240 / 255);
  const white = rgb(1, 1, 1);
  const badgeBg = rgb(241 / 255, 245 / 255, 249 / 255);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Safely load and embed PNG
  async function loadPng(relativePath) {
    const fullPath = path.resolve(process.cwd(), relativePath);
    if (fs.existsSync(fullPath)) {
      try {
        const bytes = fs.readFileSync(fullPath);
        return await pdfDoc.embedPng(bytes);
      } catch (err) {
        console.warn('Could not embed PNG:', relativePath, err.message);
        return null;
      }
    }
    return null;
  }

  // Preload key images
  const logoPng = await loadPng('public/images/logo.png') || await loadPng('public/images/logo-saji.png');
  const bento35Png = await loadPng('src/assets/images/regenerated_image_1788506826450.png');
  const bento50Png = await loadPng('src/assets/images/regenerated_image_1788503660469.png');
  const heroSnackPng = await loadPng('src/assets/images/regenerated_image_1788492937077.png');

  // Bento specialty images for Page 5
  const specImages = {
    timbelGepuk: await loadPng('src/assets/images/regenerated_image_1788492343245.png'),
    japanese: await loadPng('src/assets/images/regenerated_image_1788492346088.png'),
    liwetDaging: await loadPng('src/assets/images/regenerated_image_1788492348985.png'),
    rames: await loadPng('src/assets/images/regenerated_image_1788492351584.png'),
    liwetAyam: await loadPng('src/assets/images/regenerated_image_1788492340495.png'),
    chinese: await loadPng('src/assets/images/regenerated_image_1788492358759.png'),
    bali: await loadPng('src/assets/images/regenerated_image_1788492361183.png'),
    timbelAyam: await loadPng('src/assets/images/regenerated_image_1788492363192.png'),
  };

  // Helper for footer on pages 2-11
  function drawFooter(page) {
    const { width } = page.getSize();
    page.drawRectangle({
      x: 30,
      y: 18,
      width: width - 60,
      height: 24,
      color: white,
      borderColor: borderCol,
      borderWidth: 0.5,
    });

    page.drawText('@botani.catering.iicc', {
      x: 40,
      y: 26,
      size: 7,
      font: fontBold,
      color: navy,
    });

    page.drawText('+62 81 1133 0659', {
      x: 140,
      y: 26,
      size: 7,
      font: fontBold,
      color: darkText,
    });

    page.drawText('IPB International Convention Center, Botani Square, Jl. Raya Padjajaran, Tegallega, Kota Bogor', {
      x: 220,
      y: 26,
      size: 6.5,
      font: fontRegular,
      color: slateText,
    });
  }

  // =========================================================================
  // PAGE 1: COVER
  // =========================================================================
  const p1 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w1, height: h1 } = p1.getSize();

  // Top branding
  p1.drawRectangle({ x: 0, y: h1 - 85, width: w1, height: 85, color: darkNavy });
  p1.drawText('IPB INTERNATIONAL CONVENTION CENTER', {
    x: 40,
    y: h1 - 45,
    size: 14,
    font: fontBold,
    color: gold,
  });
  p1.drawText('PT BLST Holding Company of IPB University', {
    x: 40,
    y: h1 - 65,
    size: 8.5,
    font: fontRegular,
    color: white,
  });

  // Showcase visual box on Cover
  if (heroSnackPng) {
    p1.drawImage(heroSnackPng, {
      x: 40,
      y: h1 - 420,
      width: w1 - 80,
      height: 310,
    });
  } else {
    p1.drawRectangle({
      x: 40,
      y: h1 - 420,
      width: w1 - 80,
      height: 310,
      color: lightBg,
      borderColor: borderCol,
      borderWidth: 1,
    });
  }

  // Title section
  p1.drawText('Botani Catering', {
    x: 40,
    y: 360,
    size: 38,
    font: fontBold,
    color: darkText,
  });

  p1.drawText('By IPB International Convention Center', {
    x: 40,
    y: 330,
    size: 16,
    font: fontBold,
    color: slateText,
  });

  p1.drawText('"Serving Up Perfection"', {
    x: 40,
    y: 300,
    size: 14,
    font: fontOblique,
    color: gold,
  });

  // Highlight Box on Cover
  p1.drawRectangle({
    x: 40,
    y: 110,
    width: w1 - 80,
    height: 160,
    color: lightBg,
    borderColor: borderCol,
    borderWidth: 1,
  });

  p1.drawText('KATALOG RESMI LAYANAN KATERING:', {
    x: 60,
    y: 245,
    size: 10.5,
    font: fontBold,
    color: navy,
  });

  const p1Highlights = [
    '• Menu Box Paket Rp 35.000 (14 Pilihan Kombinasi Menu A - N)',
    '• Menu Box Paket Eksekutif Rp 50.000 (+ Aneka Soto / Sup Hangat)',
    '• Signature Bento Tradisional Nusantara & Japanese VIP',
    '• Prasmanan Buffet Non-Wedding (Mulai Rp 75.000 / Pax)',
    '• Prasmanan Buffet Resepsi Pernikahan (Mulai Rp 125.000 / Pax)',
    '• Custom Snack Box Manis, Asin & Kletikan (Mulai Rp 25.000 / Box)'
  ];

  let p1Hy = 225;
  p1Highlights.forEach((hl) => {
    p1.drawText(hl, { x: 60, y: p1Hy, size: 8.5, font: fontRegular, color: darkText });
    p1Hy -= 18;
  });

  // Cover Footer
  p1.drawRectangle({ x: 0, y: 0, width: w1, height: 80, color: darkNavy });
  p1.drawText('Hotline WhatsApp: +62 81 1133 0659  |  Instagram: @botani.catering.iicc', {
    x: 40,
    y: 45,
    size: 9.5,
    font: fontBold,
    color: gold,
  });
  p1.drawText('Botani Square Building Lt. 2, Jl. Raya Padjajaran, Tegallega, Kota Bogor 16127', {
    x: 40,
    y: 28,
    size: 8,
    font: fontRegular,
    color: white,
  });

  // =========================================================================
  // PAGE 2: PROFILE
  // =========================================================================
  const p2 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w2, height: h2 } = p2.getSize();

  p2.drawText('IPB INTERNATIONAL CONVENTION CENTER', {
    x: 40,
    y: h2 - 45,
    size: 10,
    font: fontBold,
    color: gold,
  });

  p2.drawText('Botani Catering', {
    x: 40,
    y: h2 - 80,
    size: 32,
    font: fontBold,
    color: darkText,
  });

  p2.drawText('By IPB International Convention Center', {
    x: 40,
    y: h2 - 105,
    size: 14,
    font: fontBold,
    color: slateText,
  });

  const p2Texts = [
    'Botani Catering merupakan penyedia layanan katering profesional di bawah naungan IPB',
    'International Convention Center (IICC), unit usaha milik BLST Holding Company of IPB, Bogor.',
    'Botani Catering melayani berbagai kebutuhan acara meliputi kegiatan perusahaan/instansi, acara',
    'keluarga dan social event lainnya.',
    '',
    'Kami menawarkan pilihan menu Nusantara dan Internasional dengan berbagai variasi produk mulai',
    'dari snack box, meal box, sampai dengan prasmanan. Diproduksi oleh tim berpengalaman dan diproses',
    'secara higenis menggunakan bahan-bahan berkualitas, Botani Catering siap menjadi katering',
    'terpercaya untuk setiap acara anda.'
  ];

  let p2Ty = h2 - 140;
  p2Texts.forEach((t) => {
    p2.drawText(t, { x: 40, y: p2Ty, size: 9.5, font: fontRegular, color: darkText });
    p2Ty -= 16;
  });

  // Visual card in middle
  p2.drawRectangle({
    x: 40,
    y: 80,
    width: w2 - 80,
    height: 440,
    color: lightBg,
    borderColor: borderCol,
    borderWidth: 1,
  });

  p2.drawText('STANDAR KUALITAS & KEUNGGULAN:', {
    x: 60,
    y: 490,
    size: 12,
    font: fontBold,
    color: navy,
  });

  const p2Bullets = [
    { title: '1. Reputasi Kelas Dunia (World-Class Venue Heritage)', desc: 'Didukung oleh pengalaman bertahun-tahun melayani ribuan agenda VIP kementerian, konferensi internasional, dan gala dinner kenegaraan di IICC Botani Square.' },
    { title: '2. 100% Halal & Higienis Teruji', desc: 'Seluruh bahan makanan bersertifikat halal, diproses di dapur modern berstandar HACCP dengan kontrol sanitasi dan kebersihan ketat.' },
    { title: '3. Tim Chef Profesional & Berpengalaman', desc: 'Dikelola oleh master chef dan tenaga tata boga profesional yang menjaga cita rasa, keaslian bumbu, dan estetika penyajian di setiap hidangan.' },
    { title: '4. Armada Pengiriman Tepat Waktu', desc: 'Didukung armada logistik khusus makanan sehingga makanan tiba dalam kondisi hangat, segar, dan siap disajikan tepat sebelum acara dimulai.' },
    { title: '5. Layanan Konsultasi & Fleksibilitas Menu', desc: 'Konsultasi gratis bersama tim Banquet Sales untuk menyusun varian menu sesuai tema kegiatan dan anggaran yang direncanakan.' }
  ];

  let p2By = 460;
  p2Bullets.forEach((b) => {
    p2.drawText(b.title, { x: 60, y: p2By, size: 9.5, font: fontBold, color: darkText });
    p2By -= 14;
    p2.drawText(b.desc, { x: 60, y: p2By, size: 8, font: fontRegular, color: slateText });
    p2By -= 26;
  });

  drawFooter(p2);

  // =========================================================================
  // PAGE 3: MENU BOX PAKET RP 35.000
  // =========================================================================
  const p3 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w3, height: h3 } = p3.getSize();

  p3.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h3 - 40, size: 9, font: fontBold, color: gold });
  p3.drawText('Menu Box', { x: 40, y: h3 - 75, size: 30, font: fontBold, color: darkText });
  p3.drawText('Paket Rp 35.000', { x: 40, y: h3 - 102, size: 18, font: fontBold, color: navy });

  const menu35Data = [
    { code: 'Menu A', text: 'Nasi putih, cah sayuran, ayam rica-rica, mie goreng, kerupuk, sambal.' },
    { code: 'Menu B', text: 'Nasi putih, buncis daging giling, ikan bumbu rujak, mie aceh, kerupuk, acar.' },
    { code: 'Menu C', text: 'Nasi putih, cah brokoli toffu, gurame dabu-dabu, perkedel kentang, buah kupas, kerupuk, sambel.' },
    { code: 'Menu D', text: 'Nasi putih, cah kailan ebi, ayam woku, tahu goreng, buah kupas, kerupuk, sambel.' },
    { code: 'Menu E', text: 'Nasi putih, brokoli garlic, roast chicken BBQ, chicken noodle, kerupuk, sambel.' },
    { code: 'Menu F', text: 'Nasi putih, cah kembang kol, rolade ayam, tempe orek, kerupuk, sambel.' },
    { code: 'Menu G', text: 'Nasi putih, buncis daging giling, ayam bakar ketumbar, bakwan jagung, buah kupas, kerupuk, sambel.' },
    { code: 'Menu H', text: 'Nasi putih, tumis sawi ijo komplit, bistik lidah, tempe mendoan, buah kupas, kerupuk, sambel.' },
    { code: 'Menu I', text: 'Nasi putih, tumis pakcoy bakso, pepes ayam kemangi, soun pengantin, kerupuk, sambel.' },
    { code: 'Menu J', text: 'Nasi putih, sapo tahu, chicken kungpou, kwetiaw baso, kerupuk, sambel.' },
    { code: 'Menu K', text: 'Nasi putih, tumis daun singkong, ayam pelekko, bakwan sayur, buah kupas, kerupuk, sambel.' },
    { code: 'Menu L', text: 'Nasi, tumis jagung muda kumplit, daging tumis belimbing wuluh, mie goreng kampung, buah kupas, kerupuk, sambel.' },
    { code: 'Menu M', text: 'Nasi putih, buncis balacan, bistik daging, vietnam noodle, kerupuk, sambel.' },
    { code: 'Menu N', text: 'Nasi putih, gulai nangka, ayam pop, tahu goreng tepung, kerupuk, sambel.' },
  ];

  // Draw 2 columns of menus (7 per column)
  let col1Y = h3 - 130;
  for (let i = 0; i < 7; i++) {
    const item = menu35Data[i];
    p3.drawRectangle({ x: 40, y: col1Y - 45, width: 245, height: 48, color: white, borderColor: borderCol, borderWidth: 0.8 });
    p3.drawRectangle({ x: 40, y: col1Y - 45, width: 28, height: 48, color: darkText });
    p3.drawText(item.code.replace('Menu ', ''), { x: 49, y: col1Y - 26, size: 10, font: fontBold, color: white });
    p3.drawText(item.code, { x: 75, y: col1Y - 14, size: 8.5, font: fontBold, color: navy });
    p3.drawText(item.text, { x: 75, y: col1Y - 28, size: 6.8, font: fontRegular, color: darkText, maxWidth: 200 });
    col1Y -= 55;
  }

  let col2Y = h3 - 130;
  for (let i = 7; i < 14; i++) {
    const item = menu35Data[i];
    p3.drawRectangle({ x: 310, y: col2Y - 45, width: 245, height: 48, color: white, borderColor: borderCol, borderWidth: 0.8 });
    p3.drawRectangle({ x: 310, y: col2Y - 45, width: 28, height: 48, color: darkText });
    p3.drawText(item.code.replace('Menu ', ''), { x: 319, y: col2Y - 26, size: 10, font: fontBold, color: white });
    p3.drawText(item.code, { x: 345, y: col2Y - 14, size: 8.5, font: fontBold, color: navy });
    p3.drawText(item.text, { x: 345, y: col2Y - 28, size: 6.8, font: fontRegular, color: darkText, maxWidth: 200 });
    col2Y -= 55;
  }

  // Bento box image at the bottom
  if (bento35Png) {
    p3.drawImage(bento35Png, {
      x: (w3 - 260) / 2,
      y: 55,
      width: 260,
      height: 250,
    });
  }

  drawFooter(p3);

  // =========================================================================
  // PAGE 4: MENU BOX PAKET RP 50.000 (+ SUP/SOTO)
  // =========================================================================
  const p4 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w4, height: h4 } = p4.getSize();

  p4.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h4 - 40, size: 9, font: fontBold, color: gold });
  p4.drawText('Menu Box', { x: 40, y: h4 - 75, size: 30, font: fontBold, color: darkText });
  p4.drawText('Paket Rp 50.000', { x: 40, y: h4 - 102, size: 18, font: fontBold, color: navy });

  const menu50Data = [
    { code: 'Menu A', text: 'Soto bogor, nasi putih, cah sayuran, ayam rica-rica, mie goreng, kerupuk, sambel.' },
    { code: 'Menu B', text: 'Soto tangkar, nasi putih, buncis daging giling, ikan bumbu rujak, mie aceh, kerupuk, acar.' },
    { code: 'Menu C', text: 'Soto ayam, nasi putih, cah brokoli toffu, gurame dabu-dabu, perkedel kentang, buah kupas, kerupuk, sambel.' },
    { code: 'Menu D', text: 'Sop ayam bakso, nasi putih, cah kailan ebi, ayam woku, tahu goreng, buah kupas, sambel.' },
    { code: 'Menu E', text: 'Sop kacang merah, nasi putih, brokoli garlic, roast chicken bbq, chicken noodle, kerupuk, sambel.' },
    { code: 'Menu F', text: 'Tomyam goong, nasi putih, cah kembang kol, rolade ayam, tempe orek, kerupuk, sambel.' },
    { code: 'Menu G', text: 'Soto banjar, nasi putih, buncis daging giling, ayam bakar ketumbar, bakwan jagung, buah kupas, kerupuk, sambel.' },
    { code: 'Menu H', text: 'Sop pengantin, nasi putih, tumis sawi ijo kumplit, bistik lidah, tempe mendoan, buah kupasa, lemon sereh, kerupuk, sambel.' },
    { code: 'Menu I', text: 'Soto betawi, nasi putih, tumis pakcoy bakso, pepes ayam kemang, soun pengantin, kerupuk sambel.' },
    { code: 'Menu J', text: 'Asparagus sop, nasi putih, sapo tahu, chicken kungpou, kwetiaw bakso, kerupuk, sambel.' },
    { code: 'Menu K', text: 'Cotto makasar, nasi putih, tumis daun singkong, ayam palekko, buah kupas, kerupuk, sambel.' },
    { code: 'Menu L', text: 'Soto lamongan, nasi putih, tumis jagung muda kumplit, daging tumis belimbing wuluh, mie goreng kampung, buah kupas, kerupuk, sambel.' },
    { code: 'Menu M', text: 'Tomyam soup, nasi putih, buncis balancan, bistik daging, vietnam noodle, kerupuk, sambel.' },
    { code: 'Menu N', text: 'Sop bakso daging, nasi putih, gulai nangka, ayam pop, tahu goreng tepung, kerupuk, sambel.' },
  ];

  let col1Y50 = h4 - 130;
  for (let i = 0; i < 7; i++) {
    const item = menu50Data[i];
    p4.drawRectangle({ x: 40, y: col1Y50 - 45, width: 245, height: 48, color: white, borderColor: borderCol, borderWidth: 0.8 });
    p4.drawRectangle({ x: 40, y: col1Y50 - 45, width: 28, height: 48, color: darkNavy });
    p4.drawText(item.code.replace('Menu ', ''), { x: 49, y: col1Y50 - 26, size: 10, font: fontBold, color: white });
    p4.drawText(item.code, { x: 75, y: col1Y50 - 14, size: 8.5, font: fontBold, color: navy });
    p4.drawText(item.text, { x: 75, y: col1Y50 - 28, size: 6.8, font: fontRegular, color: darkText, maxWidth: 200 });
    col1Y50 -= 55;
  }

  let col2Y50 = h4 - 130;
  for (let i = 7; i < 14; i++) {
    const item = menu50Data[i];
    p4.drawRectangle({ x: 310, y: col2Y50 - 45, width: 245, height: 48, color: white, borderColor: borderCol, borderWidth: 0.8 });
    p4.drawRectangle({ x: 310, y: col2Y50 - 45, width: 28, height: 48, color: darkNavy });
    p4.drawText(item.code.replace('Menu ', ''), { x: 319, y: col2Y50 - 26, size: 10, font: fontBold, color: white });
    p4.drawText(item.code, { x: 345, y: col2Y50 - 14, size: 8.5, font: fontBold, color: navy });
    p4.drawText(item.text, { x: 345, y: col2Y50 - 28, size: 6.8, font: fontRegular, color: darkText, maxWidth: 200 });
    col2Y50 -= 55;
  }

  if (bento50Png) {
    p4.drawImage(bento50Png, {
      x: (w4 - 260) / 2,
      y: 55,
      width: 260,
      height: 250,
    });
  }

  drawFooter(p4);

  // =========================================================================
  // PAGE 5: SIGNATURE BENTO & MEAL BOX
  // =========================================================================
  const p5 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w5, height: h5 } = p5.getSize();

  p5.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h5 - 40, size: 9, font: fontBold, color: gold });
  p5.drawText('Menu Box', { x: 40, y: h5 - 75, size: 30, font: fontBold, color: darkText });

  const specialtyItems = [
    { title: 'Timbel Gepuk', price: 'Rp 65.000', desc: 'Nasi timbel, empal gepuk, tahu goreng, lalapan, sambal terasi, puding coklat', img: specImages.timbelGepuk },
    { title: 'Japanese', price: 'Rp 50.000', desc: 'Beef teriyaki, chiken yakiniu, nasi putih, salad bento, puding', img: specImages.japanese },
    { title: 'Nasi Liwet Daging', price: 'Rp 75.000', desc: 'Nasi liwet, empal gepuk, tahu goreng, lalapan, sambal terasi, ikan balado, tempe goreng, puding cokelat', img: specImages.liwetDaging },
    { title: 'Nasi Rames', price: 'Rp 35.000', desc: 'Nasi, ayam goreng, tempe orek, lalapan, sambal, telur balado', img: specImages.rames },
    { title: 'Nasi Liwet Ayam', price: 'Rp 55.000', desc: 'Nasi liwet, ayam goreng, tahu goreng, lalapan, sambal terasi, ikan balado, tempe goreng, puding cokelat', img: specImages.liwetAyam },
    { title: 'Chinese', price: 'Rp 35.000', desc: 'Chicken kungpao, brokol garlic, chinese noodle, nasi', img: specImages.chinese },
    { title: 'Nasi Bali', price: 'Rp 50.000', desc: 'Nasi putih, ayam sambal matah, telur pindang, sambal, sate lilit, lawar, puding', img: specImages.bali },
    { title: 'Timbel Ayam', price: 'Rp 50.000', desc: 'Nasi timbel, ayam goreng, tahu goreng, lalapan, sambal terasi, puding cokelat', img: specImages.timbelAyam },
  ];

  // 4 rows x 2 cols
  for (let idx = 0; idx < specialtyItems.length; idx++) {
    const item = specialtyItems[idx];
    const row = Math.floor(idx / 2);
    const col = idx % 2;
    const cardX = col === 0 ? 40 : 310;
    const cardY = h5 - 100 - (row * 175);

    // Card background
    p5.drawRectangle({
      x: cardX,
      y: cardY - 150,
      width: 245,
      height: 160,
      color: white,
      borderColor: borderCol,
      borderWidth: 0.8,
    });

    // Image thumbnail
    if (item.img) {
      p5.drawImage(item.img, {
        x: cardX + 130,
        y: cardY - 140,
        width: 105,
        height: 100,
      });
    }

    // Text on left of card
    p5.drawText(item.title, { x: cardX + 12, y: cardY - 22, size: 11, font: fontBold, color: darkText });
    p5.drawText(item.desc, { x: cardX + 12, y: cardY - 40, size: 7.2, font: fontRegular, color: slateText, maxWidth: 110 });

    // Price badge
    p5.drawRectangle({
      x: cardX + 12,
      y: cardY - 135,
      width: 75,
      height: 20,
      color: darkText,
    });
    p5.drawText(item.price, { x: cardX + 18, y: cardY - 121, size: 8.5, font: fontBold, color: white });
  }

  drawFooter(p5);

  // =========================================================================
  // PAGE 6: PAKET PRASMANAN (NON-WEDDING)
  // =========================================================================
  const p6 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w6, height: h6 } = p6.getSize();

  p6.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h6 - 40, size: 9, font: fontBold, color: gold });
  p6.drawText('Paket Prasmanan', { x: 40, y: h6 - 75, size: 30, font: fontBold, color: darkText });
  p6.drawText('(Non-Wedding)', { x: 40, y: h6 - 105, size: 16, font: fontBold, color: darkText });
  p6.drawText('*Minimal order 50 pax', { x: 180, y: h6 - 105, size: 10, font: fontRegular, color: slateText });

  // Banner Price
  p6.drawRectangle({
    x: 40,
    y: h6 - 165,
    width: w6 - 80,
    height: 45,
    color: darkText,
  });
  p6.drawText('Mulai dari Rp 75.000 / PAX', {
    x: 60,
    y: h6 - 140,
    size: 16,
    font: fontBold,
    color: white,
  });

  // Services details
  p6.drawRectangle({
    x: 40,
    y: 80,
    width: w6 - 80,
    height: 490,
    color: lightBg,
    borderColor: borderCol,
    borderWidth: 1,
  });

  p6.drawText('FASILITAS & KELENGKAPAN PRASMANAN NON-WEDDING:', {
    x: 60,
    y: 535,
    size: 12,
    font: fontBold,
    color: navy,
  });

  const p6Details = [
    '• Menu Hidangan Lengkap Standar Hotel Bintang Lima:',
    '  - Pilihan Nasi Putih / Nasi Goreng Spesial',
    '  - Pilihan Aneka Olahan Daging Sapi / Ayam / Ikan Gurame / Dori Fillet',
    '  - Aneka Sayuran Segar & Sup Panas Berkuah Rempah',
    '  - Pelengkap: Kerupuk Udang Renyah, Aneka Sambal Khas Nusantara, Acar Segar',
    '  - Dessert: Puding Aneka Rasa dengan Vla Vanila, Buah Potong Segar 3 Varian',
    '  - Minuman: Air Mineral Dingin & Hangat Galon Higienis',
    '',
    '• Peralatan & Dekorasi Meja Prasmanan Lengkap:',
    '  - Meja buffet panjang dengan taplak elegan & skirting dekoratif',
    '  - Roll-top chafing dish pemanas stainless steel mewah',
    '  - Piring porselen, sendok-garpu stainless, mangkuk sup, dan gelas',
    '  - Bunga meja hiasan centerpiece segar penambah estetika',
    '',
    '• Layanan Pramusaji Profesional (Service Team):',
    '  - Tenaga pramusaji berseragam rapi, sigap, dan terlatih standar IICC',
    '  - Standby sepanjang acara untuk memastikan ketersediaan dan kebersihan buffet',
    '  - Pengaturan penataan dan pembersihan area makan setelah acara selesai'
  ];

  let p6Dy = 505;
  p6Details.forEach((line) => {
    p6.drawText(line, {
      x: line.startsWith('  -') ? 75 : 60,
      y: p6Dy,
      size: 8.8,
      font: line.startsWith('•') ? fontBold : fontRegular,
      color: line.startsWith('•') ? darkText : slateText,
    });
    p6Dy -= 18;
  });

  drawFooter(p6);

  // =========================================================================
  // PAGE 7: PAKET PRASMANAN (WEDDING)
  // =========================================================================
  const p7 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w7, height: h7 } = p7.getSize();

  p7.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h7 - 40, size: 9, font: fontBold, color: gold });
  p7.drawText('Paket Prasmanan', { x: 40, y: h7 - 75, size: 30, font: fontBold, color: darkText });
  p7.drawText('(Wedding)', { x: 40, y: h7 - 105, size: 16, font: fontBold, color: gold });
  p7.drawText('*Minimal order 200 pax', { x: 140, y: h7 - 105, size: 10, font: fontRegular, color: slateText });

  p7.drawRectangle({
    x: 40,
    y: h7 - 165,
    width: w7 - 80,
    height: 45,
    color: darkNavy,
  });
  p7.drawText('Mulai dari Rp 125.000 / PAX', {
    x: 60,
    y: h7 - 140,
    size: 16,
    font: fontBold,
    color: gold,
  });

  p7.drawRectangle({
    x: 40,
    y: 80,
    width: w7 - 80,
    height: 490,
    color: lightBg,
    borderColor: borderCol,
    borderWidth: 1,
  });

  p7.drawText('PAKET ROYAL WEDDING BUFFET & BANQUET IICC:', {
    x: 60,
    y: 535,
    size: 12,
    font: fontBold,
    color: navy,
  });

  const p7Details = [
    '• Menu Jamuan Agung Pengantin & Keluarga:',
    '  - Pilihan Nasi: Nasi Putih Pulen Wangi + Nasi Liwet / Nasi Kebuli / Nasi Goreng',
    '  - Hidangan Utama 1 (Daging Sapi): Rendang Minang, Beef Teriyaki, atau Bistik Lidah',
    '  - Hidangan Utama 2 (Ayam): Ayam Bakar Madu, Ayam Rica-Rica, atau Rolade Ayam Saus Keju',
    '  - Hidangan Utama 3 (Seafood): Dori Saus Telur Asin, Gurame Asam Manis, Udang Mayonase',
    '  - Pilihan Sayuran: Capcay Seafood, Cah Brokoli Jamur Tofu, atau Asinan Pengantin',
    '  - Soup Station: Sup Pengantin Mutiara, Soto Betawi Daging, atau Tomyam Seafood',
    '',
    '• Luxury Dessert Corner & Stall:',
    '  - Aneka Mini Pastry, Fruit Tartlet, Brownies Cup, Puding Sutra',
    '  - Pilihan Es Tradisional: Es Doger, Es Teler, atau Es Kelapa Muda Kopyor',
    '  - Buah potong segar musiman berkualitas ekspor',
    '',
    '• Fasilitas Eksklusif Wedding:',
    '  - Dekorasi Buffet Mewah bernuansa Royal Gold dengan rangkaian bunga segar',
    '  - Banquet Captain & Waiter terlatih khusus resepsi pernikahan berbusana rapi',
    '  - Food testing gratis untuk 6 orang keluarga inti sebelum hari pelaksanaan'
  ];

  let p7Dy = 505;
  p7Details.forEach((line) => {
    p7.drawText(line, {
      x: line.startsWith('  -') ? 75 : 60,
      y: p7Dy,
      size: 8.8,
      font: line.startsWith('•') ? fontBold : fontRegular,
      color: line.startsWith('•') ? darkText : slateText,
    });
    p7Dy -= 18;
  });

  drawFooter(p7);

  // =========================================================================
  // PAGE 8: PILIHAN MENU PRASMANAN (A - N)
  // =========================================================================
  const p8 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w8, height: h8 } = p8.getSize();

  p8.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h8 - 40, size: 9, font: fontBold, color: gold });
  p8.drawText('Pilihan Menu Prasmanan', { x: 40, y: h8 - 75, size: 28, font: fontBold, color: darkText });

  const prasmananList = [
    { code: 'Menu A', text: 'Soto bogor, nasi putih, cah sayuran, ayam bakar kabayan, dori saus mentega, mie goreng, kerupuk, sambel.' },
    { code: 'Menu B', text: 'Soto tangkar, nasi putih, buncis daging giling, ikan bumbu rujak, ayam tumis kecap, mie aceh, kerupuk, sambel.' },
    { code: 'Menu C', text: 'Soto ayam, nasi putih, cah brokoli toffu, gurame dabu-dabu, ayam saus mentega, perkedel kentang, buah kupas, kerupuk, sambel.' },
    { code: 'Menu D', text: 'Sop ayam bakso, nasi putih, cah kailan ebi, ayam woku, ikan saus padang, tahu goreng, buah kupas, kerupuk, sambel.' },
    { code: 'Menu E', text: 'Sop kacang merah, nasi putih, brokoli garlic, roast chicken bbq, dory mayonase, chicken noodle, kerupuk, sambel.' },
    { code: 'Menu F', text: 'Tomyam seafood, nasi putih, cah kembang kol, ayam bakar bali, krengseng daging, tempe orek, kerupuk, sambel.' },
    { code: 'Menu G', text: 'Soto banjar, nasi putih, buncis daging giling, ayam bakar ketumbar, gurame saus bangkok, bakwan jagung, buah kupas, kerupuk, sambel.' },
    { code: 'Menu H', text: 'Sop pengantin, nasi putih, tumis sawi ijo kumplit, udang mayonase, ayam tuturuga, tempe mendoan, buah kapas, kerupuk, sambel.' },
    { code: 'Menu I', text: 'Soto betawi, nasi putih, tumis pakcoy bakso, pepes ayam kemangi, tumis cumi asin, soun pengantin, kerupuk, sambel.' },
    { code: 'Menu J', text: 'Asparagus sop, nasi putih, sapo tahu, chicken kungpou, fish katsu, chicken noodle, kerupuk, sambel.' },
    { code: 'Menu K', text: 'Cotto makasar, nasi putih, tumis daun singkong, ayam palekko, daging asam padeh, bakwan sayur, buah kupas, kerupuk, sambel.' },
    { code: 'Menu L', text: 'Soto lamongan, nasi putih, tumis jagung muda kumplit, daging tumis belimbing wuluh, ayam bakar kecap, balado kentang, buah kupas, jus, kerupuk, sambel.' },
    { code: 'Menu M', text: 'Tomyum sop, nasi putih, buncis balacan, bistik lidah, ikan woku, vietnam noodle, kerupuk, sambel.' },
    { code: 'Menu N', text: 'Sop bakso daging, nasi putih, gulai nangka, ayam pop, ikan bakar padang, tahu goreng tepung, kerupuk, sambel.' },
  ];

  let p8col1Y = h8 - 110;
  for (let i = 0; i < 7; i++) {
    const item = prasmananList[i];
    p8.drawRectangle({ x: 40, y: p8col1Y - 70, width: 245, height: 75, color: white, borderColor: borderCol, borderWidth: 0.8 });
    p8.drawRectangle({ x: 40, y: p8col1Y - 70, width: 28, height: 75, color: darkText });
    p8.drawText(item.code.replace('Menu ', ''), { x: 49, y: p8col1Y - 38, size: 10, font: fontBold, color: white });
    p8.drawText(item.code, { x: 75, y: p8col1Y - 16, size: 9, font: fontBold, color: navy });
    p8.drawText(item.text, { x: 75, y: p8col1Y - 32, size: 7.2, font: fontRegular, color: darkText, maxWidth: 200 });
    p8col1Y -= 85;
  }

  let p8col2Y = h8 - 110;
  for (let i = 7; i < 14; i++) {
    const item = prasmananList[i];
    p8.drawRectangle({ x: 310, y: p8col2Y - 70, width: 245, height: 75, color: white, borderColor: borderCol, borderWidth: 0.8 });
    p8.drawRectangle({ x: 310, y: p8col2Y - 70, width: 28, height: 75, color: darkText });
    p8.drawText(item.code.replace('Menu ', ''), { x: 319, y: p8col2Y - 38, size: 10, font: fontBold, color: white });
    p8.drawText(item.code, { x: 345, y: p8col2Y - 16, size: 9, font: fontBold, color: navy });
    p8.drawText(item.text, { x: 345, y: p8col2Y - 32, size: 7.2, font: fontRegular, color: darkText, maxWidth: 200 });
    p8col2Y -= 85;
  }

  drawFooter(p8);

  // =========================================================================
  // PAGE 9: MENU SNACK BOX (NON WEDDING)
  // =========================================================================
  const p9 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w9, height: h9 } = p9.getSize();

  p9.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h9 - 40, size: 9, font: fontBold, color: gold });
  p9.drawText('Menu Snack Box (Non Wedding)', { x: 40, y: h9 - 75, size: 26, font: fontBold, color: darkText });
  p9.drawText('Menu bisa dikostumisasi sesuai selera.', { x: 40, y: h9 - 95, size: 10, font: fontRegular, color: slateText });

  // Banner Price
  p9.drawRectangle({
    x: 40,
    y: h9 - 145,
    width: w9 - 80,
    height: 38,
    color: darkText,
  });
  p9.drawText('Mulai dari Rp 25.000 / BOX', {
    x: 60,
    y: h9 - 122,
    size: 13,
    font: fontBold,
    color: white,
  });

  // Section 1: Snack Manis
  p9.drawRectangle({ x: 40, y: h9 - 175, width: 140, height: 22, color: darkNavy });
  p9.drawText('Pilihan Snack Manis', { x: 50, y: h9 - 160, size: 9.5, font: fontBold, color: white });

  const manisList = [
    '• Vanilla Sultana', '• Kaya Twist', '• Pandan Lattice', '• Banana Cake', '• Brownies',
    '• Apple Pie', '• American Chocolate Cake', '• Eclair', '• Marmer Cake', '• Lemon Cake'
  ];

  let smY = h9 - 200;
  for (let i = 0; i < manisList.length; i += 2) {
    p9.drawText(manisList[i], { x: 60, y: smY, size: 9, font: fontRegular, color: darkText });
    if (manisList[i + 1]) {
      p9.drawText(manisList[i + 1], { x: 320, y: smY, size: 9, font: fontRegular, color: darkText });
    }
    smY -= 20;
  }

  // Section 2: Snack Asin
  p9.drawRectangle({ x: 40, y: h9 - 335, width: 140, height: 22, color: darkNavy });
  p9.drawText('Pilihan Snack Asin', { x: 50, y: h9 - 320, size: 9.5, font: fontBold, color: white });

  const asinList = [
    '• Tahu Bakso', '• Sosis Solo', '• Risol Mayo', '• Samosa', '• Macaroni Schotel',
    '• Sosis Roll', '• Asinan Buah', '• Tempe Mendoan', '• Holland Kroket', '• Bitter Ballen'
  ];

  let saY = h9 - 360;
  for (let i = 0; i < asinList.length; i += 2) {
    p9.drawText(asinList[i], { x: 60, y: saY, size: 9, font: fontRegular, color: darkText });
    if (asinList[i + 1]) {
      p9.drawText(asinList[i + 1], { x: 320, y: saY, size: 9, font: fontRegular, color: darkText });
    }
    saY -= 20;
  }

  // Section 3: Kletikan
  p9.drawRectangle({ x: 40, y: h9 - 495, width: 140, height: 22, color: darkNavy });
  p9.drawText('Pilihan Kletikan', { x: 50, y: h9 - 480, size: 9.5, font: fontBold, color: white });

  const kletikanList = [
    '• Keripik Singkong Balado', '• Gabus Asin', '• Kacang Telur',
    '• Keripik Pisang', '• Talas Stick'
  ];

  let klY = h9 - 520;
  for (let i = 0; i < kletikanList.length; i += 2) {
    p9.drawText(kletikanList[i], { x: 60, y: klY, size: 9, font: fontRegular, color: darkText });
    if (kletikanList[i + 1]) {
      p9.drawText(kletikanList[i + 1], { x: 320, y: klY, size: 9, font: fontRegular, color: darkText });
    }
    klY -= 20;
  }

  // Box Package Composition Guide
  p9.drawRectangle({
    x: 40,
    y: 80,
    width: w9 - 80,
    height: 155,
    color: lightBg,
    borderColor: borderCol,
    borderWidth: 1,
  });

  p9.drawText('KOMPOSISI PAKET SNACK BOX TERPOPULER:', {
    x: 60,
    y: 215,
    size: 10,
    font: fontBold,
    color: navy,
  });

  const snackCombos = [
    '• Paket 2 Kue + Air Mineral: 1 Snack Manis + 1 Snack Asin + Air Mineral Cup (Rp 25.000 / Box)',
    '• Paket 3 Kue + Air Mineral: 1 Snack Manis + 1 Snack Asin + 1 Kletikan Gurih + Air Mineral (Rp 30.000 / Box)',
    '• Paket 4 Kue Komplit: 2 Snack Manis + 1 Snack Asin + 1 Kletikan + Teh Kotak / Juice (Rp 35.000 / Box)',
    '• Kemasan: Box eksklusif Botani Catering higienis, bungkusan plastik rapi, serbet & tusuk gigi.'
  ];

  let scY = 195;
  snackCombos.forEach((c) => {
    p9.drawText(c, { x: 60, y: scY, size: 8, font: fontRegular, color: darkText });
    scY -= 18;
  });

  drawFooter(p9);

  // =========================================================================
  // PAGE 10: SYARAT DAN KETENTUAN
  // =========================================================================
  const p10 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w10, height: h10 } = p10.getSize();

  p10.drawText('IPB INTERNATIONAL CONVENTION CENTER', { x: 40, y: h10 - 40, size: 9, font: fontBold, color: gold });
  p10.drawText('Syarat dan Ketentuan', { x: 40, y: h10 - 75, size: 28, font: fontBold, color: darkText });

  const termsList = [
    {
      num: '1. Ketentuan Umum',
      items: [
        '1. Syarat dan ketentuan ini mengatur hubungan kerja antara Penyedia Jasa Catering dan Pelanggan/Klien dalam penyediaan layanan makanan dan minuman untuk berbagai jenis acara.',
        '2. Dengan melakukan pemesanan, Klien dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam dokumen ini.'
      ]
    },
    {
      num: '2. Pemesanan',
      items: [
        '1. Pemesanan dinyatakan resmi dan mengikat setelah Klien menyetujui penawaran harga secara tertulis dan melakukan pembayaran uang muka (Down Payment/DP).',
        '2. Pemesanan catering dilakukan paling lambat H-7 sebelum tanggal pelaksanaan acara, kecuali disepakati lain secara tertulis.',
        '3. Klien wajib memberikan informasi yang lengkap dan akurat mengenai: Jenis acara, Tanggal/waktu/lokasi pelaksanaan, Jumlah peserta, Pilihan menu dan layanan tambahan.'
      ]
    },
    {
      num: '3. Perubahan Pesanan',
      items: [
        '1. Permintaan perubahan menu, jumlah porsi, waktu, atau detail layanan lainnya dapat dilakukan maksimal H-3 sebelum hari pelaksanaan acara.',
        '2. Setiap perubahan akan disesuaikan dengan ketersediaan dan dapat mempengaruhi total biaya.',
        '3. Pengurangan jumlah porsi setelah batas waktu perubahan tidak dapat mengurangi nilai tagihan yang telah disepakati.'
      ]
    },
    {
      num: '4. Pembayaran',
      items: [
        '1. Klien wajib melakukan pembayaran uang muka (DP) sebesar 50% dari total nilai pesanan sebagai konfirmasi pemesanan.',
        '2. Pelunasan pembayaran wajib dilakukan paling lambat H-1 sebelum hari pelaksanaan acara melalui transfer ke rekening resmi.',
        '3. Keterlambatan pembayaran dapat mengakibatkan penundaan atau pembatalan layanan.'
      ]
    },
    {
      num: '5. Pembatalan',
      items: [
        '1. Pembatalan pemesanan wajib disampaikan secara tertulis oleh Klien.',
        '2. Ketentuan pembatalan: Pembatalan H-7 atau lebih: DP tidak dapat dikembalikan; Pembatalan H-3 atau kurang: Klien dikenakan 100% dari total nilai pesanan.'
      ]
    },
    {
      num: '6. Pelaksanaan Layanan',
      items: [
        '1. Penyedia Jasa Catering bertanggung jawab menyediakan makanan dan layanan sesuai kesepakatan tertulis.',
        '2. Keluhan atau komplain terkait layanan wajib disampaikan pada hari yang sama dengan pelaksanaan acara.'
      ]
    },
    {
      num: '7. Harga dan Biaya Tambahan',
      items: [
        '1. Harga penawaran belum termasuk biaya tambahan seperti: Peralatan khusus, Dekorasi tambahan di luar paket, atau Permintaan khusus di luar paket yang disepakati.'
      ]
    }
  ];

  let tY = h10 - 105;
  termsList.forEach((sec) => {
    p10.drawText(sec.num, { x: 40, y: tY, size: 9, font: fontBold, color: navy });
    tY -= 13;

    sec.items.forEach((it) => {
      p10.drawText(it, { x: 40, y: tY, size: 7.2, font: fontRegular, color: darkText, maxWidth: w10 - 80 });
      tY -= 17;
    });
    tY -= 6;
  });

  drawFooter(p10);

  // =========================================================================
  // PAGE 11: CLOSING & CONTACT US
  // =========================================================================
  const p11 = pdfDoc.addPage([595.28, 841.89]);
  const { width: w11, height: h11 } = p11.getSize();

  // Top banner
  p11.drawRectangle({ x: 0, y: h11 - 120, width: w11, height: 120, color: darkNavy });
  p11.drawText('IPB INTERNATIONAL CONVENTION CENTER', {
    x: 40,
    y: h11 - 50,
    size: 13,
    font: fontBold,
    color: gold,
  });
  p11.drawText('Botani Catering by IICC - Serving Up Perfection', {
    x: 40,
    y: h11 - 75,
    size: 10,
    font: fontRegular,
    color: white,
  });

  // Center Quote Banner
  p11.drawRectangle({
    x: 40,
    y: h11 - 320,
    width: w11 - 80,
    height: 160,
    color: lightBg,
    borderColor: gold,
    borderWidth: 1.5,
  });

  p11.drawText('“Perpaduan bahan pilihan, proses yang higenis,', {
    x: 65,
    y: h11 - 220,
    size: 16,
    font: fontBold,
    color: navy,
  });

  p11.drawText('dan penyajian profesional adalah komitmen kami.”', {
    x: 65,
    y: h11 - 250,
    size: 16,
    font: fontBold,
    color: navy,
  });

  p11.drawText('- Botani Catering by IPB International Convention Center', {
    x: 65,
    y: h11 - 285,
    size: 10,
    font: fontOblique,
    color: gold,
  });

  // Contact Details Section
  p11.drawText('Contact Us', {
    x: 40,
    y: h11 - 370,
    size: 26,
    font: fontBold,
    color: darkText,
  });

  p11.drawRectangle({
    x: 40,
    y: 120,
    width: w11 - 80,
    height: 310,
    color: white,
    borderColor: borderCol,
    borderWidth: 1,
  });

  const contactRows = [
    { label: 'Hotline / WhatsApp:', val: '+62 81 1133 0659 (Fast Response)' },
    { label: 'Instagram Resmi:', val: '@botani.catering.iicc' },
    { label: 'Alamat Kantor:', val: 'IPB International Convention Center, Botani Square Building Lt. 2,' },
    { label: '', val: 'Jl. Raya Padjajaran, Tegallega, Bogor Tengah, Kota Bogor, Jawa Barat 16127, Indonesia.' },
    { label: 'Unit Usaha:', val: 'PT BLST (Bogor Life Science & Technology) - Holding Company of IPB' },
    { label: 'Jam Layanan:', val: 'Senin - Minggu: 08.00 - 20.00 WIB' },
    { label: 'Jangkauan Pengiriman:', val: 'Kota Bogor, Kab. Bogor, Depok, Jakarta, Tangerang, Bekasi (Jabodetabek)' }
  ];

  let cRowY = h11 - 430;
  contactRows.forEach((cr) => {
    if (cr.label) {
      p11.drawText(cr.label, { x: 60, y: cRowY, size: 9.5, font: fontBold, color: navy });
      p11.drawText(cr.val, { x: 210, y: cRowY, size: 9, font: fontRegular, color: darkText });
    } else {
      p11.drawText(cr.val, { x: 210, y: cRowY, size: 9, font: fontRegular, color: darkText });
    }
    cRowY -= 25;
  });

  // Final thank you note
  p11.drawRectangle({
    x: 60,
    y: 140,
    width: w11 - 120,
    height: 45,
    color: darkNavy,
  });
  p11.drawText('Terima kasih telah mempercayakan agenda istimewa Anda kepada Botani Catering.', {
    x: 75,
    y: 160,
    size: 8.5,
    font: fontBold,
    color: white,
  });

  drawFooter(p11);

  // Save the file
  const pdfBytes = await pdfDoc.save();
  const outPathPublic = path.resolve(process.cwd(), 'public/Katalog-Menu-Botani-Catering-IICC.pdf');
  fs.writeFileSync(outPathPublic, pdfBytes);

  const outPathDist = path.resolve(process.cwd(), 'dist/Katalog-Menu-Botani-Catering-IICC.pdf');
  try {
    if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
      fs.writeFileSync(outPathDist, pdfBytes);
    }
  } catch (e) {}

  console.log('Successfully generated 11-page official catalog PDF at:', outPathPublic, 'size:', pdfBytes.length);
}

generatePDF().catch(console.error);
