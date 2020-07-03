const persons = [
    {
        name: 'Tanya Sinclair',
        profession: 'UX Engineer',
        testimony: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        image: './images/image-tanya.jpg',
    },
    {
        name: 'John Tarkpor',
        profession: 'Junior Front-end Developer',
        testimony: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        image: './images/image-john.jpg',
    },
]


let name = document.getElementsByClassName('name')
let profession = document.getElementsByClassName('profession')
let testimony = document.getElementsByClassName('testemony')
let image = document.getElementsByClassName('image')
let time = 4000
let currentIndex = 0
let lastIndex = persons.length - 1

function start(index = 0){
    name[0].innerHTML = persons[index].name;
    profession[0].innerHTML = persons[index].profession;
    testimony[0].innerHTML = persons[index].testimony;
    image[0].src = persons[index].image;
    currentIndex = index;
}



function prev(){
    if(currentIndex === 0){
        return start(lastIndex)
    }

    if(currentIndex > 1){
        return start(currentIndex - 1)
    }
    else{
        return start(0)
    }
}

function next(){
    if(currentIndex === lastIndex){
        return start(0)
    }

    if(currentIndex < lastIndex){
        return start(currentIndex + 1)
    } 
}

start()

/*function start(){
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener('load', start)*/