const fs = require('fs');
const path = require('path');

// Your routes
const routes = [
    '/',
    '/*',
    '/skin',
    '/hair',
    '/body',
    '/nail',
    '/blogs',
    '/blog/*',
    '/medicalprocedure',
    '/aestheticprocedure',
    '/krishnameera',
    '/divya',
    '/about',
    '/contact',
    '/acne',
    '/skininfections',
    '/urticaria',
    '/skingrowth',
    '/pigmentation',
    '/vitiligo',
    '/psoriasis',
    '/chroniclegulcers',
    '/pcos',
    '/unevenskintone',
    '/openpores',
    '/skintags',
    '/vaginaldischarge',
    '/dandruff',
    '/hairloss',
    '/damagedhair',
    '/prematuregreying',
    '/excessivesweating',
    '/excessivebodyhair',
    '/nailinfection',
    '/dystrophy',
    '/ingrowingToeNail',
    '/chemicalPeeling',
    '/laserSkinToningAnd',
    '/microneedling',
    '/prp',
    '/hairRemovalWithLaser',
    '/wartTreatment',
    '/microdermabrasion',
    '/hydrafacial',
    '/medifacial',
    '/Acnescarandporetreatments',
    '/Tattooremoval',
    '/molesandfreckles',
    '/comedoneextraction',
    '/biopsies',
    '/procedureforingrowntoenails',
    '/keloids',
    '/scartreatment',
    '/cornwarttreatment',
    '/lipomaremoval',
    '/vitiligosurgeries',
    '/earloberepair'
  // You can add more routes here
];

// Get the current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = (routes) => {
  const baseUrl = 'https://thereflectclinic.com'; 
  const lastMod = getCurrentDate();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
};

// Write sitemap to file
const writeSitemapToFile = (xml) => {
  const filePath = path.join(__dirname, 'sitemap.xml');
  fs.writeFileSync(filePath, xml, 'utf8');
  console.log('Sitemap generated successfully!');
};

const sitemapXml = generateSitemap(routes);
writeSitemapToFile(sitemapXml);
