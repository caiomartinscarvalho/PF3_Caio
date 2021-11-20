function Calcular(){
    let Nome = document.getElementById('Nome').value
    let Mensal = Number(document.getElementById('Rmensal').value)
    let Tjuros = Number(document.getElementById('Txjuros').value)
    let Meses = Number(document.getElementById('Nprestacoes').value)
    let juros = Tjuros/100
    var res = document.getElementById("Resultado")
         
    var p = ((1+juros)**Meses-1)/juros 
    var vf = Mensal*p.toFixed(2)
  
        res.innerHTML = `${Nome}, se você aplicar R $${Mensal}, à taxa de juros de ${Tjuros}% ao mês, durante ${Meses} meses,
        acumulará uma poupança de R $${vf}`
    
    
}