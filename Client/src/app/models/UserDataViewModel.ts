export class UserDataViewModel{

    Id:string;
    UserName:string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;

    constructor(
        _Id:string,
        _UserName: string,
        _FirstName: string,
        _LastName: string,
        _PhoneNumber: string,
    ){
        this.Id = _Id;
        this.UserName = _UserName;
        this.FirstName = _FirstName;
        this.LastName = _LastName;
        this.PhoneNumber = _PhoneNumber;
    }
}