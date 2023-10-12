function Navbar(){
    return(
        <div class="flex flex-row flex-nowrap bg-black text-white justify-between h-12 text-xl rounded-b-lg">
            <div class="flex-none">
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fpgg%2Fimages%2Fb%2Fbc%2FKon.png%2Frevision%2Flatest%3Fcb%3D20151102002027&f=1&nofb=1&ipt=5aafc3d8ca86c522bacacd7b87a89c1218d00846870ff3deed81ce6628131e58&ipo=images"
                alt="Hokago Tea time"
                class="h-12 pl-2">
            </img>
            </div>
            <div class="flex-none">
                <div class="flex flex-row justify-center align-middle m-auto h-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-600">
                    <div class="flex-none font-bold justify-center align-middle p-4 pt-3 hover:bg-slate-700 rounded-xl">
                        Meow
                    </div>                    
                    <div class="flex-none font-bold justify-center align-middle p-4 pt-3 hover:bg-slate-700 rounded-xl">
                        Woof
                    </div>                    
                    <div class="flex-none font-bold justify-center align-middle p-4 pt-3 hover:bg-slate-700 rounded-xl">
                        Croak
                    </div>
                </div>
            </div>
            <div class="flex-none text-3xl font-extrabold pr-6 pt-1">
                HTT
            </div>
        </div>
    );
}

export default Navbar;