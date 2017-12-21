angular.module("game").service('jobSvc', function($http){


    
     this.getJobs = function(){
        return $http.get(' http://www.garlandtools.org/db/data/action/3540.json')
    }
    this.getActions = function(){
        return $http.get('https://api.xivdb.com/action/')
    }

    this.postJobs = function(job){
      return $http({
            url: 'http://localhost:3000/jobdescrip',
            method: 'POST',
            data: job
        }).then(function(response) {
            console.log('service: ', response)
            return response
        }).catch(function(err){
            console.log("service err: ", err)
            return err
        })
    }
   

   this.postFeedback = function(feedback){
       $http({
           url: 'http://localhost:3000/feedback',
           method: 'POST',
           data: feedback
       })
   }

   this.getInfo = function(job){
       return jobinfo[job];
   }
   this.info = function(){
       return jobinfo;
   }
   var jobinfo = [
       {
           'job':'Paladin',

           'lore':'“For centuries, the elite of the Sultansworn have served as personal bodyguards to the royal family of Ul\'dah. Known as paladins, these men and women marry exquisite swordplay with stalwart shieldwork to create a style of combat uncompromising in its defense. Clad in brilliant silver armor, they charge fearlessly into battle, ever ready to lay down their lives for their liege. To be a paladin is to protect, and those who choose to walk this path will become the iron foundation upon which the party\'s defense is built.” ~Game Description',

           'info':'Paladin is your sword and board of Final Fantasy while wielding holy magic to enhance it\'s abilities. The Paladin\'s uses heavy armor and focuses on the Vitality attribute.',
           'gameplay':'The Paladin is your end all be all main tank. Paladin utilizes healing magic and damage mitigation to provide a solid frontline. Paladin is the only job wielding a shield that with abilities can reliably protect you from damage. Paladin has many party mitigation tools such as Passage of Arms and Cover to protect it\'s allies. Paladin uses the oath gauge to perform some of it\'s abilities.',

           'gameplay':'',

           'stats':'Paladins are the most often main tank in FFXIV currently. Currently the accepted stat priority is Direct hit > critical hit > determination > skill speed > and lastly tenacity',
       },
       {
            'job':'Warrior',

            'lore':'“On the northernmost edge of Abalathia\'s Spine exists a mountain tribe renowned for producing fearsome mercenaries. Wielding greataxes and known as warriors, these men and women learn to harness their inner-beasts and translate that power to unbridled savagery on the battlefield. In former times which saw war waged ceaselessly in Eorzea, the warriors featured prominently on the frontlines of battle. With the arrival of peacetime, however, their art has descended into the shadows of obscurity, where it remains to this day.” - Game Description',

            'info':'Warrior with a Greataxe in hand is your head first tank. Charging in dishing out and taking it warrior is the most reckless of tanks.',

            'gameplay':'Warrior is about big numbers. Warrior relies less on high defense or mitigation and rather focuses on sustaining through lifesteal and a large health pool. Warrior\'s job gauge is the beast gauge. Warrior uses the beast gauge for it\'s most devastating attacks such as Fell Cleave and Decimate, it also gives access to your most potent lifesteal such as Inner Beast and Steel Cyclone.',
           
            'stats':'',
        },
        {
            'job':'Dark Knight',

            'lore':'“The pious Ishgardian clergy guide the flock, and the devout knights protect the weak. Yet even the holiest of men succumb to the darkest of temptations. None dare to administer justice to these sacrosanct elite residing outside the reach of the law. Who, then, defends the feeble from the transgressions of those meant to guide and protect them? A valiant few take up arms to defend the downtrodden, and not even the holy priests and knights can escape their judgment. Pariahs in their own land, they are known by many as “dark knights.” These sentinels bear no shields declaring their allegiance. Instead, their greatswords act as beacons to guide the meek through darkness.”',

            'info':'Although Dark Knight was generally seen as a DPS in other Final Fantasy games with black magic instead, FFXIV has captured the Dark Knight as a tank while keeping what makes it special. Greatsword in hand and Focusing on MP management to unleash its specialty, Darkness.',

            'gameplay':'Dark Knights focus on MP management to use both it\'s most powerful damage abilities such as Carve and Split and defensive abilities such as The Blackest Night. Dark Knight has the special capability to sustain its DPS stance while in tank stance, this opens up the dark knight to tank while not having to sacrifice so much on damage.',

            'stats':'',
        },
        {
            'job':'Monk',

            'lore':'“Though now under Garlean rule, the city-state of Ala Mhigo once boasted the greatest military might of all Eorzea. Among its standing armies were the monks—ascetic warriors as dreaded by foes on the field of battle as the city-state\'s great pikemen. The monks comprised an order known as the Fist of Rhalgr, and it was to this god—the Destroyer—that they devoted their lives of worship. By mastering seats of power within the body known as chakra, they are capable of performing extraordinary physical feats.” -Game Description',

            'info':'Monk is the job that brings fists to a sword fight. Monks are a high intensity high speed DPS, completely focused on pummeling it\'s foes focusing on strength and critical hits',

            'gameplay':'Monk is one of the more selfish DPS, providing little utility for the team but very high solo damage. Monk\'s damage is highly focused on keeping your greased lightning stacks up and positional attacks',

            'stats':'',
        },
        {
            'job':'Dragoon',

            'lore':'“Of all the things that are symbolic of the nation of Ishgard, few are more recognized than the dragoon. Born amidst the timeless conflict between men and dragons, these lance-wielding knights have developed an aerial style of combat, that they might better pierce the scaled hides of their mortal foes. Taking to the firmament as though it were an extension of the land, they descend upon the enemy with every onze of their bodies behind the blow. It is this penetrative power that characterizes the dragoon.” - Game Description',

            'info':'Dragoon is Final Fantasy\'s spear wielding class with a twist. Wielding a spear and using jumps as it\'s unique ability to both avoid damage and deal damage. Dragoons are the first line against dragons due to their ability to reach unreal heights.',

            'gameplay':'Dragoons focus on a mix of utility and damage for the team. Dragoons have Battle Litany and Eye of the Dragon for example to assist teammates while also buffing themselves. Dragoon use few positionals and instead focus on managing their blood of the dragon to gain access to some of dragoons most powerful attacks.',

            'stats':'',
        },
        {
            'job':'Ninja',

            'lore':'“Hailing from the war-torn lands of the Far East, the secret arts of the ninja were born of necessity, and have since given rise to a unique breed of highly-trained combatants.Able to manipulate the vital energies of the land, the air, and living beings, they manifest their power through the weaving of signs, unleashing a wide array of attacks against their foes. Master the arts of the ninja and learn to bend the tide of battle to your will.” - Game Description',

            'info':'Ninja is well.... a ninja, but final fantasy ninjas have the unique ability to use ninjitsu which give access to magical attacks and buffs.Ninja uses two daggers some may call kunai. Ninja uses ninjitsu and stealth to provide high utility and damage for the team.',

            'gameplay':'Using Ninjitsu to deal magic damage and strengthen themselves. Ninja\'s main strength however is in it\'s utility providing enmity manipulation, increase damage and more.',

            'stats':'',
        },
        {
            'job':'Samurai',

            'lore':'"In the distant past, the realm\'s great lords vied for supremacy over its sea-girt confines in a long and bloody conflict. And taking to battle in their lieges\' names were noble swordsmen whose art was forged in the crucible of war: the samurai. Eventually, the nation was unified under one banner, and these warriors came to wield their katana not upon fields as part of an army, but upon streets as protectors of the peace. But as a neglected blade grows dull with rust, so too do men forget their purpose. Amidst waning memories of the old ways, a determined few hold fast to their convictions, hands by katana grips, awaiting the moment for steel to sing." - Game Description',

            'info':'Samurai uses a katana elegantly with precision and patience.',

            'gameplay':'Samurai focuses on building both a kenki gauge and Sen (the symbols). Samurai can single handedly deal massive damage and needs to manage both gauges to unlock it\'s potential.',

            'stats':'',
        },
        {
            'job':'Bard',

            'lore':'“The word "bard" ordinarily puts folk in mind of those itinerant minstrels, fair of voice and nimble of finger, who earn their coin performing in taverns and the halls of great lords. Few know, however, that bards in fact trace their origins back to the bowmen of eld, who sang in the heat of battle to fortify the spirits of their companions. In time, their impassioned songs came to hold sway over the hearts of men, inspiring their comrades to great feats and granting peace unto those who lay upon the precipice of death.” - Game Description',

            'info':'Bard was always a support in Final Fantasy that boosted morale through music. In FFXIV Bard was mixed with Ranger wielding a bow focusing on damage and support.',

            'gameplay':'Bards are very mobile DPS that focus on Damage over time and critical hits. Through the support songs they have they buff their team and give access to more damaging abilities for the bard',

            'stats':'',
        },
        {
            'job':'Machinist',

            'lore':'“The war with Dravania rages on, brutal and unrelenting. With no end in sight, the Holy See grows desperate. As her dragoons lay down their lives in defense of their home, Ishgard turns to technology to protect her sons and daughters. Great cannons and ballistae now line the city walls, plucking dragons from the sky. Following the example of Cid Garlond, who has demonstrated the potency of magitek, the Skysteel Manufactory works tirelessly on the development of advanced armaments. As new and devastating weapons are brought to the fray, a new class of champion arises to wield them―the machinist.” - Game Description',

            'info':'Machinists Utilize guns and autocannons to deal damage and also provide buffs for the party. Just like Bard, Machinist is focused on party buffs with decent DPS',

            'gameplay':'',

            'stats':'',
        },
        {
            'job':'Black Mage',

            'lore':'“In days long past, there existed an evil clan and arcane art known as black magic—a potent magic of pure destructive force born forth by a sorceress of unparalleled power. Those who learned to wield this instrument of ruin came to be called black mages, out of both fear and respect for their gift. Yet great power served to corrupt the judgment of mortal man, and so he unknowingly set out upon the path of ruin. Adventurers who take the black will become agents of devastation, capable of annihilating those who oppose them through little more than the force of their will.”',

            'info':'Black Mages use staves as a medium for their powerful spells. Black Mage focuses on powerful spells to overcome foes, no games.',

            'gameplay':'Black Mage have many different pieces in their gauge and how they use it. The most important is Astral Fire and Umbral Ice. These are th most important to manage and using the most powerful spells available to you. ',

            'stats':'',
        },
        {
            'job':'Summoner',

            'lore':'“The beast tribes of Eorzea worship and summon forth beings known as primals, among which are Ifrit, Garuda, and Titan. Yet what is a god to one man is a demon to another, for the city-states of Eorzea see these beings as a grave threat to their collective survival. In times immemorial, there lived mages who had not only the power to summon the primals, but also the means to transmute the primals\' essences, thus binding them to their will. Known simply as summoners, the existence of these men and women and their arcane art have been all but lost to the ages.”-Game Description',

            'info':'Summoners are able to summon powerful primals to their side both as a source of damage and utility. The role of a Summoner is to have aether flow through their veins and unleash the primal energy they have mastered.',

            'gameplay':'Summoner is a mix of a pet job meaning uses a pet as part of its kit and a job that focuses on damage over time effects (DoTs). Summoners mix in certain DoTs and a have a pet dealing damage and using some utility moves while also building and using Aetherflow which opens up more powerful spells. On top of that those spells open up more and eventually summoner can summon Bahamut! Summoner is a very momentum driven job. Building your aetherflow in timely fashion is the bread and butter.',

            'stats':'',
        },
        {
            'job':'Red Mage',
            
            'lore':'"On the eastern edge of Abalathia\'s Spine lies the mountainous region of Gyr Abania. It is in these elevated lands that people took shelter, when a burning star guided them away from the Sixth Umbral Calamity\'s treacherous floodwaters. The survivors gathered from near and far, and amongst them were refugees of the sorcerous cities of Mhach and Amdapor. These sworn enemies buried their history for the sake of the future, and cast aside their vestments of black and white. Upon the remnants of their arts a new discipline was built, and the first red mages stepped forward with rapiers in hand to fight back against the rising tides of destruction." -Game Description',

            'info':'Red Mage has mastered both White Magic and Black Magic able to chain together spells in quick succession to decimate foes. Red Mage also is able to use it\'s mana to sweep in to melee range with enemies and provide some quick slashings with it\'s rapier.',

            'gameplay':'While Red Mage in other Final Fantasy\'s was a jack of all trades in FFXIV it is primarily a DPS with some buffs to the team and able to heal and raise providing a more utility based dps.',

            'stats':'',
        },
        {
            'job':'White Mage',

            'lore':'“White magic, the arcane art of succor, was conceived eras past that the world might know comfort. Alas, man began perverting its powers for self-gain, and by his wickedness brought about the Sixth Umbral catastrophe. Although the art subsequently became forbidden, it is now in the midst of a revival at the hands of the Padjal, chosen of the elementals. Those who would walk the path of the white mage are healers without peer, possessed of the power to deliver comrades from the direst of afflictions—even the icy grip of death itself.” -Game Description',

            'info':'If someone says "I need healing" the correct answer is White Mage. White Mage has the most powerful heals in the game. Sometimes capable of solo healing even the hardest content in game.',

            'gameplay':'White Mage provides little to no utility to the team but provides massive heals. Able to both heal groups using Medica II, Assize, and more while also handling single targets with spells tetragramation and benediction. White Mage also provides strong healing over time spells allowing a brief time to dps. White Mage also brings one of the best aoe damage from a healer from Holy which stuns and does large damage. White Mage utilize the Lily Gauge which when using a cure I or cure II u gain lillies which can be used to lower your cooldowns making white mage able to use more of it\'s healing without risking too much.',

            'stats':'',
        },
        {
            'job':'Scholar',

            'lore':'“In an age long past, when mankind flourished under the radiance of arcane mastery, the island of Vylbrand was home to a city-state called Nym. Though the history of that age tells of countless wars waged with earth-shattering incantations, it was the brilliant strategic maneuvering of Nym\'s scholars that allowed their mundane army of mariners to throw back would-be conquerers time and again. These learned men and women defended the freedom of their tiny nation with their unique command over spell-weaving faeries, utilizing the creatures\' magicks to heal the wounded and bolster the strength of their allies.” Game Description',

            'info':'',

            'gameplay':'',

            'stats':'',
        },
        {
            'job':'Astrologian',

            'lore':'“Ever has man coveted knowledge, and none more so than that of his fate. Thus did he labor to master the skill of foresight—but initial efforts bore little fruit. That is, until he looked to the stars above, which foretell the coming seasons, and learned to read the heavens. Though this gift is known today as astrology, the people of Sharlayan saw fit to not only read the stars, but to write their movements as well. By attuning their aetherial energies to that of constellations, they learned to wield magicks with heretofore unseen properties. Thus was astromancy born—a new form of magick which grants its users power over fate. Employing a star globe and divining deck in their miraculous deeds, fortune always smiles upon these masters of arcana.”',

            'info':'',

            'gameplay':'',

            'stats':'',
        },
   ]
    })