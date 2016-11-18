export class Colonist {
    constructor(
        public name: string,
        public age: number,
        public job_id: string,
    ) {}
 }

export interface IColonist {
     name: string,
     id: number,
     age: number,
     job_id: string,
 }

 export class Job {
     constructor(
         public name: string,
         public description: string
     ) {}
 }

 export interface IJob {
    name: string,
    id: number,
    description: string
 }

export class Encounter {
    constructor(
        public action: string,
        public atype: string,
        public colonist_id: number,
        public date: string,
    ) {}
}

export interface IEncounter {
    id: number,
    action: string,
    atype: string,
    colonist_id: string,
    date: string,
}

export class Alien {
    constructor(
        public type: string,
        public submitted_by: string,
        public description: string,
    ) {}
}

export interface IAlien {
    type: string,
    submitted_by: string,
    id: number,
    description: string;
}

export interface ICommanderBlog {
    id: number,
    date: string,
    date_gmt: string,
    guid: {},
    modified: string,
    modified_gmt: string,
    slug: string,
    type: string,
    link: string,
    title: {},
    content: {},
    excerpt: {},
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    sticky: boolean,
    format: string,
    categories: {}, //[]
    tags: {}, //[]
    _links: {}
}