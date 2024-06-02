interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "URS",
    github: {
        title: "URS",
        url: "https://github.com/MysteryMachine/urs",
    },
    author: {
        name: "Sal Becker",
        url: "https://github.com/MysteryMachine",
    }
}