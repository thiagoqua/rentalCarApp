export const APIURL:string = "http://localhost:8080/api";

export const CATEGORIES:string[] = [
    "sport","hatchback","luxury","sedan","familiar","SUV","offRoad","pickUp"
];

export enum comingFrom {
    SIGNUP, HOME, USER
}

export const Filter:Record<'category',string> = {category:'all'};