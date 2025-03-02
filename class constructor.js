//IT IS A SPECIAL FUNCTION EHICH IS USED TO CREATE AND INITIALISE THE OBJECT INSTANCE OF A CLASS
//A CONSTRUCTOR IS CALLED WHEN AN OBJECT IS CREATED USING NEW KEYWORD
//THE PURPOSE OF CONSTRUCTOR IS TO CREATE NEW OBJECTS AND SET VALUE TO EXISTING OBJECTS

class mobile{
    constructor(name,model,ram){
        this.name=name;
        this.model=model;
        this.ram=ram;
    }

// details()
// {
//     console.log(`Mobile name:${this.name}\n Mobile model:${this.model}\n Mobile ram:${this.ram}`);
// }
}
const phone=new mobile("oppo","latest",12);
//phone.details();
console.log(phone);
