// Lv0
const person = {
    name: 'Boson',
    age: 20,
    address: {
      city: 'Chongqing',
      area: 'Nanan'
    }
  }
const{name,age,address:{city,area}}=person

//lv1 斐波那契数列：0、1、1、2、3、5、8、13、21、34、……
//在数学上，以递推定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）

function fibonacci(nub) {
    let n = nub && parseInt(nub);
    let n1 = 1;
    let n2 = 1; 
    let f;
    
    if(n == 1 || n == 2) {
        return 1;
    }
    for(let i = 2; i < n; i++) {
        f = n1 + n2;
        n1 = n2;
        n2 = f;
    } 
    return f
}
