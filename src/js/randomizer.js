var GPRandomizer = {};
// var mapCssFile = "map.css";
var losFunc;
//
// Menu Select
//
GPRandomizer.Menu = (function(){

  let id = 'pNumbers';

  return {
    players: function(p) {
      if (p && p > 1 && p < 5) {
        console.debug('[GPRandomizer.Menu.players]', 'p =>', p);
        document.getElementById(id).value = p;
      }
      return document.getElementById(id).value;
    }
  };
})();

GPRandomizer.BoardState = (function () {

  return {
    players: '',
    federation: '',
    thelostfleet: false,
    advancedTechs: [],
    basicTechs: [],
    roundScores: [],
    factions: [],
    finalScores: [],
    roundBoosters: [],
    map: [],

    toHashbangString: function () {
      let hbString = '#!' + [
        'PLAYERS=' + this.players,
        'FED=' + this.federation,
        'ADV=' + this.advancedTechs.join(','),
        'BAS=' + this.basicTechs.join(','),
        'RND=' + this.roundScores.join(','),
        'FAC=' + this.factions.join(','),
        'FIN=' + this.finalScores.join(','),
        'BOO=' + this.roundBoosters.join(','),
        'MAP=' + this.map.join(','),
      ].join('&');
      return hbString;
    },

    clearBoardState: function () {
      this.players = '';
      this.federation = '';
      this.thelostfleet = false,
      this.advancedTechs = [];
      this.basicTechs = [];
      this.roundScores = [];
      this.factions = [];
      this.finalScores = [];
      this.roundBoosters = [];
      this.map = [];
    }
  };
})();

GPRandomizer.Map = {

  boardId: 'map',

  setPreset: function(preset) {
    console.debug('[GPRandomizer.Map.setPreset]', 'preset =>', preset);
  },

  generatePresetMap: function(players) {
    console.debug('[GPRandomizer.Map.generatePresetMap]', 'players =>', players);
  },

  generateRandomMap: function(players) {
    console.debug('[GPRandomizer.Map.generateRandomMap]', 'players =>', players);
  },

  // resizeMapVerticalGridLength: function() {
  //   let map = document.getElementById(this.boardId);
  //   let unit = (map.clientWidth / 20) / 2;
  //   map.style.gridTemplateRows = (unit + 'px ').repeat(30);
  //   map.style.setProperty('-ms-grid-rows', (unit + 'px').repeat(30));
  // },
  resizeMapVerticalGridLength: function() {
    let map = document.getElementById(this.boardId);
    let gridHeight;
    let gridWidth;
    if (GPRandomizer.BoardState.thelostfleet) {
      gridWidth = Math.floor((map.clientWidth / 29) / 2);
      gridHeight = Math.ceil(Math.sqrt(3) * ((map.clientWidth / 29) / 2));
      // gridHeight = Math.ceil(Math.sqrt(3) * gridWidth);
      // map.style.gridTemplateColumns = "repeat(58, 1fr);";
      map.style.gridTemplateRows = (gridHeight + 'px ').repeat(32);
      // map.style.gridTemplateColumns = "repeat(auto-fill, " + gridWidth + "px);";
      map.style.gridTemplateColumns = "repeat(58, " + gridWidth + "px);";
      map.style.setProperty('-ms-grid-rows', (gridHeight + 'px').repeat(32));
    } else {
      console.log(GPRandomizer.BoardState.thelostfleet);
      gridHeight = Math.ceil((map.clientWidth / 20) / 2);
      // map.style.gridTemplateColumns = "repeat(20, 1fr);";
      map.style.gridTemplateRows = (gridHeight + 'px ').repeat(30);
      map.style.setProperty('-ms-grid-rows', (gridHeight + 'px').repeat(30));
    }
    console.debug(map.style);
    console.debug('[GPRandomizer.Map.generateRandomMap]', 'clientWidth =>', map.clientWidth);
    console.debug('[GPRandomizer.Map.generateRandomMap]', 'gridHeight =>', gridHeight);
  }
};

