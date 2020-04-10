import { Observable } from 'rxjs';
export class observableservice {
getObservable(){
    return new Observable(function(data){
        data.next(11111);
        data.next(33333);
        data.next(22222);
        setTimeout(function(){
            data.next({
                name:"rahul",
                age:27
            });
        },2000);
        setTimeout(()=>{
data.error("This is a arrow institute");
        },4000);
        
        data.complete();
    })
}

getPromise(){
    return new Promise((resolve)=>{
        resolve({
            name:"naveen",
            age:27,
            location:"hyderabad"
        });
        resolve({
            name:"gupta",
            age:27,
            location:"Bangalore"
        });
    })
}
}