// password genrator
const passwordBtn = document.getElementById("password");
const len =12;
const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWKYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const number ="0123456789"
const symbol ="~!@#$%^&*()-=_+[]{}\₭Rsل.دLK₮₨FtKnLQ₣Dლ£€د.إ$₡∝∞∟∮ↂↇ↱↰⚀♥♦⅓:'<>?,";
const allChars = uppercase +lowercase + number +symbol;
function createpassword(){
    let password = "";
    password+=uppercase[Math.floor(Math.random() * uppercase.length)];
    password+=lowercase[Math.floor(Math.random() * uppercase.length)];
    password+=number[Math.floor(Math.random() * uppercase.length)];
    password+=symbol[Math.floor(Math.random() * uppercase.length)];
    while(len> password.lenth){
        password+=allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBtn.value = password;
}
function copypassword(){
    passwordBtn.select();
    document.execCommand("copy");

}