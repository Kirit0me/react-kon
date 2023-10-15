import L1_img from './images/Lab001.jpg';
import L2_img from './images/Lab002.jpg';
import L3_img from './images/Lab003.png';
import L4_img from './images/Lab004.jpeg';
import L5_img from './images/Lab005.jpg';
import L6_img from './images/Lab006.png';
import L7_img from './images/Lab007.jpg';
import L8_img from './images/Lab008.jpg';

const L1 = {
    name: "Okabe Rintaro",
    desc: "Rintaro Okabe (岡部 倫太郎, Okabe Rintarō?), often nicknamed Okarin (オカリン) or Hououin Kyouma (鳳凰院 凶真, Hōōin Kyōma), is a self-proclaimed insane mad scientist. He lives in Ikebukuro",
    img: L1_img
}

const L2 = {
    name: "Mayuri Shiina",
    desc: "Mayuri Shiina (椎名 まゆり, Shiina Mayuri), also known as Mayushii☆, is Rintaro Okabe's childhood friend, a part-time worker at MayQueen+Nyan² and a member of the Future Gadget Lab. ",
    img: L2_img
}
const L3 = {
    name: "Itaru Hashida",
    desc: "Itaru Hashida (橋田 至, Hashida Itaru?), also known by his nickname Daru, his online handle DaSH (Daru the Super Hacker) and Barrel Titor is an experienced hacker and a hardcore otaku",
    img: L3_img
}
const L4 = {
    name: "Kurisu Makise",
    desc: "Kurisu Makise (牧瀬 紅莉栖 Makise Kurisu?) is the daughter of Shouichi Makise, a genius girl who graduated from university at the age of seventeen, a neuroscientist at the Brain Science Institute at Viktor Chondria University, and also a member of the Future Gadget Lab. ",
    img: L4_img
}
const L5 = {
    name: "Kiryuu Moeka",
    desc: "Moeka Kiryu (桐生 萌郁 Kiryū Moeka) is a part-time editor whom Rintaro Okabe encounters in Akiba. She is practically glued to her phone and cannot function without it. Even when face to face, Moeka prefers to communicate by email",
    img: L5_img
}
const L6 = {
    name: "Luka Urushibara",
    desc: "Luka Urushibara (漆原るか Urushibara Ruka?) is a close friend and classmate of Mayuri Shiina and so-called protégé of Rintaro Okabe. While feminine in appearance and personality, Luka is a male on most world lines. Mayuri often attempts to coerce him into cosplaying. He works at the Yanabayashi Shrine as a shrine maiden. ",
    img: L6_img
}
const L7 = {
    name: "Faris NyanNyan",
    desc: "Faris NyanNyan (フェイリス・ニャンニャン, Feirisu NyanNyan), real name Rumiho Akiha (秋葉 留未穂, Akiha Rumiho), is the daughter of Yukitaka Akiha and Chikane Akiha, a part-time employee and owner of the maid café MayQueen+Nyan²",
    img: L7_img
}
const L8 = {
    name: "Suzuha Amane",
    desc: "In the Alpha Attractor Field that most of Steins;Gate takes place in, Suzuha Amane (阿万音 鈴羽, Amane Suzuha), later known as Suzu Hashida (橋田 鈴, Hashida Suzu), is a part-time employee for Yugo Tennouji's CRT store. ",
    img: L8_img
}

const labmems = [L1, L2, L3, L4, L5, L6, L7, L8]

function SGDisplay(){
    const mems = labmems.map(lab=>
        <div class="pl-6 bg-black align-middle justify-between flex flex-row-reverse rounded-3xl">
            <img 
                src={lab.img}
                class="mx-auto rounded-3xl w-1/3 h-full items-center content-center justify-center object-center object-contain md:object-scale-down pb-4"
            ></img>
            <div class="flex-none m-auto text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-300 w-1/3">
                <h1 class="text-3xl text-center font-bold pb-4">
                    {lab.name}
                </h1>
                <p class="text-xl text-center">
                    {lab.desc}
                </p>
            </div>
        </div>
    )
    return(
        <>
            <h1 class="pt-4 p-6 pr-6 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-green-500 via-blue-300 to-fuchsia-300">
            Future Gadget Lab
            </h1>
            <div class="pt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {mems}
            </div>
        </>
    )
}

export default SGDisplay;