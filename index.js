const request = require('request-promise');
const fs = require('fs');
const cheerio = require('cheerio');

// Note: must use jQuery Inject extension

async function main() {
    const html = await request.get
    ('https://reactnativetutorial.net/css-selectors/lesson6.html'
    );
    fs.writeFileSync('./test.html', html);
    const $ = await cheerio.load(html);
    $('h2').each((index, element) => {
        console.log($(element).text());

    // CSS selector
    $('#red').text();

    //HTML selector
    $('[data-customer="22293"]').text();
        
    
    });
    
}

main();