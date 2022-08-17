let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{

        let style = e.currentTarget.classList;

        if (style.contains('increse')){
            count++;
        }
        else if (style.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }

        if(count>0){
            value.style.color = 'green'
        }
        else if(count<0 )
        value.style.color = 'red'
        else if (count=== 0)
        value.style.color = '#222'

        value.textContent = count

    })

})