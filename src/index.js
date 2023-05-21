// class Countr {
//     geo_x = ''
//     geo_y = ''
//     country_name = ''
//     city = ''
//     infos = {
//         citys: '',
//         avto_vagzal: '',
//         motors: ''
//     }
//     constructor(geo_x, geo_y, country_name, city, citys, avto_vagzal, motors){
//         this.geo_x = geo_x
//         this.geo_y = geo_y
//         this.country_name = country_name
//         this.city = city
//         this.infos.citys = citys
//         this.infos.avto_vagzal = avto_vagzal
//         this.infos.motors = motors
//     }
// }

// let country = new Countr('123.23', '125.33', 'Uzbekistan', ['Xorazm', 'Shovot', 'Gurlen',], 'bir bola', 'ikkita bolo', 'uchinchi bolo')
// console.log(country);

// class User {
//     User_Name = ''
//     User_LastName = ''
//     User_Age = ''
//     User_Email = ''
//     User_Phone = ''
//     UserCountryInfo = {
//         CountryUser: '',
//         ApiCountryUser: '',
//         CityUser: '',
//         CityContry: 
//             class UserFromCity {
//                 CityFromUser =''
//                 FromUser= ''
//                 HousNUmberFromUser = ''
//             },
//         TheCapitalContry:''
//     }
//     constructor(User_Name, User_LastName, User_Age, User_Email,User_Phone, CountryUser, ApiCountryUser, CityUser, CityFromUser, FromUser, HousNUmberFromUser, TheCapitalContry){
//         this.User_Name = User_Name
//         this.User_LastName = User_LastName
//         this.User_Age = User_Age
//         this.User_Email = User_Email
//         this.User_Phone = User_Phone
//         this.CountryUser = CountryUser
//         this.ApiCountryUser = ApiCountryUser
//         this.CityUser = CityUser
//         this.CityFromUser= CityFromUser
//         this.FromUser = FromUser
//         this.HousNUmberFromUser = HousNUmberFromUser
//         this.TheCapitalContry = TheCapitalContry
//     }
// }
// let NevUser = new User('Eldor')

class Magisine{
    Magasine = {
    }
        constructor(magasineCity, magasineStreet, magasineNumber,magasineName){
            this.Magasine.magasineCity = magasineCity
            this.Magasine.magasineStreet = magasineStreet
            this.Magasine.magasineNumber = magasineNumber
            this.Magasine.magasineName = magasineName
        }
        
}

class Product extends Magisine{
    Product = {
    }
    constructor(product, price, magasineCity, magasineStreet, magasineNumber,magasineName){
        super(magasineCity, magasineStreet, magasineNumber,magasineName)
        this.Product.product = product
        this.Product.price = price
    }

}

class Client extends Product{
    Client ={}
    constructor(Client_Name, Client_last_Name, Client_Age, Client_Phone_number, Client_Price, product, price, magasineCity, magasineStreet, magasineNumber,magasineName){
        super(product, price, magasineCity, magasineStreet, magasineNumber,magasineName)
        this.Client.Client_Name = Client_Name
        this.Client.Client_last_Name = Client_last_Name
        this.Client.Client_Age = Client_Age
        this.Client.Client_Phone_number = Client_Phone_number
        this.Client.Client_Price = Client_Price
    }
}

let Client1 = new Client('Eldor', 'Kenjabayev', 20, '+998904647446', 250000, ['sabzi', 'piyoz', 'Kartoshka', 'sabzi', 'sabzi','sabzi', 'sabzi',], 120000, 'Urgench', 'Istiqlol', 22, 'SultonMarket')
console.log(Client1);
