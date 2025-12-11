export class Javafile {
   static Billy = new Javafile('Billy');
   static Bob = new Javafile('Bob');
   static Joe = new Javafile('Joe');
   static DefaultPerson = new Javafile('Username');
   constructor(psn) {
      this.u = psn;
   }
   set ChangeUser(psn) {
      if (psn === 'Billy') {
         this.u = 'Billy';
      }
      else if (psn === 'Bob') {
         this.u = 'Bob';
      }
      else if (psn === 'Joe') {
         this.u = 'Joe';
      }
      else {
         this.u = 'Username';
      }
   }
   get Person() {
      return this.u;
   }
}