const gen = ()=>{

    //const codigo = document.querySelector("#codigo");
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let pass;
    let passLen = 8;
    let passArray = [];

    function gerador(){
        for(let i = 0; i < passLen;i++){
            passArray.push(alphabet[Math.abs(Math.random().toFixed(1)*10)]);
        }
    }
    
    gerador();

    function inputCode(passCode){
            //codigo.value = passCode;
            console.log(passCode);
    }

    function brokeAndCreateCode(){
        pass = passArray.join("").substring(0,4) + "-" + passArray.join("").substring(4,8)
        inputCode(pass)
    }
 
    brokeAndCreateCode()
}
    
gen();
