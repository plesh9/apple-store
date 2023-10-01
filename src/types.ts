import { StaticImageData } from "next/image"

export interface IProduct {
    id: string
    name: string
    price: string
    img: string
    description: string
    category: string
}

export enum FilterEnum {
    all = 'all products',
    phones = 'phones',
    tablets = 'tablets',
    laptops = 'laptops',
    wearables = 'wearables',
    audio = 'audio',
    tv = 'tv',
    entertainment = 'entertainment'
}

export interface ITrailer {
    id: string
    title: string
    img: string | StaticImageData
    url: string
}