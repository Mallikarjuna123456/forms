export class crudService{
    arr=[];
    setData(Data){
        this.arr.push({
            Data:Data,
            edit:false
        })
    }
    getData(){
        return this.arr;
    }
}