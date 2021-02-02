let allRewardExpandDIVS = document.querySelectorAll(`.reward__more`)
let allRewardCollapseDIVS = document.querySelectorAll(`.reward__less`)
let aboutExpandDIV = document.querySelector(`.about__more`)
let aboutCollapseDIV = document.querySelector(`.about__less`)
let allUpdateExpandDIVS = document.querySelectorAll(`.updates__more`)
let allUpdateCollapseDIVS = document.querySelectorAll(`.updates__less`)
let allRewardANCHORS = document.querySelectorAll(`.reward__button`)
let backerCountP = document.querySelector(`.total-backers__count`)

class RewardExpander{
 
    element = null
    
    constructor(element){
        this.element = element
        this.rewardBox = element.parentNode
        this.setup()
    }

    setup() {
    
        this.handleClick = (evt) => {
            this.rewardBox.style.maxHeight = `100rem`
            this.element.style.opacity = `0`
            setTimeout(() =>{
                this.element.style.display = `none`
            }, 300)
        }

        this.element.addEventListener(`click`, this.handleClick)

       
    }
}

class RewardCollapser{
 
    element = null
    
    constructor(element){
        this.element = element
        this.rewardBox = element.parentNode
        this.moreDIV = this.rewardBox.querySelector(`.reward__more`)
        this.setup()
    }

    setup() {
    
        this.handleClick = (evt) => {
            this.rewardBox.style.maxHeight = `28rem`
            this.moreDIV.style.display = `flex`
            setTimeout(() =>{
                this.moreDIV.style.opacity = `1`
            }, 300)
            
        }

        this.element.addEventListener(`click`, this.handleClick)

    }
}

class AboutExpander{
 
    element = null
    
    constructor(element){
        this.element = element
        this.aboutBox = element.parentNode
        this.setup()
    }

    setup() {
    
        this.handleClick = (evt) => {
            this.aboutBox.style.maxHeight = `300rem`
            this.element.style.opacity = `0`
            setTimeout(() =>{
                this.element.style.display = `none`
            }, 300)
        }

        this.element.addEventListener(`click`, this.handleClick)

       
    }
}

class AboutCollapser{
 
    element = null
    
    constructor(element){
        this.element = element
        this.aboutBox = element.parentNode
        this.aboutExpandDIV = aboutExpandDIV
        this.setup()
    }

    setup() {
    
        this.handleClick = (evt) => {
            this.aboutBox.style.maxHeight = `14rem`
            this.aboutExpandDIV.style.display = `flex`
            setTimeout(() =>{
                this.aboutExpandDIV.style.opacity = `1`
            }, 300)
        }

        this.element.addEventListener(`click`, this.handleClick)

       
    }
}

class UpdateExpander{
 
    element = null
    
    constructor(element){
        this.element = element
        this.updateBox = element.parentNode
        this.setup()
    }

    setup() {
    
        this.handleClick = (evt) => {
            this.updateBox.style.maxHeight = `300rem`
            this.element.style.opacity = `0`
            setTimeout(() =>{
                this.element.style.display = `none`
            }, 300)
        }

        this.element.addEventListener(`click`, this.handleClick)

       
    }
}

class UpdateCollapser{
 
    element = null
    
    constructor(element){
        this.element = element
        this.updateBox = element.parentNode
        this.moreDIV = this.updateBox.querySelector(`.updates__more`)
        this.setup()
    }

    setup() {
    
        this.handleClick = (evt) => {
            this.updateBox.style.maxHeight = `29rem`
            this.moreDIV.style.display = `flex`
            setTimeout(() =>{
                this.moreDIV.style.opacity = `1`
            }, 300)
            
        }

        this.element.addEventListener(`click`, this.handleClick)

    }
}

class PledgeMaker{
 
    element = null
    
    constructor(element, counter){
        this.element = element
        this.counter = counter
        // this.identifier = element.parentNode.querySelector(`.reward__price`).textContent.substring(1)
        this.backersSPAN = this.element.parentNode.querySelector(`.backers__num`)
        this.setup()
    }

    setup() {

        // axios.get(`http://circuslabs.net:3000/data/canosa-dm-pledge-${this.identifier}`).then((response) => {
        //     this.backersSPAN.textContent = response.data.data.value
        // })

        console.log(this.counter)
    
        this.handleClick = (evt) => {
            evt.preventDefault()
            this.backersSPAN.textContent = parseInt(this.backersSPAN.textContent)+1
            this.counter.textContent = parseInt(this.counter.textContent)+1

            // axios.post(`http://circuslabs.net:3000/data/canosa-dm-pledge-${this.identifier}`, {
            //     type: 'number',
            //     action: '++'
            // })
            // axios.get(`http://circuslabs.net:3000/data/canosa-dm-pledge-${this.identifier}`).then((response) => {
            //     this.backersSPAN.textContent = response.data.data.value
            // })            
        }

        this.element.addEventListener(`click`, this.handleClick)

    }
}

allRewardExpandDIVS.forEach((element) => {
    const rewardExpand = new RewardExpander(element)
})

allRewardCollapseDIVS.forEach((element) => {
    const rewardCollapse = new RewardCollapser(element)
})

const aboutExpand = new AboutExpander(aboutExpandDIV)

const aboutCollapse = new AboutCollapser(aboutCollapseDIV)

allUpdateExpandDIVS.forEach((element) => {
    const updateExpand = new UpdateExpander(element)
})

allUpdateCollapseDIVS.forEach((element) => {
    const updateCollapse = new UpdateCollapser(element)
})

allRewardANCHORS.forEach((element) => {
    const pledge = new PledgeMaker(element, backerCountP)
})