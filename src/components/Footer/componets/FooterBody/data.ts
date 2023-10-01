export interface IFooterBodyLink {
    title: string
    url: string
}

export interface IFooterBodyItem {
    title: string
    data: IFooterBodyLink[]
}

export const footerBodyColumns = [
    [
        {
            title: "Shop & Learn",
            data: [
                { title: 'Store', url: '/' },
                { title: 'Mac', url: '/' },
                { title: 'iPad', url: '/' },
                { title: 'iPhone', url: '/' },
                { title: 'Watch', url: '/' },
                { title: 'Vision', url: '/' },
                { title: 'AirPods', url: '/' },
                { title: 'TV & Home', url: '/' },
                { title: 'AirTag', url: '/' },
                { title: 'Accessories', url: '/' },
                { title: 'Gift Cards', url: '/' },
            ]
        }
    ],
    [
        {
            title: "Apple Store",
            data: [
                { title: 'Find a Store', url: '/' },
                { title: 'Genius Bar', url: '/' },
                { title: 'Today at Apple', url: '/' },
                { title: 'Apple Camp', url: '/' },
                { title: 'Apple Store App', url: '/' },
                { title: 'Certified Refurbished', url: '/' },
                { title: 'Apple Trade In', url: '/' },
                { title: 'Financing', url: '/' },
                { title: 'Carrier Deals at Apple', url: '/' },
                { title: 'Order Status', url: '/' },
                { title: 'Shopping Help', url: '/' },
            ]
        }
    ],
    [
        {
            title: "For Business",
            data: [
                { title: 'Apple and Business', url: '/' },
                { title: 'Shop for Business', url: '/' },
            ]
        },
        {
            title: "For Education",
            data: [
                { title: 'Apple and Education', url: '/' },
                { title: 'Shop for K-12', url: '/' },
                { title: 'Shop for College', url: '/' },
            ]
        },
        {
            title: "For Healthcare",
            data: [
                { title: 'Apple in Healthcare', url: '/' },
                { title: 'Health on Apple Watch', url: '/' },
                { title: 'Health Records on iPhone', url: '/' },
            ]
        }
    ],
    [
        {
            title: "Entertainment",
            data: [
                { title: 'Apple One', url: '/' },
                { title: 'Apple TV+', url: '/' },
                { title: 'Apple Music', url: '/' },
                { title: 'Apple Arcade', url: '/' },
                { title: 'Apple Fitness+', url: '/' },
                { title: 'Apple News+', url: '/' },
                { title: 'Apple Podcasts', url: '/' },
                { title: 'Apple Books', url: '/' },
                { title: 'App Store', url: '/' },
            ]
        }
    ],
    [
        {
            title: "Apple Wallet",
            data: [
                { title: 'Wallet', url: '/' },
                { title: 'Apple Card', url: '/' },
                { title: 'Apple Pay', url: '/' },
                { title: 'Apple Cash', url: '/' },
            ]
        },
        {
            title: "Account",
            data: [
                { title: 'Manage Your Apple ID', url: '/' },
                { title: 'Apple Store Account', url: '/' },
                { title: 'iCloud.com', url: '/' },
                { title: 'Gift Cards', url: '/' },
            ]
        }
    ],
]