const games = [
    {
        title:'Slime Jump (Godot Engine)',
        source: 'slime-jump.png',
        typeSource: 'image',
        link:'https://rokugatsua.itch.io/slime-jump',
        desc: {
            id:`Slime Jump, slime yang melompat di platfrom atau tanah yang tak terbatas.
            game ini ditujukan untuk android agar dapat dimainkan oleh gamer kasual.`,
            en:`Slime Jume, a slime who like to jump in endless platfom. this game build in android for reach casual gamer.`
        },
        task: {
            id:[
                "memperogram sistem dan mendesain game.",
                "mengimplementasikan leaderboard API dari Lootlocker."
            ],
            en: [
                "programming the sistem and desaining the game.",
                "implemented leaderboard feature with Lootlocker API."
            ]
        },
        
    },
    {
        title:'The Evil Wizard (Godot Engine)',
        source: 'the-evil-wizard.png',
        typeSource: 'image',
        link:'https://rokugatsua.itch.io/the-evil-wizard',
        desc: {
            id: `The Evil wizard adalah game narative platformer side scrolling dengan beberapa puzzle
            di dalam game mekaniknya. game ini dibuat oleh tim Chill Capybara dan saya sebagai
            game programmer.`,
            en: `The Evil Wizard is narative side scrolling platformer game with puzzle mechanics.
            this game made by Chill Capybara team and i am the game programmer.`
        },
        task:{
            id: [
                'platfomer side scroling',
                'puzzle, dialog, dan screen/camera transition'
            ],
            en: [
                'platfomer side scroling',
                'puzzle, dialog, dan screen/camera transition'
            ]
        }
    },
    {
        title:'Petualangan Timun Mas (Godot Engine)',
        source: 'petualangan-timun-mas.png',
        typeSource: 'image',
        link: 'https://rokugatsua.itch.io/petualangan-timun-mas',
        desc: {
            id: `petualangan timun mas adalah prototype yang dibuat dalam rangka mengikuti gamejam+ indonesia.
            game ini dibuat oleh tim Chill Capybara dan saya sebagai game programmer.`,
            en: `petualangan timun mas is a prototype game made in gamejam+ indonesia event.
             this game made by Chill Capybara team and i am the game programmer.`
        },
        task:{
            id: [
                'platformer side scrolling',
                'implementasi perubahan skill dan texture karakter sesuai dengan pilihan senjata',
                'implementasi inventory.'
            ],
            en: [
                'platformer side scrolling',
                'implemented changing skill and character texture based player weapon selected',
                'inventory implementation'
            ]
        }
    }
]



export default ({
    games
})