export const color=[
    "White",
    "Black",
    "Red",
    "Green",
    "Blue",
    "Yellow"
]

export const filters=[
    {
        id: "color",
        name:"Color",
        options:[
            {value: "white", label: "White"},
            {value: "black", label: "Black"}


        ]
        
    },

    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label:"S"},
            {value: "M", label:"M"},
            {value: "L", label:"L"}
        ]
    }
]

export const singleFilters=[
    {
        id: "price",
        name: "Price",
        options:[
            {value: "159-399", label:"₹159 To ₹399"},
            {value: "399-999", label:"₹399 To ₹999"},
            {value: "999-1999", label:"₹999 To ₹1999"},
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options:[
            {value: "10", label:"10% And Above"},
            {value: "20", label:"20% And Above"},
            {value: "30", label:"30% And Above"},
           
        ]
    },
    {
        id: "stock",
        name: "Availablility",
        options:[
            {value: "in_stock", label:"In Stock"},
            {value: "out_of_stock", label:"Out Of Stock"},
           
        ]
    }
]