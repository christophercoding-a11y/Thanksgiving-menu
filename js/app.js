/**
 * load items
 * select items
 * return selected items
 */

class MenuForm {

    constructor() {
        // access DOM elements
        this.person = document.getElementById('person').value 
        this.meatRow = document.getElementById('meatRow')
        this.sidesRow = document.getElementById('sidesRow')
        this.dessertsRow = document.getElementById('dessertsRow')
        this.drinksRow = document.getElementById('drinksRow')
        this.foodList = document.getElementById('foodList')

        // create array of food items
        this.menu = [
            {
                id: 1,
                type: 'meat',
                item: 'fried turkey',
                imgUrl: 'fried_turkey.jpeg',
                isChecked: false,
                madeBy: 'Mom'
            },
            {
                id: 2,
                type: 'meat',
                item: 'oven turkey',
                imgUrl: 'oven_turey.jpeg',
                isChecked: false,
                madeBy: 'Dad'
            },
            {
                id: 3,
                type: 'meat',
                item: 'ham',
                imgUrl: 'ham.jpeg',
                isChecked: false,
                madeBy: 'Clint'
            },
            {
                id: 4,
                type: 'meat',
                item: 'turducken',
                imgUrl: 'turducken.jpeg',
                isChecked: false,
                madeBy: 'Christian'
            },
            {
                id: 5, 
                type: 'sides',
                item: 'dressing',
                imgUrl: 'dressing.jpeg',
                isChecked: false,
                madeBy: 'Grandma rose'
            }, 
            {
                id: 6,
                type: 'sides',
                item: 'turnip greens',
                imgUrl: 'turnip_greens.jpeg',
                isChecked: false,
                madeBy: 'cousin pat'
            },
            {
                id: 7,
                type: 'sides',
                item: 'mashed potatoes w/gravy',
                imgUrl: 'mashed_potatoes.jpeg',
                isChecked: false,
                madeBy: 'counsin bam bam'
            },
            {
                id: 8,
                type: 'sides',
                item: 'deep fried loaded baked potato balls',
                imgUrl: 'baked_potato_balls.jpeg',
                isChecked: false,
                madeBy: 'Aunt tracey'
            },
            {
                id: 9,
                type: 'sides',
                item: "mac n' cheese",
                imgUrl: 'macncheese.jpeg',
                isChecked: false,
                madeBy: 'Aunt Ann' 
            },
            {
                id: 10,
                type: 'sides',
                item: 'cranberry sauce',
                imgUrl: 'cranberry_sauce.jpeg',
                isChecked: false,
                madeBy: 'Aunt liz'
            },
            {
                id: 11, 
                type: 'sides',
                item: 'greenbean casserole',
                imgUrl: 'greenbean_casserole.jpeg',
                isChecked: false,
                madeBy: 'uncle jason'
            },
            {
                id: 12,
                type: 'sides',
                item: 'cornbread',
                imgUrl: 'cornbread.jpeg',
                isChecked: false,
                madeBy: "uncle beau"
            },
            {
                id: 13, 
                type: 'desserts',
                item: 'sweet potato pie',
                imgUrl: 'sweet_potato_pie.jpeg',
                isChecked: false,
                madeBy: "Uncle Jimmie"
            },
            {
                id: 14,
                type: 'desserts',
                item: 'pecan pie',
                imgUrl: 'pecan_pie.jpeg',
                isChecked: false,
                madeBy: 'Joey'
            },
            {
                id: 15, 
                type: 'desserts',
                item: 'pound cake',
                imgUrl: 'pound_cake.jpeg',
                isChecked: false,
                madeBy: 'Mikey'
            },
            {
                id: 16, 
                type: 'desserts',
                item: 'bread pudding',
                imgUrl: 'bread_pudding.jpeg',
                isChecked: false,
                madeBy: 'Aunt punkin'
            },
            {
                id: 17,
                type: 'drinks',
                item: 'ginger ale',
                imgUrl: 'ginger_ale.jpeg',
                isChecked: false
            },
            {
                id: 18,
                type: 'drinks',
                item: 'sweet tea',
                imgUrl: 'sweet_tea.jpeg',
                isChecked: false
            },
            {
                id: 19,
                type: 'drinks',
                item: 'whiskey',
                imgUrl: 'whiskey.jpeg',
                isChecked: false
            },
            {
                id: 20,
                type: 'drinks',
                item: 'lemonade',
                imgUrl: 'lemonade.jpeg',
                isChecked: false
            }
        ]

        this.plate = {
            person: '',
            meat: [],
            sides: [],
            desserts: [],
            drinks: ''
        }
    }

    init() {
        this.buildFigures(this.menu)
    }

    loadItems(el, child) {
        el.appendChild(child)
    }

    buildFigures(arr) {

        arr.forEach(obj => {
            // for each object build Figure
            const column = document.createElement('div')
            column.classList.add('col')

            column.innerHTML = `
                <div class="figure-div" data-isChecked=${obj.isChecked}>
                    <figure class="figure item-figure">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder img" class="img-fluid image figure-img food-image rounded" />
                        <figcaption class="figure-caption food-caption">${
                            obj.hasOwnProperty('madeBy') ? obj.madeBy : ''
                        }</figcaption>
                    </figure>
                    <h3 class="food-heading">${obj.item}</h3>
                    <div class="form-check">
                        <input 
                            type="checkbox" 
                            name="${obj.type}" 
                            id="${obj.type}-${obj.id}"
                            value="${obj.item}"
                            class="form-check-input"
                        />
                        <label 
                            for="${obj.type}-${obj.id}" 
                            class="text-capitalize form-check-label">
                            ${obj.item}
                        </label>
                    </div>
                </div>
            `

            switch (obj.type) {
                case 'meat': 
                    this.loadItems(this.meatRow, column)
                    break
                case 'sides':
                    this.loadItems(this.sidesRow, column)
                    break
                case 'desserts':
                    this.loadItems(this.dessertsRow, column)
                    break 
                case 'drinks':
                    this.loadItems(this.drinksRow, column)
                    break 
                default: 
                    return 'error'
            }
        })
    }

    buildPlate() {
        const person = document.getElementById('person').value
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        const foodItems = document.querySelectorAll('.figure-div')


        checkboxes.forEach(checkbox => {
            const name = checkbox.name
            const value = checkbox.value
            if (checkbox.checked) {
                // console.log(checkbox.value)
                // console.log(checkbox.value)
                this.plate = {
                    ...this.plate,
                    person,
                    [name]: [...this.plate[name],value]
                }

                this.menu.forEach(item => {
                    if (checkbox.value == item.item) {
                        item.isChecked = checkbox.checked
                    }
                })
            }
        })
        // console.log(this.plate)

        this.makeReceipt(this.menu)
        const personPlate = document.getElementById('personPlate')
        personPlate.innerText = `${this.plate.person}'s `

        this.makeReceipt(this.menu)
    }

    makeReceipt(arr) {

        for (let i = 0; i < arr.length; i++) {
            if (obj.isChecked) {
                const listItem = document.createElement('li')
                listItem.classList.add('list-group-item')
                listItem.innerText = arr[i].item
    
                this.foodList.appendChild(listItem)
            }
        }

    }

}

const submitBtn = document.getElementById('submitBtn')


const action = new MenuForm() 
action.init()

submitBtn.addEventListener('click', ()=> {
    // console.log('click')
    action.buildPlate()
})

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (prop in obj) {
//     console.log(obj[prop] * 3)
// }