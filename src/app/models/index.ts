export class Colonist {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public job_id: string,
        //public job: Job,
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
         public id: number,
         public description: string
     ) {}
 }

 export interface IJob {
    name: string,
    id: number,
    description: string
 }

export class NewEncounter {
    constructor(
        //public id: number,
        public action: string,
        public atype: string,
        public colonist_id: number,
        public date: string,

        /*public atype: string,
        public date: string,
        public action: string,
        public colonist_id: number,*/

    ) {}
}

export interface Encounter {
    id: number,
    action: string,
    atype: string,
    colonist_id: string,
    date: string,
}

/*export class Encounter {
    constructor(
        public id: number,
        public date: string,
        //public colonist_id: number,
        public atype: string,
        public action: string,
    ) {}
}*/

/*interface IEncounter {
    id: string,
    date: string,
    // colonist_id; number,
    atype: Alien,
    action: string,
}*/

export class Alien {
    constructor(
        public type: string,
        public submitted_by: string,
        public id: number,
        public description: string,
    ) {}
}

export interface IAlien {
    type: string,
    submitted_by: string,
    id: number,
    description: string;
}
