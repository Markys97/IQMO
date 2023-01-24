let dropdown_item= [...document.querySelectorAll('.dropdown__item')]


dropdown_item.forEach((item,index,arr)=>{
    item.querySelector('.dropdown__header').addEventListener('click',function(e){
        let dropdown_item = this.parentElement

        arr.forEach(elt =>{
           
            if(dropdown_item !== elt){
                elt.classList.remove('active')
            }
        })

        dropdown_item.classList.toggle('active')

        
       


    })
})