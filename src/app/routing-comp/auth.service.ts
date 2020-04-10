export class AuthService {
    userInfo;
    isLoggedIn:boolean=false;
    login(email: string, pswd: string):boolean {
        this.userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
        if (this.userInfo && email === this.userInfo.gmail && pswd === this.userInfo.password+"") {
         this.isLoggedIn = true;
            return true;
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
    }
    // isUserLogin():boolean{
    //     return this.userInfo!=null;
    // }
    // getUserDetails(){
    //     return this.userInfo;
    // }
    // logout(){
    //     this.userInfo=null;
    // }
}