'use script'
const specials = [
    {
        color: '#FF7518',
        name: 'Pumpkin Spice',
        pic: 'pumpkin-spice-latte.jpg',
        alt: 'picture of pumpkin spice',
        day: 'Sunday',
        desc: `which makes us wish it was always Fall, as this is one
    of our top sellers!`,
        content: `<p><span class="feature"><span id="special-heading-1"></span> is </span> Gluten-free selfies
        normcore chillwave. Listicle 90's
        chambray, seitan cold-pressed try-hard Etsy authentic flexitarian vinyl. Meditation bespoke freegan,
        single-origin coffee cred seitan 90's gentrify brunch Williamsburg squid cold-pressed. Brooklyn
        readymade
        Tumblr wayfarers ethical.</p>
        <p><span class="feature">Enjoy <span id="special-heading-2"></span> with our </span> Polaroid
        iPhone plaid, Pitchfork Shoreditch paleo.
        Hashtag keytar chia scenester Pinterest, semiotics tousled food truck. YOLO scenester deep v, taxidermy
        paleo quinoa McSweeney's Carles VHS mustache Williamsburg gluten-free readymade cold-pressed. Truffaut
        Thundercats Schlitz, listicle organic Brooklyn paleo squid asymmetrical readymade migas gluten-free
        Austin.
        </p>`
    },
    {
        color: 'pink',
        name: 'Bubble Tea',
        pic: 'bubble-tea.jpg',
        alt: 'A picture of bubble tea',
        day: 'Monday',
        desc: `I like bubble tea`,
        content: `<p><span class="feature"><span id="special-heading-1"></span> is </span> Jianbing Brooklyn swag health goth 
        succulents put a bird on it hexagon vinyl 8-bit actually kickstarter. Yr butcher pitchfork single-origin coffee
        messenger bag tonx normcore locavore 8-bit prism. Kickstarter try-hard photo booth enamel pin church-key lo-fi 
        forage keffiyeh tousled tonx synth hexagon mixtape shaman etsy. Ethical taxidermy vape godard sriracha ascot. 
        Food truck man braid asymmetrical subway tile affogato jianbing thundercats yes plz. Try-hard venmo narwhal, 
        banjo pour-over poke sriracha before they sold out. Mixtape hella single-origin coffee kickstarter, brunch pork 
        belly jean shorts tonx bushwick coloring book cray.</p>
        <p><span class="feature">Enjoy <span id="special-heading-2"></span> with our </span> Subway tile bitters bruh organic 
        shaman viral authentic humblebrag normcore marfa keffiyeh. Taiyaki humblebrag squid skateboard meggings, big mood raw 
        denim polaroid microdosing man braid celiac butcher. Air plant food truck kinfolk squid venmo narwhal bruh ugh. Ramps 
        pug narwhal chia cronut gatekeep keffiyeh poke actually lo-fi edison bulb ennui pabst. Try-hard keffiyeh mukbang 90's 
        irony blog. Readymade banjo Brooklyn lomo fashion axe keytar pug kombucha art party farm-to-table.
        </p>`
    },
    {
        color: 'brown',
        name: 'Caramel Latte',
        pic: 'caramel-latte.jpg',
        alt: 'picture of caramel latte',
        day: 'Tuesday',
        desc: `It's cold, so a caramel latte sounds good`,
        content: `<p><span class="feature"><span id="special-heading-1"></span> is </span> Forage yr 8-bit semiotics ramps. 
        Lo-fi raw denim portland offal seitan vape hell of sriracha hoodie viral enamel pin fit before they sold out. Flannel 
        bicycle rights meditation normcore humblebrag. Trust fund pug distillery biodiesel mukbang pitchfork meh palo santo 
        jean shorts normcore plaid. Everyday carry authentic pok pok, single-origin coffee 3 wolf moon plaid farm-to-table 
        bodega boys biodiesel chicharrones. Copper mug wolf prism kitsch brunch, etsy shaman hella portland. Waistcoat 
        tattooed raw denim 8-bit narwhal small batch.</p>
        <p><span class="feature">Enjoy <span id="special-heading-2"></span> with our </span> Put a bird on it kale chips marfa 
        humblebrag coloring book irony meggings typewriter everyday carry salvia helvetica vibecession brunch iPhone. Gluten-free 
        craft beer portland photo booth live-edge. Kickstarter kogi etsy DIY selfies meditation taxidermy keffiyeh tumblr cloud 
        bread hell of +1 farm-to-table. Palo santo tousled same sus. Artisan woke tumblr humblebrag knausgaard.
        </p>`
    },
    {
        color: '#241444',
        name: 'Cold Brew',
        pic: 'cold-brew.jpg',
        alt: 'picture of cold brew',
        day: 'Wednesday',
        desc: `Nothing like some refreshing cold brew`,
        content: `<p><span class="feature"><span id="special-heading-1"></span> is </span> Flexitarian vibecession 90's humblebrag 
        tattooed, gastropub skateboard glossier. Occupy bodega boys franzen, gochujang next level meditation tote bag semiotics 
        aesthetic pinterest offal squid humblebrag yr. Marfa squid activated charcoal, gastropub 8-bit helvetica vinyl banh mi 
        intelligentsia butcher hashtag lomo af. YOLO squid meggings, fam coloring book copper mug kitsch pok pok retro.</p>
        <p><span class="feature">Enjoy <span id="special-heading-2"></span> with our </span> Lo-fi palo santo synth craft beer DIY. 
        Chicharrones gentrify hammock, everyday carry vice church-key cred post-ironic copper mug praxis 90's. Salvia listicle cray 
        tousled hammock vape selvage, ennui copper mug sustainable waistcoat. Keytar shoreditch 3 wolf moon vice adaptogen. Echo park 
        franzen you probably haven't heard of them, ramps portland scenester chambray four loko listicle. Art party offal roof party 
        poke neutra yes plz. Humblebrag wolf vexillologist gochujang.
        </p>`
    },
    {
        color: 'black',
        name: 'Drip Coffee',
        pic: 'drip.jpg',
        alt: 'picture of drip',
        day: 'Thursday',
        desc: `A drink to match my soul`,
        content: `<p><span class="feature"><span id="special-heading-1"></span> is </span> Cloud bread palo santo occupy seitan, 
        chicharrones tilde art party. Yes plz bruh selvage, cornhole activated charcoal pickled biodiesel palo santo. JOMO keytar 
        intelligentsia cliche deep v DIY shoreditch thundercats, heirloom 90's humblebrag try-hard whatever you probably haven't heard 
        of them. Authentic palo santo narwhal, mlkshk prism squid salvia keffiyeh sriracha organic hoodie meh vice. Twee before they 
        sold out pok pok vaporware polaroid vape echo park, flexitarian kickstarter small batch schlitz 90's edison bulb.</p>
        <p><span class="feature">Enjoy <span id="special-heading-2"></span> with our </span> Same gluten-free fanny pack, yr put a bird 
        on it letterpress lumbersexual food truck portland cold-pressed kitsch praxis. Selfies vaporware dreamcatcher la croix migas. 
        Tilde cold-pressed biodiesel jean shorts deep v yuccie distillery selfies master cleanse coloring book craft beer jianbing ramps 
        mixtape taxidermy. Ethical XOXO shabby chic, man bun chambray Brooklyn sus vibecession. Fixie skateboard letterpress four dollar 
        toast gastropub Brooklyn palo santo ennui cred. Food truck fashion axe shabby chic fit readymade portland. Hell of XOXO mukbang 
        tousled 90's next level la croix, marfa deep v.
        </p>`
    },
    {
        color: '#00704A',
        name: 'Frappaccino',
        pic: 'frappaccino.jpg',
        alt: 'picture of frappaccino',
        day: 'Friday',
        desc: `Cool down with one`,
        content: `<p><span class="feature"><span id="special-heading-1"></span> is </span> Shoreditch green juice pabst wolf, letterpress 
        beard gentrify fanny pack kickstarter celiac. Ramps art party leggings pickled. Pinterest sriracha subway tile cold-pressed pop-up, 
        praxis lumbersexual before they sold out fixie sartorial man bun copper mug brunch tattooed. Tofu food truck fashion axe, JOMO 
        selfies taxidermy swag air plant ascot crucifix forage slow-carb.</p>
        <p><span class="feature">Enjoy <span id="special-heading-2"></span> with our </span> Iceland brunch pinterest ugh edison bulb quinoa 
        banh mi fit gastropub af master cleanse pabst. Kinfolk af +1, 3 wolf moon kogi hella poke hashtag flannel. Jean shorts pinterest YOLO 
        umami. Tumeric echo park kitsch same. Same chillwave organic hexagon hell of shoreditch. 90's sustainable vape, chia +1 gochujang meh.
        </p>`
    },
    {
        color: '#C8AD90',
        name: 'Mocha',
        pic: 'mocha.jpg',
        alt: 'picture of mocha',
        day: 'Saturday',
        desc: `Saturday mocha? Who could say no?`,
        content: `<p><span class="feature"><span id="special-heading-1"></span> is </span> Cray raclette try-hard trust fund. Cardigan keffiyeh 
        keytar quinoa 3 wolf moon DSA, bitters glossier banjo flannel forage. Distillery fingerstache twee art party locavore flannel tousled 
        tumblr. Affogato heirloom DIY pour-over, tattooed venmo DSA yuccie XOXO fam brunch bicycle rights knausgaard.</p>
        <p><span class="feature">Enjoy <span id="special-heading-2"></span> with our </span> Normcore bespoke tousled tumblr offal narwhal lomo 
        waistcoat stumptown tacos microdosing cray. Mukbang listicle pok pok vice iceland beard. Pitchfork celiac tofu meh taiyaki tumeric marfa 
        synth occupy pabst tousled shabby chic. Hot chicken raclette yes plz health goth typewriter. Succulents tbh intelligentsia flannel you 
        probably haven't heard of them cold-pressed umami hammock farm-to-table readymade hell of master cleanse williamsburg. Helvetica tousled 
        scenester chillwave craft beer pop-up woke authentic single-origin coffee bespoke knausgaard sustainable semiotics mixtape beard.
        </p>`
    },
]
const date = new Date();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

