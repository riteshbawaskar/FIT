
export class User  {
  _id: string ="";
  userId: string ="";
  password: string ="";
  firstName: string ="";
  lastName: string ="";
  active: boolean =true; // status if active or inactive
  email: string ="";

  
  GetUser(user :User)
  {
      {
          this._id = user._id ;
          this.firstName = user.firstName || '';
          this.lastName = user.lastName || '';
          this.userId = user.userId || '';
          this.password = user.password || '';
          this.active = user.active || true;
          this.email = user.email || '';
      }
  }
}
