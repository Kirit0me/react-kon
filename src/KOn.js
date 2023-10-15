import React, { useState } from 'react';

const Azusa = {
    name : "Azu-Nyan",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff3%2F15%2Fd7%2Ff315d768856a3e885effc7d5ce6fab24.jpg&f=1&nofb=1&ipt=0b2ca11890662fe14d0614c11f0beb08ef3d4384874f05dd75e7a00e5535ce68&ipo=images",
    url2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4903204.jpg&f=1&nofb=1&ipt=25f6792c51b2f39c4ec767daa3ec38adbd03619e21773a2ff6ef7361d30b4859&ipo=images"
};

const Mugi = {
    name : "Mugi",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F99%2Fb6%2Fcd%2F99b6cd6bf99f67f08b8af57d7209bd2c.jpg&f=1&nofb=1&ipt=6491b8680063b478227ffd435325564cbbc79bbb81b1584090f6cfa8caf2d442&ipo=images",
    url2: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20140829152645%2Fk-on%2Fimages%2Fc%2Fc4%2FMugi_eats_candy.jpg&f=1&nofb=1&ipt=fd7b85e8f8e19d5d83907ba5c1c025a9651465261a2086306299abb122d31bb7&ipo=images"
};

const Mio = {
    name : "Mio",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.P22R0FkelXgFCHIwWCXrdAHaHa%26pid%3DApi&f=1&ipt=fc47adabc0427bc742e74cb61711df7368c1185b7e7de122956b2d88afb7beab&ipo=images",
    url2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F36%2F21%2F94%2F362194e129f20ac6fd15046f36106751.png&f=1&nofb=1&ipt=a8929f183a22cae440c36cbff0a5f4aaa69075c1cfd32106023089ab10351df8&ipo=images"
};

const Ritsu = {
    name : "Ritsu",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9aZ1ZhomB2N-7mhSv4S1EQHaF7%26pid%3DApi&f=1&ipt=a7d07d94332d30973c2b26d0330e85464402fd0f5cefad8773db33254d3d471e&ipo=images",
    url2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fk-on%2Fimages%2F5%2F51%2FRitsu_pencil.jpg%2Frevision%2Flatest%3Fcb%3D20140920032244&f=1&nofb=1&ipt=dccc4bbff36038cb3904de388165fa224edf798bbdf01dcc1c8d24184b6cbbc9&ipo=images"
};

const Yui = {
    name : "Yui",
    url : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F16500000%2FYui-Hirasawa-yui-hirasawa-16561918-1280-1024.jpg&f=1&nofb=1&ipt=c025c065431f570f333443443c5d3dfd743635c6a7806436744c830b338b4e4e&ipo=images",
    url2: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F20800000%2FUi-Hirsawa-ui-hirasawa-20852900-500-281.jpg&f=1&nofb=1&ipt=f309f9d3a648433753100553575bad980dd10f19924bc1c97d54be2608dc1caa&ipo=images"
};



const chars = [Azusa, Mugi, Mio, Ritsu, Yui];

function KOnDisplay(){
    const [img, setImg] = useState(false);
    const changeurl = () => {
        if(!img) {
            setImg(true);
        }else{
            setImg(false)
        }
    };
    const characters = chars.map(kon=>
        <div class="flex-none rounded-3xl w-96 mb-5 mr-4 bg-slate-700 hover:bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-800">
        <h2 class="text-3xl pt-4 pb-4 font-bold text-center text-fuchsia-300">{kon.name}</h2>
        <img 
          src={!img ? kon.url : kon.url2}
          alt={kon.name}
          onClick={changeurl}
          class="mx-auto rounded-3xl h-96 w-96 items-center content-center justify-center object-center object-contain md:object-scale-down pb-4"
        >
        </img>
        </div>
        
    )
    return(
        <>
        <h1 class="p-6 pr-6 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-500 via-yellow-200 to-fuchsia-300">
        Band Members from K-On
        </h1>
        <div class="bg-black flex rounded-3xl justify-evenly flex-row flex-wrap pt-4 pb-4">{characters}</div>
        </>
    )
}

export default KOnDisplay;