function coffeeTemplate(coffee) {
    return `<p>
    <img src="images/${coffee.pic}"
      alt="${coffee.alt}!"
      id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee
      Special:</strong> ${coffee.day}'s daily coffee special is
      ${coffee.name}.
      ${coffee.desc}!
  </p>`;
}


if (urlParams == 0) {
    document.getElementById('coffee-template').innerHTML = coffeeTemplate(specials[date.getDay()]);
    document.getElementById('content').innerHTML = specials[date.getDay()].content;
    document.querySelector("html").style.backgroundColor = specials[date.getDay()].color;
    document.getElementById('special-heading-1').innerHTML = specials[date.getDay()].name;
    document.getElementById('special-heading-2').innerHTML = specials[date.getDay()].name;
} else {
    let indexOfDay;
    switch (urlParams.get('day')) {
        case 'sunday':
            indexOfDay = 0;
            break;
        case 'monday':
            indexOfDay = 1;
            break;
        case 'tuesday':
            indexOfDay = 2;
            break;
        case 'wednesday':
            indexOfDay = 3;
            break;
        case 'thursday':
            indexOfDay = 4;
            break;
        case 'friday':
            indexOfDay = 5;
            break;
        case 'saturday':
            indexOfDay = 6;
            break;
        default:
            break;
    }
    document.getElementById('coffee-template').innerHTML = coffeeTemplate(specials[indexOfDay]);
    document.getElementById('content').innerHTML = specials[indexOfDay].content;
    document.querySelector("html").style.backgroundColor = specials[indexOfDay].color;
    document.getElementById('special-heading-1').innerHTML = specials[indexOfDay].name;
    document.getElementById('special-heading-2').innerHTML = specials[indexOfDay].name;
}
