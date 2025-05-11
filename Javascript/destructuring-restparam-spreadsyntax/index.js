// Destructuring
    // const user = {
    //     fullname : "Minh",
    //     email : "minhkhac1002@gmail.com",
    //     age : 21
    // }

    // // const fullname = user.fullname
    // // const email = user.email
    // // const age = user.age

    // const {fullname, email, age} = user;

    // console.log(fullname, email, age);


    // const points = [1, 4];
    // const [x, y] = points;
    // console.log(x)
    // console.log(y)
// End Destructuring

// Spread Syntax

const user_2 = {
    fullname : "Minh",
    email : "minhkhac1002@gmail.com",
    age : 18,
    points : [1, 2, 3]
}

const user_3 = user_2;
console.log(user_3 === user_2); // true : cùng tham chiếu đến 1 bộ nhớ


// (shallow coppy) : Sao chép nông
const user_4 = {...user_2};
console.log(user_4 === user_2); // false : không tham chiếu
console.log(user_4.points === user_2.points) // true;
// End Spread Syntax 

// Rest_params
const handle = (a, b, ...c) => {
    return c;
}

const value = handle(1, 2, 3, 4, 5);
console.log(value); // [3, 4, 5]
