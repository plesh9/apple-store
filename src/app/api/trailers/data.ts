import { ITrailer } from "@/types";
import GameOfThronesImg from "@/assets/images/trailers/game-of-thrones.webp"
import SandmanImg from "@/assets/images/trailers/sandman.jpg"
import WitcherImg from "@/assets/images/trailers/witcher.jpg"
import BoysImg from "@/assets/images/trailers/boys.jpg"
import HijackImg from "@/assets/images/trailers/hijack.jpg"

export const trailers: ITrailer[] = [
    {
        id: "1",
        title: "Game Of Thrones",
        img: GameOfThronesImg,
        url: "https://youtu.be/KPLWWIOCOOQ?si=ESpNFs0fKmhnH1zt"
    },
    {
        id: "2",
        title: "SANDMAN",
        img: SandmanImg,
        url: "https://youtu.be/ZJXamnPUm0I?si=EefYVQSC7acdHn1I"
    },
    {
        id: "3",
        title: "WITCHER",
        img: WitcherImg,
        url: "https://youtu.be/ndl1W4ltcmg?si=65SY4J2q5qo_FFh1"

    },
    {
        id: "4",
        title: "BOYS",
        img: BoysImg,
        url: "https://youtu.be/M1bhOaLV4FU?si=4wGSGlg1-HUT9O-W"
    },
    {
        id: "5",
        title: "HIJACK",
        img: HijackImg,
        url: "https://youtu.be/WxwKzsklvJo?si=x3mI4J_R7Q0c3d8y"
    },
]