console.log("BUSINESS NAME GENERATOR \n");

/* Create a business name generator by combining list of adjectives and shop name and another word
....without using arrays....

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

adj0 = "crazy";
adj1 = "amazing";
adj2 = "fire";
shop0 = "engine";
shop1 = "food";
shop2 = "garment";
extra0 = "bros";
extra1 = "limited";
extra2 = "hub";

ranadj = Math.floor(Math.random() * 3)
ranshop = Math.floor(Math.random() * 3)
ranextra = Math.floor(Math.random() * 3)
if (ranadj == 0) {

    if (ranshop == 0) {
        if (ranextra == 0) {
            console.log(`${adj0}  ${shop0}  ${extra0}`)
        }
        else {
            if (ranextra == 1) {
                console.log(`${adj0}  ${shop0}  ${extra1}`)
            }
            else {
                console.log(`${adj0}  ${shop0}  ${extra2}`)
            }
        }
    }
    else {
        if (ranshop == 1) {
            if (ranextra == 0) {
                console.log(`${adj0}  ${shop1}  ${extra0}`)
            }
            else {
                if (ranextra == 1) {
                    console.log(`${adj0}  ${shop1}  ${extra1}`)
                }
                else {
                    console.log(`${adj0}  ${shop1}  ${extra2}`)
                }
            }
        }
        else {
            if (ranextra == 0) {
                console.log(`${adj0}  ${shop2}  ${extra0}`)
            }
            else {
                if (ranextra == 1) {
                    console.log(`${adj0}  ${shop2}  ${extra1}`)
                }
                else {
                    console.log(`${adj0}  ${shop2}  ${extra2}`)
                }
            }
        }
    }
}


else if (ranadj == 1) {
    if (ranshop == 0) {
        if (ranextra == 0) {
            console.log(`${adj1}  ${shop0}  ${extra0}`)
        }
        else {
            if (ranextra == 1) {
                console.log(`${adj1}  ${shop0}  ${extra1}`)
            }
            else {
                console.log(`${adj1}  ${shop0}  ${extra2}`)
            }
        }
    }
    else if (ranshop == 1) {
        if (ranextra == 0) {
            console.log(`${adj1}  ${shop1}  ${extra0}`)
        }
        else {
            if (ranextra == 1) {
                console.log(`${adj1}  ${shop1}  ${extra1}`)
            }
            else {
                console.log(`${adj1}  ${shop1}  ${extra2}`)
            }
        }
    }
    else {
        if (ranextra == 0) {
            console.log(`${adj1}  ${shop2}  ${extra0}`)
        }
        else {
            if (ranextra == 1) {
                console.log(`${adj1}  ${shop2}  ${extra1}`)
            }
            else {
                console.log(`${adj1}  ${shop2}  ${extra2}`)
            }
        }
    }

}
else{
    if (ranshop == 0) {
        if (ranextra == 0) {
            console.log(`${adj2}  ${shop0}  ${extra0}`)
        }
        else if (ranextra == 1) {
            console.log(`${adj2}  ${shop0}  ${extra1}`)
        }
        else {
            console.log(`${adj2}  ${shop0}  ${extra2}`)
        }
    }
    else {
        if (ranshop == 1) {
            if (ranextra == 0) {
                console.log(`${adj2}  ${shop1}  ${extra0}`)
            }
            else if (ranextra == 1) {
                console.log(`${adj2}  ${shop1}  ${extra1}`)
            }
            else {
                console.log(`${adj2}  ${shop1}  ${extra2}`)
            }
        }
        else {
            if (ranextra == 0) {
                console.log(`${adj2}  ${shop2}  ${extra0}`)
            }
            else if (ranextra == 1) {
                console.log(`${adj2}  ${shop2}  ${extra1}`)
            }
            else {
                console.log(`${adj2}  ${shop2}  ${extra2}`)
            }
        }
    }
}

