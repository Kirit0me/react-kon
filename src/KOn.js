const Azusa = {
    name : "Azu-Nyan",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff3%2F15%2Fd7%2Ff315d768856a3e885effc7d5ce6fab24.jpg&f=1&nofb=1&ipt=0b2ca11890662fe14d0614c11f0beb08ef3d4384874f05dd75e7a00e5535ce68&ipo=images"
};

const Mugi = {
    name : "Mugi",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F99%2Fb6%2Fcd%2F99b6cd6bf99f67f08b8af57d7209bd2c.jpg&f=1&nofb=1&ipt=6491b8680063b478227ffd435325564cbbc79bbb81b1584090f6cfa8caf2d442&ipo=images"
};

const Mio = {
    name : "Mio",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.P22R0FkelXgFCHIwWCXrdAHaHa%26pid%3DApi&f=1&ipt=fc47adabc0427bc742e74cb61711df7368c1185b7e7de122956b2d88afb7beab&ipo=images"
};

const Ritsu = {
    name : "Ritsu",
    url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9aZ1ZhomB2N-7mhSv4S1EQHaF7%26pid%3DApi&f=1&ipt=a7d07d94332d30973c2b26d0330e85464402fd0f5cefad8773db33254d3d471e&ipo=images"
};

const Yui = {
    name : "Yui",
    url : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F16500000%2FYui-Hirasawa-yui-hirasawa-16561918-1280-1024.jpg&f=1&nofb=1&ipt=c025c065431f570f333443443c5d3dfd743635c6a7806436744c830b338b4e4e&ipo=images"
};

const chars = [Azusa, Mugi, Mio, Ritsu, Yui];

function Display(){
    const characters = chars.map(kon=>
        <div class="flex-none rounded-3xl basis-1/4 mb-5 mr-4 bg-slate-700 hover:bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-800">
        <h2 class="text-3xl pt-4 pb-4 font-bold text-center text-fuchsia-300">{kon.name}</h2>
        <img 
          src={kon.url}
          alt={kon.name}
          class="mx-auto rounded-3xl h-96 w-96 items-center content-center justify-center object-center object-contain md:object-scale-down pb-4"
        >
        </img>
        </div>
    )
    return(
        <div class="bg-black flex rounded-3xl justify-evenly flex-row flex-wrap pt-4 pb-4">{characters}</div>
    )
}

export default Display;
