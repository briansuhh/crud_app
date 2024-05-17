export class Trackinglog {
    trackingID!: number;
    date!: string;
    time!: string;
    location!: string;
    activity!: string;
    responsibility!: string;
  
    constructor() {
      this.date = '';
      this.time = '';
      this.location = '';
      this.activity = '';
      this.responsibility = 'n/a';
    }
  }
  