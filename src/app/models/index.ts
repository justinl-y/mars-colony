export class NewColonist {
    constructor(
        //public id: number,
        public name: string,
        public age: number,
        public job_id: string,
        //public job: Job,
    ) {}
 }

 interface Colonist {
     // id: number,
     name: string,
     id: number,
     age: number,
     job: Job,
     //job_id: string,
 }

 export class Job {
     constructor(
         public name: string,
         public id: number,
         public description: string
     ) {}
 }

export class Encounter {
    constructor(
        public id: number,
        public date: string,
        public colonist_id: number,
        public atype: string,
        public action: string
    ) {}
}

export class Alien {
    constructor(
        type: string,
        submitted_by: string,
        id: number,
        description: string
    ) {}
}



