import { NoteProps } from "@/interface/INotes"
import { SideBarLinkProps } from "@/interface/ISideBarLink"
import { Bus, Cake, CloudSun, Clover, Fan, Flower2, Ghost, Heart, Inbox, Snowflake, ThermometerSun, Umbrella } from "lucide-react"

export const accounts = [
    {
        label: "Alicia Koch",
        email: "alicia@example.com",
        icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Vercel</title>
                <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
            </svg>
        ),
    },
    {
        label: "Alicia Koch",
        email: "alicia@gmail.com",
        icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Gmail</title>
                <path
                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        label: "Alicia Koch",
        email: "alicia@me.com",
        icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>iCloud</title>
                <path
                    d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
                    fill="currentColor"
                />
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