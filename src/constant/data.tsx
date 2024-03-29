import { NoteProps } from "@/interface/INotes"
import { SideBarLinkProps } from "@/interface/ISideBarLink"
import { Bus, Cake, CloudSun, Clover, Fan, Flower2, Ghost, Heart, Inbox, Snowflake, ThermometerSun, Umbrella } from "lucide-react"

export const accounts = [
    {
        label: "John Doe",
        email: "johndoe@example.com",
        icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Vercel</title>
                <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
            </svg>
        ),
    },
]

export const SideBarLink: SideBarLinkProps[] = [
    {
        title: "January",
        label: "128",
        icon: Snowflake,
        variant: "ghost",
    },
    {
        title: "February",
        label: "128",
        icon: Heart,
        variant: "ghost",
    },
    {
        title: "March",
        label: "128",
        icon: Clover,
        variant: "ghost",
    },
    {
        title: "April",
        label: "128",
        icon: Umbrella,
        variant: "ghost",
    },
    {
        title: "May",
        label: "128",
        icon: Flower2,
        variant: "ghost",
    },
    {
        title: "June",
        label: "128",
        icon: ThermometerSun,
        variant: "ghost",
    },
    {
        title: "July",
        label: "128",
        icon: Fan,
        variant: "ghost",
    },
    {
        title: "August",
        label: "128",
        icon: CloudSun,
        variant: "ghost",
    },
    {
        title: "September",
        label: "128",
        icon: Bus,
        variant: "ghost",
    },
    {
        title: "October",
        label: "128",
        icon: Ghost,
        variant: "ghost",
    },
    {
        title: "November",
        label: "128",
        icon: Cake,
        variant: "ghost",
    },
    {
        title: "December",
        label: "128",
        icon: Snowflake,
        variant: "ghost",
    }
]

export const Notes: NoteProps[] = [
    {
        id: "1",
        title: "Birthday Not Favorite",
        note: "Celebrated my birthday today at the beach with my cousin—sunshine, waves, laughter, and a surprise beach cake at sunset made it a magical and unforgettable day.",
        date: "2023-10-22T09:00:00",
        isFavorite: false,
        labels: ["meeting", "work", "important"],
    },
    {
        id: "2",
        title: "Christmas Not Favorite",
        note: "Embraced the enchanting spirit of Christmas today, as the air filled with festive cheer and the house echoed with laughter and merriment. Gathered with loved ones, we exchanged thoughtful gifts, adorned the Christmas tree with sparkling ornaments, and indulged in a delicious feast that warmed our hearts on this joyous occasion. Grateful for the love, warmth, and shared moments that made this Christmas a truly magical and unforgettable celebration.",
        date: "2023-10-22T10:30:00",
        isFavorite: false,
        labels: ["work", "important", "hobby"],
    },
    {
        id: "3",
        title: "Birthday",
        note: "Celebrated my birthday today at the beach with my cousin—sunshine, waves, laughter, and a surprise beach cake at sunset made it a magical and unforgettable day.",
        date: "2023-10-22T09:00:00",
        isFavorite: true,
        labels: ["meeting", "work", "important"],
    },
    {
        id: "4",
        title: "Christmas",
        note: "Embraced the enchanting spirit of Christmas today, as the air filled with festive cheer and the house echoed with laughter and merriment. Gathered with loved ones, we exchanged thoughtful gifts, adorned the Christmas tree with sparkling ornaments, and indulged in a delicious feast that warmed our hearts on this joyous occasion. Grateful for the love, warmth, and shared moments that made this Christmas a truly magical and unforgettable celebration.",
        date: "2023-10-22T10:30:00",
        isFavorite: true,
        labels: ["work", "important", "hobby"],
    },
    {
        id: "5",
        title: "Birthday",
        note: "Celebrated my birthday today at the beach with my cousin—sunshine, waves, laughter, and a surprise beach cake at sunset made it a magical and unforgettable day.",
        date: "2023-10-22T09:00:00",
        isFavorite: true,
        labels: ["meeting", "work", "important"],
    },
    {
        id: "6",
        title: "Christmas",
        note: "Embraced the enchanting spirit of Christmas today, as the air filled with festive cheer and the house echoed with laughter and merriment. Gathered with loved ones, we exchanged thoughtful gifts, adorned the Christmas tree with sparkling ornaments, and indulged in a delicious feast that warmed our hearts on this joyous occasion. Grateful for the love, warmth, and shared moments that made this Christmas a truly magical and unforgettable celebration.",
        date: "2023-10-22T10:30:00",
        isFavorite: true,
        labels: ["work", "important", "hobby"],
    },
    {
        id: "7",
        title: "Birthday",
        note: "Celebrated my birthday today at the beach with my cousin—sunshine, waves, laughter, and a surprise beach cake at sunset made it a magical and unforgettable day.",
        date: "2023-10-22T09:00:00",
        isFavorite: true,
        labels: ["meeting", "work", "important"],
    },
    {
        id: "8",
        title: "Christmas 8",
        note: "Embraced the enchanting spirit of Christmas today, as the air filled with festive cheer and the house echoed with laughter and merriment. Gathered with loved ones, we exchanged thoughtful gifts, adorned the Christmas tree with sparkling ornaments, and indulged in a delicious feast that warmed our hearts on this joyous occasion. Grateful for the love, warmth, and shared moments that made this Christmas a truly magical and unforgettable celebration.",
        date: "2023-10-22T10:30:00",
        isFavorite: true,
        labels: ["work", "important", "hobby"],
    },
    {
        id: "9",
        title: "Birthday 9",
        note: "Celebrated my birthday today at the beach with my cousin—sunshine, waves, laughter, and a surprise beach cake at sunset made it a magical and unforgettable day.",
        date: "2023-10-22T09:00:00",
        isFavorite: true,
        labels: ["meeting", "work", "important"],
    },
    {
        id: "71",
        title: "Birthday",
        note: "Celebrated my birthday today at the beach with my cousin—sunshine, waves, laughter, and a surprise beach cake at sunset made it a magical and unforgettable day.",
        date: "2023-10-22T09:00:00",
        isFavorite: true,
        labels: ["meeting", "work", "important"],
    },
    {
        id: "81",
        title: "Christmas 8",
        note: "Embraced the enchanting spirit of Christmas today, as the air filled with festive cheer and the house echoed with laughter and merriment. Gathered with loved ones, we exchanged thoughtful gifts, adorned the Christmas tree with sparkling ornaments, and indulged in a delicious feast that warmed our hearts on this joyous occasion. Grateful for the love, warmth, and shared moments that made this Christmas a truly magical and unforgettable celebration.",
        date: "2023-10-22T10:30:00",
        isFavorite: true,
        labels: ["work", "important", "hobby"],
    },
    {
        id: "91",
        title: "Birthday 91",
        note: "Celebrated my birthday today at the beach with my cousin—sunshine, waves, laughter, and a surprise beach cake at sunset made it a magical and unforgettable day.",
        date: "2023-10-22T09:00:00",
        isFavorite: true,
        labels: ["meeting", "work", "important"],
    },

]