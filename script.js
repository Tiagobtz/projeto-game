function carregar() {
    let img = document.getElementById('imagem')
    let fsex = document.getElementsByName('radsex')
    let deter = document.getElementsByName('determinada')
    let vi = document.getElementsByName('vida')
    let aven = document.getElementsByName('aventura')
    let obj = document.getElementsByName('objetivo')
    let ler = document.getElementsByName('ler')
    let exe = document.getElementsByName('exer')
    let mat = document.getElementsByName('matar')
    let pe = document.getElementsByName('perdoar')

    /*Masculino*/

    if (fsex[0].checked){
        
        if (deter[0].checked && vi[0].checked && aven[0].checked && obj[1].checked && ler[1].checked && exe[0].checked && mat[1].checked  && pe[0].checked){
            img.src = 'imagens/naruto.png'
        }else if (deter[0].checked && vi[1].checked && aven[1].checked && obj[0].checked && ler[1].checked && exe[0].checked && mat[0].checked && pe[1].checked){
           img.src = 'imagens/kratos.png'
        }else if (deter[0].checked && vi[0].checked && aven[0].checked && obj[1].checked && ler[0].checked && exe[0].checked && mat[1].checked && pe[0].checked)
        img.src = 'imagens/midorya.png'
    
    
    
    
    /*Feminino*/

    }else if (fsex[1].checked){
        
        if (deter[0].checked && vi[0].checked && aven[0].checked && obj[1].checked && ler[0].checked && exe[1].checked && mat[0].checked  && pe[0].checked){
            img.src = 'imagens/eleven.png'

        }else if (deter[0].checked && vi[0].checked && aven[0].checked && obj[1].checked && ler[0].checked && exe[0].checked && mat[0].checked  && pe[1].checked){
            img.src = 'imagens/lara.png'
        
        }else if (deter[0].checked && vi[0].checked && aven[0].checked && obj[1].checked && ler[0].checked && exe[1].checked && mat[1].checked  && pe[0].checked)
           img.src = 'imagens/velma.png'
    }
    

}