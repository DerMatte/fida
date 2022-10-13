import BannerElektrotechnik from "assets/pic/leistungen/banner_elektrotechnik.jpg";
import BannerPhotovoltaik from "assets/pic/leistungen/banner_photovoltaik_solar.jpg";
import BannerSicherheitstechnik from "assets/pic/leistungen/banner_sicherheitstechnik.jpg";
import BannerLicht from "assets/pic/leistungen/haus-lichttechnik-lichtsysteme.jpg";

export const LeistungenData = [
    {
        title: "Elektroinstallationen",
        description:
            "In Sachen Elektroinstallation profitieren Sie von unserer jahrzehntelangen Erfahrung im Bereich der Elektrotechnik. Gleich ob Haus oder Industrieanlagen wir bieten Ihnen eine rasche und zuverlässige Abwicklung und maximalen Service.",
        image: BannerElektrotechnik,
        slug: "elektroinstallationen",
    },
    {
        title: "Photovoltaik",
        description:
            "Installation und Wartung von PV Eigen- und Fremdanlagen - unbegrenzte Energie für Zuhause!",
        image: BannerPhotovoltaik,
        slug: "photovoltaik",
    },
    {
        title: "Lichttechnik",
        description:
            "Atmosphärische Beleuchtung für ein besonderes Wohlbefinden - hochwertig, effektiv und stromsparend!",
        image: BannerLicht,
        slug: "lichttechnik",
    },
    {
        title: "Sicherheitstechnik",
        description:
            "Modernste Sicherheitstechnik für Firmen und Privat, damit Sie sich rundum sicher fühlen können.",
        image: BannerSicherheitstechnik,
        slug: "sicherheitstechnik",
    },
];

export const ProjektData = [
    {
        title: "Rathhaus Filderstadt",
        description: "Wir haben das Rathaus Filderstadt mit einer neuen Beleuchtung ausgestattet.",
        image: "https://picsum.photos/200/300",
        slug: "rathaus-filderstadt",
        details: {
            location: "Ludwigsburg",
            typ: "Lichttechnik",
        }
    },
    {
        title: "Schule Weil der Stadt",
        description: "Wir haben die Schule Weil der Stadt mit einer Solaranlage ausgestattet.",
        image: "https://picsum.photos/200/300",
        slug: "schule-weil-der-stadt",
        details: {
            location: "Weil der Stadt",
            typ: "Photovoltaik",
            leistung: 12.8,
        }
    },
    {
        title: "Gemeindehaus Leinfelden-Echterdingen",
        description: "Wir haben das Gemeindehaus Leinfelden-Echterdingen mit einer neuen Beleuchtung ausgestattet.",
        image: "https://picsum.photos/200/300",
        slug: "gemeindehaus-leinfelden-echterdingen",
        details: {
            location: "Leinfelden-Echterdingen",
            typ: "Lichttechnik",
        }
    },
    {
        title: "Fi-Da Photovoltaik",
        description: "Wir haben unser eigenes Gebäude mit einer brandneuen Solaranlage ausgestattet.",
        image: "https://picsum.photos/200/300",
        slug: "fi-da-photovoltaik",
        details: {
            location: "Bernhausen",
            typ: "Photovoltaik",
            leistung: 24.7,
        }
    },
];
