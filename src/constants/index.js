import { virus, fire, air } from "../assets/images";

export const statistics = [
    { value: '500+', label: 'Bytů vyčištěno' },
    { value: '2000+', label: 'Spokojených zákazníků' },
];

export const reasons = [
    {
        imgURL: virus,
        label: "Rizika ohrožující zdravý",
        subtext: "V potrubí, které je znečištěné prachem a mastnotou, se mohou snadno rozmnožovat plísně, bakterie nebo viry, jež mohou vést k onemocněním, a to jak akutním, například infekcím, tak i chronickým, jako jsou alergie nebo astma.."
    },
    {
        imgURL: fire,
        label: "Požární riziko",
        subtext: "Hromadění nečistot také zvyšuje riziko šíření požáru mezi jednotlivými bytovými jednotkami. Znečištěné odtahové potrubí z koupelen a kuchyní představuje ideální prostředí pro šíření požáru do okolních bytů. "
    },
    {
        imgURL: air,
        label: "Šíření zápachu a prachu",
        subtext: "Po vyčištění potrubí dojde k poklesu prašnosti v bytech a také se sníží šíření nepříjemných vůní mezi jednotlivými bytovými jednotkami. "
    },
];

export const services = [
    {
        label: "Méně než 60 bytů",
        subtext: "Cena: 800 - 1100 Kč za byt"
    },
    {
        label: "60-80 bytů",
        subtext: "Cena: 700 Kč za byt"
    },
    {
        label: "80 a více bytů",
        subtext: "Cena: dohodou"
    },
];