window.addEventListener('load', function() {

  const UA = navigator.userAgent;
  const IMG_SUFFIX = UA.match(/Chrome|Opera/) && UA.indexOf('Edge') == -1 ? ".webp" : "-min.png";

  const FEDERATIONS = [
    "pic/FEDcre" + IMG_SUFFIX,
    //    "pic/FEDgle" + IMG_SUFFIX,
    "pic/FEDknw" + IMG_SUFFIX,
    "pic/FEDore" + IMG_SUFFIX,
    "pic/FEDpwt" + IMG_SUFFIX,
    "pic/FEDqic" + IMG_SUFFIX,
    "pic/FEDvps" + IMG_SUFFIX
  ];

  var ROUNDSCORES = [
    "pic/RNDfed" + IMG_SUFFIX,
    "pic/RNDgai3" + IMG_SUFFIX,
    "pic/RNDgai4" + IMG_SUFFIX,
    "pic/RNDmin" + IMG_SUFFIX,
    "pic/RNDpia" + IMG_SUFFIX,
    "pic/RNDstp" + IMG_SUFFIX,
    "pic/RNDter" + IMG_SUFFIX,
    "pic/RNDtrs3" + IMG_SUFFIX,
    "pic/RNDtrs4" + IMG_SUFFIX
  ];

  const BASICTECHS = [
    "pic/TECcre" + IMG_SUFFIX,
    "pic/TECgai" + IMG_SUFFIX,
    "pic/TECknw" + IMG_SUFFIX,
    "pic/TECore" + IMG_SUFFIX,
    "pic/TECpia" + IMG_SUFFIX,
    "pic/TECpow" + IMG_SUFFIX,
    "pic/TECqic" + IMG_SUFFIX,
    "pic/TECtyp" + IMG_SUFFIX,
    "pic/TECvps" + IMG_SUFFIX
  ];

  var ADVANCEDTECHS = [
    "pic/ADVfedP" + IMG_SUFFIX,
    "pic/ADVfedV" + IMG_SUFFIX,
    "pic/ADVgai" + IMG_SUFFIX,
    "pic/ADVknw" + IMG_SUFFIX,
    "pic/ADVlab" + IMG_SUFFIX,
    "pic/ADVminB" + IMG_SUFFIX,
    "pic/ADVminV" + IMG_SUFFIX,
    "pic/ADVore" + IMG_SUFFIX,
    "pic/ADVqic" + IMG_SUFFIX,
    "pic/ADVsecO" + IMG_SUFFIX,
    "pic/ADVsecV" + IMG_SUFFIX,
    "pic/ADVstp" + IMG_SUFFIX,
    "pic/ADVtrsB" + IMG_SUFFIX,
    "pic/ADVtrsV" + IMG_SUFFIX,
    "pic/ADVtyp" + IMG_SUFFIX
  ];

  var ROUNDBOOSTERS = [
    "pic/BOOgai" + IMG_SUFFIX,
    "pic/BOOknw" + IMG_SUFFIX,
    "pic/BOOlab" + IMG_SUFFIX,
    "pic/BOOmin" + IMG_SUFFIX,
    "pic/BOOnav" + IMG_SUFFIX,
    "pic/BOOpia" + IMG_SUFFIX,
    "pic/BOOpwt" + IMG_SUFFIX,
    "pic/BOOqic" + IMG_SUFFIX,
    "pic/BOOter" + IMG_SUFFIX,
    "pic/BOOtrs" + IMG_SUFFIX
  ];

  const FACTIONS = [
    'pic/FACterraner' + IMG_SUFFIX, 
    'pic/FAClantida' + IMG_SUFFIX, 
    'pic/FAChadschhalla' + IMG_SUFFIX, 
    'pic/FACderschwarm' + IMG_SUFFIX, 
    'pic/FACgeoden' + IMG_SUFFIX, 
    'pic/FACbaltak' + IMG_SUFFIX, 
    'pic/FACxenos' + IMG_SUFFIX, 
    'pic/FACgleen' + IMG_SUFFIX, 
    'pic/FACtaklons' + IMG_SUFFIX, 
    'pic/FACambas' + IMG_SUFFIX, 
    'pic/FACfiraks' + IMG_SUFFIX, 
    'pic/FACmadandroids' + IMG_SUFFIX, 
    'pic/FACnevlar' + IMG_SUFFIX, 
    'pic/FACitar' + IMG_SUFFIX
  ];

  var FINALSCORES = [
    "pic/FINbld" + IMG_SUFFIX,
    "pic/FINfed" + IMG_SUFFIX,
    "pic/FINgai" + IMG_SUFFIX,
    "pic/FINsat" + IMG_SUFFIX,
    "pic/FINsec" + IMG_SUFFIX,
    "pic/FINtyp" + IMG_SUFFIX
  ];

  var SPACESECTORS = {
    '4': [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5' + IMG_SUFFIX,
      'pic/6' + IMG_SUFFIX,
      'pic/7' + IMG_SUFFIX,
      'pic/8' + IMG_SUFFIX,
      'pic/9' + IMG_SUFFIX,
      'pic/10' + IMG_SUFFIX
    ],
    '3': [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5' + IMG_SUFFIX,
      'pic/6' + IMG_SUFFIX,
      'pic/7' + IMG_SUFFIX,
      'pic/8' + IMG_SUFFIX,
    ],
    '2': [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5_' + IMG_SUFFIX,
      'pic/6_' + IMG_SUFFIX,
      'pic/7_' + IMG_SUFFIX,
    ]
  };

  //
  // array shuffle method
  //
  function shuffle(list, preset) {
    if (preset && preset.length > 0) {
      return preset.map(function(value) {
        return list[value];
      });
    }
    let nlist = [].concat(list);
    var n = nlist.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = nlist[n];
      nlist[n] = nlist[i];
      nlist[i] = t;
    }
    return nlist;
  }

  //
  // setup Factions;
  //
  function setupFactions(args) {
    let indlist = [];
    for (let i = 0; i <= 6; i++) {
        indlist.push(i * 2 + Math.round(Math.random()));
    }
    console.log(indlist);
    var preset = args ? args.split(',') : [];
    var faclist = shuffle(indlist, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="fac"]'),
      function(e, i) {
        e.setAttribute('src', FACTIONS[faclist[i]]);
        GPRandomizer.BoardState.factions.push(
          FACTIONS.indexOf(FACTIONS[faclist[i]])
        );
      }
    );
  }

  //
  // setup federation;
  //
  function setupFederation(arg) {
    var fed = 0;
    if (!arg) {
      fed = Math.floor(Math.random() * FEDERATIONS.length);
    } else {
      fed = arg;
    }

    document.getElementById('FED').setAttribute('src', FEDERATIONS[fed]);
    GPRandomizer.BoardState.federation = fed;
  }

  //
  // setup advanced Technology;
  //
  function setupAdvTech(args) {
    var preset = args ? args.split(',') : [];
    var advlist = shuffle(ADVANCEDTECHS, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="adv"]'),
      function(e, i) {
        e.setAttribute('src', advlist[i]);
        GPRandomizer.BoardState.advancedTechs.push(
          ADVANCEDTECHS.indexOf(advlist[i])
        );
      }
    );
  }

  //
  // setup basic Tech
  //
  function setupBasicTech(args) {
    var preset = args ? args.split(',') : []; 
    var baslist = shuffle(BASICTECHS, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="bas"]'),
      function(e, i) {
        e.setAttribute('src', baslist[i]);
        GPRandomizer.BoardState.basicTechs.push(
          BASICTECHS.indexOf(baslist[i])
        );
      }
    );
  }

  //
  // setup RoundScore
  //
  function setupRoundScore(args) {
    let preset = args ? args.split(',') : [];
    let rndlist = shuffle(ROUNDSCORES, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="rnd"]'),
      function(e, i) {
        e.setAttribute('src', rndlist[i]);
        GPRandomizer.BoardState.roundScores.push(
          ROUNDSCORES.indexOf(rndlist[i])
        );
      }
    );
  }

  //
  // setup FinalScore
  //
  function setupFinalScore(args) {
    let preset = args ? args.split(',') : [];
    let finlist = shuffle(FINALSCORES, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="fin"]'),
      function(e, i) {
        e.setAttribute('src', finlist[i]);
        GPRandomizer.BoardState.finalScores.push(
          FINALSCORES.indexOf(finlist[i])
        );
      }
    );
  }

  //
  // setup Booster
  //
  function setupBooster(args) {
    let preset = args ? args.split(',') : [];
    let boosterdiv = document.getElementById('booster');
    let players = Number(GPRandomizer.Menu.players());
    let rndBoosterNum = players + 3;
    let rndboosterlist = shuffle(ROUNDBOOSTERS, preset);
    boosterdiv.style.setProperty('grid-template-columns', "1fr ".repeat(rndBoosterNum));
    boosterdiv.style.setProperty('-ms-grid-columns', "1fr ".repeat(rndBoosterNum));
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="boo"]'),
      function(e, i) {
        if (rndBoosterNum <= i) {
          e.parentElement.style.display = 'none';
          return true;
        }

        e.parentElement.style.setProperty('-ms-grid-column', i + 1);
        e.parentElement.style.display = 'block';
        e.parentElement.className = 'booster booster' + players + 'er';
        e.setAttribute('src', rndboosterlist[i]);
        GPRandomizer.BoardState.roundBoosters.push(
          ROUNDBOOSTERS.indexOf(rndboosterlist[i])
        );
      }
    );
  }

  //
  // add external css for map
  //
  function setMapCss() {
    let cssLink = document.getElementById('stylesheet');
    console.log(cssLink);
    const cssPath = GPRandomizer.BoardState.thelostfleet ? './css/mapF.css' : './css/map.css';
    cssLink.href = `${cssPath}?v=${Date.now()}`;
  }

  //
  // generate random map
  //
  function generateRandomMap(players, preset) {
    setMapCss();
    GPRandomizer.Map.resizeMapVerticalGridLength();
    let presetTiles;
    let presetDegree; 
    let ignoreSpace = GPRandomizer.BoardState.thelostfleet ? {
      "2": [2, 6, 9],
      "3": [6],
      "4": []
    } : {
      "2": [2, 6, 9],
      "3": [2, 6],
      "4": []
    };
    let tiles;
    let tlfTiles = shuffle(Array.from({length:8}, (v, x) => (11 + x) + (Math.round(Math.random()) ? '_' : '')));
    console.log(tlfTiles);
    GPRandomizer.BoardState.map = [];
    if (preset) {
      console.log('[generateRandomMap]', 'preset=', preset);
      let args = preset.split(',');
      presetTiles = args.filter(function(value, index) {return (index % 2) == 0;});
      presetDegree = args.filter(function(value, index) {return (index % 2) == 1;});
      console.log('[generateRandomMap]', 'presetTiles=', presetTiles);
      console.log('[generateRandomMap]', 'presetDegree=', presetDegree);
    }
    if (GPRandomizer.BoardState.thelostfleet) {
      let centerTiles = shuffle(SPACESECTORS[players].slice(0,4));
      let tailTiles = shuffle(centerTiles.slice(Math.floor(players/2)).concat((SPACESECTORS[players].slice(4))));
      let rN = Number(players) + Math.round(1.8/players);
      console.log("abc " + rN);
      tiles = tailTiles.slice(0,rN).concat(centerTiles.slice(0,Math.floor(players/2))).concat(tailTiles.slice(rN))
      console.log(tiles)
    } else{
      tiles = shuffle(SPACESECTORS[players], presetTiles);
    }
    let tile;
    Array.prototype.forEach.call(
      document.querySelectorAll('img[data-generator-type="map"]'),
      function(element, index) {
        element.parentElement.className = 'mapItem mapTile' + index + '-' + players + 'er'; 
        if (-1 != ignoreSpace[players].indexOf(index)) {
          console.log(index);
          console.log(GPRandomizer.BoardState.map);
          console.log(element);
          element.style.display = "none";
        } else {
          let degree;
          if (index < 10) {
            degree = Math.floor(Math.random() * 6) * 60;
            tile = tiles.shift();
          } else {

            degree = Math.floor(Math.random() * 3) * 120 + index % 2 * 60;
            tile = 'pic/' + tlfTiles.shift() + IMG_SUFFIX;
            element.style.transformOrigin = '42.8571% 50%';
          }
          if ((!GPRandomizer.BoardState.thelostfleet && index > 9) || (players == 2 && index > 15)) 
            element.style.display = "none"; else {
            if (presetDegree) {
              degree = presetDegree.shift();
            }
            element.setAttribute('src', tile);
            element.setAttribute('data-map-index', index);
            // if (index > 9 ) {
            //   element.style.transform-origin 
            // }
            element.style.transform = 'rotate(' + degree + 'deg)';
            element.style.removeProperty('display');
            GPRandomizer.BoardState.map.push(SPACESECTORS[players].indexOf(tile), degree); 
          }
      }
    });

  }

  //
  //
  //
  function parseHashbang(hashbang_str) {
    console.debug('[parseHashbang]', 'Start');

    var hashes = hashbang_str.slice(hashbang_str.indexOf('#!') + 2).split('&');
    var vars = {};

    for(var i = 0; i < hashes.length; i++) {
      var hash = hashes[i].split('=');

      if(hash.length > 1) {
        vars[hash[0]] = hash[1];
      } else {
        vars[hash[0]] = null;
      }
    }

    console.debug('[parseHashbang]', vars);
    return vars;
  }

  //
  // setup function
  //
  function setup(hashbang) {
    var args = {};
    if (hashbang == true && location.hash) {
      args = parseHashbang(location.hash);
    }

    // GPRandomizer.BoardState.clearBoardState();

    if (args.PLAYERS) {
      GPRandomizer.Menu.players(args.PLAYERS);
    }
    GPRandomizer.BoardState.players = GPRandomizer.Menu.players();

    // setupFac
    setupFactions(args.FAC);

    // setupFed
    setupFederation(args.FED);

    // setup advanced-tech
    setupAdvTech(args.ADV);

    // setup basic-tech
    setupBasicTech(args.BAS);

    // setup round-score
    setupRoundScore(args.RND);

    // setup final-score
    setupFinalScore(args.FIN);

    // setup round-booster
    setupBooster(args.BOO);

    if (args.MAP) {
      generateRandomMap(
        GPRandomizer.Menu.players(),
        args.MAP
      );
    }
    generateRandomMap(GPRandomizer.Menu.players());
  }

  //
  //
  //
  document.getElementById('setup').addEventListener('click', function() {
    setup();
  });

  //
  //
  //
  document.getElementById('hide').addEventListener('click', function() {
    let menu = document.getElementsByTagName('menu')[0],
      mapMenu = document.getElementById('mapGenMenu');
    menu.style.display = 'none';
    mapMenu.style.display = 'none';
    var l = document.getElementsByTagName('main')[0].addEventListener('click', function() {
      menu.style.display = 'block';
      mapMenu.style.display = 'block';
      document.getElementsByTagName('main')[0].removeEventListener('click', l);
    });
  });

  //
  //
  //
  document.getElementById('permalink').addEventListener('click', function() {
    console.debug(GPRandomizer.BoardState);
    let newUrl = location.origin + location.pathname + GPRandomizer.BoardState.toHashbangString();
    if (window.history) {
      window.history.pushState(null, null, newUrl);
    }
    (function() {
      let inputElement = document.createElement('pre');
      inputElement.style.display = 'inline-block';
      inputElement.style.width = 0;
      inputElement.style.height = 0;
      inputElement.innerText = newUrl;
      document.querySelector('div.header').appendChild(inputElement);
      let range = document.createRange();
      range.selectNode(inputElement);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      document.querySelector('div.header').removeChild(inputElement);
      alert('Copy permalink to clipboard');
    })();
  });

  losFunc = function() {
    SPACESECTORS[3] = [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5_' + IMG_SUFFIX,
      'pic/6_' + IMG_SUFFIX,
      'pic/7_' + IMG_SUFFIX,
      'pic/9' + IMG_SUFFIX,
      'pic/10' + IMG_SUFFIX,
    ];
    document.getElementById('lostfleet').style.background = "yellow";
    // document.getElementById('basegame').style.background = "none";
    document.getElementById('basegame').style.removeProperty('background');
    GPRandomizer.BoardState.thelostfleet = true;
    
     ROUNDBOOSTERS = [
      "pic/BOOdsc" + IMG_SUFFIX,
      "pic/BOOgai" + IMG_SUFFIX,
      "pic/BOOgfm" + IMG_SUFFIX,
      "pic/BOOknw" + IMG_SUFFIX,
      "pic/BOOlab" + IMG_SUFFIX,
      "pic/BOOmin" + IMG_SUFFIX,
      "pic/BOOnav" + IMG_SUFFIX,
      "pic/BOOpia" + IMG_SUFFIX,
      "pic/BOOpwt" + IMG_SUFFIX,
      "pic/BOOqic" + IMG_SUFFIX,
      "pic/BOOter" + IMG_SUFFIX,
      "pic/BOOtgp" + IMG_SUFFIX,
      "pic/BOOtrs" + IMG_SUFFIX,
      "pic/BOOtyp" + IMG_SUFFIX
    ];

     ADVANCEDTECHS = [
      "pic/ADVast" + IMG_SUFFIX,
      "pic/ADVbbuV" + IMG_SUFFIX,
      "pic/ADVdsc" + IMG_SUFFIX,
      "pic/ADVdscV" + IMG_SUFFIX,
      "pic/ADVfedP" + IMG_SUFFIX,
      "pic/ADVfedV" + IMG_SUFFIX,
      "pic/ADVgai" + IMG_SUFFIX,
      "pic/ADVknw" + IMG_SUFFIX,
      "pic/ADVlab" + IMG_SUFFIX,
      "pic/ADVminB" + IMG_SUFFIX,
      "pic/ADVminV" + IMG_SUFFIX,
      "pic/ADVore" + IMG_SUFFIX,
      "pic/ADVqacB" + IMG_SUFFIX,
      "pic/ADVqic" + IMG_SUFFIX,
      "pic/ADVsecO" + IMG_SUFFIX,
      "pic/ADVsecV" + IMG_SUFFIX,
      "pic/ADVstp" + IMG_SUFFIX,
      "pic/ADVterB" + IMG_SUFFIX,
      "pic/ADVtrsB" + IMG_SUFFIX,
      "pic/ADVtrsV" + IMG_SUFFIX,
      "pic/ADVtyp" + IMG_SUFFIX
    ];

    FINALSCORES = [
      "pic/FIN11typ" + IMG_SUFFIX,
      "pic/FINast" + IMG_SUFFIX,
      "pic/FINdsc" + IMG_SUFFIX,
      "pic/FINdst" + IMG_SUFFIX,
      "pic/FINbld" + IMG_SUFFIX,
      "pic/FINfed" + IMG_SUFFIX,
      "pic/FINgai" + IMG_SUFFIX,
      "pic/FINsat" + IMG_SUFFIX,
      "pic/FINsec" + IMG_SUFFIX,
      "pic/FINtyp" + IMG_SUFFIX
    ];

    ROUNDSCORES = [
      "pic/RNDfed" + IMG_SUFFIX,
      "pic/RNDgai3" + IMG_SUFFIX,
      "pic/RNDgai4" + IMG_SUFFIX,
      "pic/RNDmin" + IMG_SUFFIX,
      "pic/RNDminS" + IMG_SUFFIX,
      "pic/RNDlab" + IMG_SUFFIX,
      "pic/RNDpia" + IMG_SUFFIX,
      "pic/RNDstp" + IMG_SUFFIX,
      "pic/RNDter" + IMG_SUFFIX,
      "pic/RNDtyp" + IMG_SUFFIX,
      "pic/RNDtrs3" + IMG_SUFFIX,
      "pic/RNDtrs4" + IMG_SUFFIX
    ];
    setup();
  };

  document.getElementById('lostfleet').addEventListener('click', losFunc);

  document.getElementById('basegame').addEventListener('click', function() {
    SPACESECTORS[3] = [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5' + IMG_SUFFIX,
      'pic/6' + IMG_SUFFIX,
      'pic/7' + IMG_SUFFIX,
      'pic/8' + IMG_SUFFIX,
    ];
    GPRandomizer.BoardState.thelostfleet = false;
    document.getElementById('lostfleet').style.removeProperty('background');
    // document.getElementById('lostfleet').style.background = "none";
    document.getElementById('basegame').style.background = "yellow";

     ROUNDBOOSTERS = [
      "pic/BOOgai" + IMG_SUFFIX,
      "pic/BOOknw" + IMG_SUFFIX,
      "pic/BOOlab" + IMG_SUFFIX,
      "pic/BOOmin" + IMG_SUFFIX,
      "pic/BOOnav" + IMG_SUFFIX,
      "pic/BOOpia" + IMG_SUFFIX,
      "pic/BOOpwt" + IMG_SUFFIX,
      "pic/BOOqic" + IMG_SUFFIX,
      "pic/BOOter" + IMG_SUFFIX,
      "pic/BOOtrs" + IMG_SUFFIX
    ];

     ADVANCEDTECHS = [
      "pic/ADVfedP" + IMG_SUFFIX,
      "pic/ADVfedV" + IMG_SUFFIX,
      "pic/ADVgai" + IMG_SUFFIX,
      "pic/ADVknw" + IMG_SUFFIX,
      "pic/ADVlab" + IMG_SUFFIX,
      "pic/ADVminB" + IMG_SUFFIX,
      "pic/ADVminV" + IMG_SUFFIX,
      "pic/ADVore" + IMG_SUFFIX,
      "pic/ADVqic" + IMG_SUFFIX,
      "pic/ADVsecO" + IMG_SUFFIX,
      "pic/ADVsecV" + IMG_SUFFIX,
      "pic/ADVstp" + IMG_SUFFIX,
      "pic/ADVtrsB" + IMG_SUFFIX,
      "pic/ADVtrsV" + IMG_SUFFIX,
      "pic/ADVtyp" + IMG_SUFFIX
    ];

    FINALSCORES = [
      "pic/FINbld" + IMG_SUFFIX,
      "pic/FINfed" + IMG_SUFFIX,
      "pic/FINgai" + IMG_SUFFIX,
      "pic/FINsat" + IMG_SUFFIX,
      "pic/FINsec" + IMG_SUFFIX,
      "pic/FINtyp" + IMG_SUFFIX
    ];

    ROUNDSCORES = [
      "pic/RNDfed" + IMG_SUFFIX,
      "pic/RNDgai3" + IMG_SUFFIX,
      "pic/RNDgai4" + IMG_SUFFIX,
      "pic/RNDmin" + IMG_SUFFIX,
      "pic/RNDpia" + IMG_SUFFIX,
      "pic/RNDstp" + IMG_SUFFIX,
      "pic/RNDter" + IMG_SUFFIX,
      "pic/RNDtrs3" + IMG_SUFFIX,
      "pic/RNDtrs4" + IMG_SUFFIX
    ];

    setup();
  });


  //
  //
  //
  document.getElementById('mapGen').addEventListener('click', function() {
    generateRandomMap(GPRandomizer.Menu.players());
  });

  //
  //
  //
  function rotateImage(event) {
    event.stopPropagation();
    let deg = this.style.transform.match(/rotate\(([0-9]+)deg\)/);
    let newdeg = 60;
    let index = this.getAttribute('data-map-index');
    let isTlfTile = this.getAttribute('src').match(/1[1-8](_)?(\-min)?\.(png|webp)$/g);
    if (deg) {
      newdeg = Number(deg[1]) + (isTlfTile ? 120 : 60);
      if (newdeg >= 360) {
        newdeg -= 360;
      }
    }
    this.style.transform = 'rotate(' + newdeg + 'deg)';
    GPRandomizer.BoardState.map[index * 2] = newdeg;
  }

  Array.prototype.forEach.call(
    document.querySelectorAll('div.mapItem > img'),
    function(image) {
      image.addEventListener('click', rotateImage);
    }
  );

  let resizeQueue = null;
  let resizeWait = 300;
  window.addEventListener('resize', function() {
    clearTimeout(resizeQueue);
    resizeQueue = setTimeout(function() {
      GPRandomizer.Map.resizeMapVerticalGridLength();
    }, resizeWait);
  });

  let t, x, y, origX, origY;

  document.getElementById('mineGen').addEventListener('click', function(event) {

    function onMouseMove(event) {
      console.log(event);
      let e = event;
      if (event.type !== "mousemove") {
        e = event.changedTouches[0];
      }
      console.log(e.pageY);
      console.log(y);
      console.log(t.style.top.replace(/px/, ''));
      t.style.top = origY + (e.pageY - y) + "px";
      t.style.left = origX + (e.pageX - x) + "px";
    }

    console.log(event);
    let mime = document.createElement('img');
    let timer, moveFlag = false, index = 0;
    let srcList = [
      'pic/blue_mine.svg',
      'pic/red_mine.svg',
      'pic/orange_mine.svg',
      'pic/yello_mine.svg',
      'pic/brown_mine.svg',
      'pic/gray_mine.svg',
      'pic/white_mine.svg'
    ];

    function onMouseStart(e) {
      e.preventDefault();
      e.stopPropagation();
      t = mime;
      if (e.type == 'mousedown') {
        x = e.pageX;
        y = e.pageY;
      } else {
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY;
      }
      origX = Number(t.style.left.replace(/px/, ''));
      origY = Number(t.style.top.replace(/px/, ''));
      timer = setTimeout(function() {
        moveFlag = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onMouseMove);
      }, 100);
    }

    function onMouseEnd(e) {
      clearTimeout(timer);
      if (moveFlag === false) {
        index++;
        if (index >= srcList.length) {
          index = 0;
        }
        t.setAttribute('src', srcList[index]);
      }
      moveFlag = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onMouseMove);
    }

    mime.setAttribute('src', srcList[index]);
    mime.style.position = "relative";
    let colFactor = GPRandomizer.BoardState.thelostfleet ? 29 : 20;
    mime.style.width = (document.getElementById('map').clientWidth / colFactor / 2)  + "px";
    mime.style.top = 0 + "px";
    mime.style.right = 0 + "px";
    mime.style.msGridColumn = "1";
    mime.style.msGridRow = "1";
    mime.style.gridColumn = "1";
    mime.style.gridRow = "1";
    document.getElementById('map').appendChild(mime);

    mime.addEventListener('mousedown', onMouseStart);
    mime.addEventListener('touchstart', onMouseStart, {passive: false});
    mime.addEventListener('mouseup', onMouseEnd);
    mime.addEventListener('touchend', onMouseEnd);
  });
  losFunc();
  setup(true);
});
