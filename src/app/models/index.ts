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

export class NewEncounter {
    constructor(
        //public id: number,
        //public colonist_id: number,
        public date: string,
        public atype: string,
        public action: string,
    ) {}
}

interface Encounter {
    // id: string,
    // colonist_id; number,
    date: string,
    atype: Alien,
    action: string,
}

export class Alien {
    constructor(
        type: string,
        submitted_by: string,
        id: number,
        description: string
    ) {}
}



