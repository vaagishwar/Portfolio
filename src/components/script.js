window.onload = ()=> {
    console.log('loaded')
}

const mode=(e)=>{
    // console.log(e)
    const body = document.getElementById('body')
    const desc = document.getElementById('desc')
    const grid = document.getElementById('grid')
    const overlay = document.getElementsByClassName('overlay')
    const h1s = document.getElementsByTagName('h2')
    body.classList.toggle('bg-gray-950')
    desc.classList.toggle('text-mist-200')
    grid.classList.toggle('bg-[linear-gradient(to_right,#55555511_1px,transparent_1px),linear-gradient(to_bottom,#55555511_1px,transparent_1px)]')
    grid.classList.toggle('bg-[linear-gradient(to_right,#55555533_1px,transparent_1px),linear-gradient(to_bottom,#55555533_1px,transparent_1px)]')
    // console.log(overlay)
    overlay[0].classList.toggle('bg-[linear-gradient(#ffffffff,#ffffff00)]')
    overlay[0].classList.toggle('bg-[linear-gradient(#030712ff,#03071200)]')
    overlay[1].classList.toggle('bg-[linear-gradient(#ffffff00,#ffffffff)]')
    overlay[1].classList.toggle('bg-[linear-gradient(#03071200,#030712ff)]')

        
    
}