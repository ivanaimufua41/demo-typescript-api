export type BaseItem = {
    name: string;
    price: number;
    description: string;
    image: string;
}

export type Item = BaseItem & {
    id: number;
}

export type Items = {
    [key: number]: Item
}