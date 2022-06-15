class gerador2 {
    constructor(passLen) {
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let pass;
        this.passLen = passLen;
        let passArray = [];

        this.gen = () => {
            for (let i = 0; i < passLen; i++) {
                passArray.push(alphabet[Math.abs(Math.random().toFixed(1) * 10)]);
            }
        };

        this.brokeAndCreateCode = (init1, end1, init2, end2, separador) => {
            pass = passArray.join("").substring(init1, end1) + separador + passArray.join("").substring(init2, end2);
            this.inputCode(pass);
        };
        this.inputCode = (passCode) => {
            console.log(passCode);
        };
    }
}

let gene = new gerador2(8);
gene.gen();
gene.brokeAndCreateCode(0,4,4,8,"-");

// const gen = ()=>{

//     //const codigo = document.querySelector("#codigo");
//     const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     let pass;
//     let passLen = 8;
//     let passArray = [];

//     function gerador(){
//         for(let i = 0; i < passLen;i++){
//             passArray.push(alphabet[Math.abs(Math.random().toFixed(1)*10)]);
//         }
//     }
    
//     gerador();

//     function inputCode(passCode){
//             //codigo.value = passCode;
//             console.log(passCode);
//     }

//     function brokeAndCreateCode(){
//         pass = passArray.join("").substring(0,4) + "-" + passArray.join("").substring(4,8)
//         inputCode(pass)
//     }
 
//     brokeAndCreateCode()
// }
    
// gen();
