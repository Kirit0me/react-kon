import KOnDisplay from "./KOn.js";
import SGDisplay from "./Steinsgate.js";
import React, { useState } from 'react';

function Navbar(){
    let content;
    const [pages, setpage] = useState(false);
    function Change() {
        if(!pages) {
            setpage(true);
        }else{
            setpage(false);
        }
    };
    if(!pages){
        content = <KOnDisplay />
    } else {
        content = <SGDisplay />
    }
    return(
        <>
        <div class="flex flex-row flex-nowrap bg-black text-white justify-between h-12 text-xl rounded-b-lg">
            <div class="flex-none">
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fpgg%2Fimages%2Fb%2Fbc%2FKon.png%2Frevision%2Flatest%3Fcb%3D20151102002027&f=1&nofb=1&ipt=5aafc3d8ca86c522bacacd7b87a89c1218d00846870ff3deed81ce6628131e58&ipo=images"
                alt="Hokago Tea time"
                class="h-12 pl-2">
            </img>
            </div>
            <div class="flex-none">
                <NavBarContent Page={Change}/>
            </div>
            <div class="flex-none text-3xl font-extrabold pr-6 pt-1">
                HTT
            </div>
        </div>
        {content}
        </>
    );
}

function NavBarContent({Page}){


    return(
    <div class="flex flex-row justify-center align-middle m-auto h-12">
        <div class="flex-none font-bold justify-center align-middle p-4 pt-3 hover:bg-slate-700 text-orange-300 rounded-xl">
            <button onclick={Page}>K-On</button>
        </div>
        <div class="flex-none font-bold justify-center align-middle p-4 pt-3 hover:bg-slate-700 text-blue-300 rounded-xl">
            <button onclick={Page}>Steins Gate</button>
        </div>
    </div>
    );
}

export default Navbar;