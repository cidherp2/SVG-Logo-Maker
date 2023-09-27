const inquirer = require('inquirer');
const {Rectangle,Circle} = require ('./lib/shapes');
const fs = require('fs');


const init = () =>{
inquirer
    .prompt([
        {
            type:'list',
            name:'shape',
            message:'choose a shape',
            choices:['rectangle','circle','triangle'],
            default:'rectangle'
        },
        {
            type:'text',
            name:'fill',
            message:'choose the color of your logo'
        },
        {
            type:'text',
            name:'text',
            message:'Write the text inside your logo(up to 3 characters)'
        },
        
        {
            type:'text',
            name:'textColor',
            message:'Write the color of the text inside your logo'
        },

        {
            type:'text',
            name:'height',
            message:'Define the height of your logo',
            when:(answers) => answers.shape === "rectangle"
        },
        
        {
            type:'text',
            name:'width',
            message:'Define the width of your rectangle logo',
            when:(answers) => answers.shape === "rectangle"
        },
        
    ])
    .then((data) =>{
        switch(`${data.shape}`){
            case 'rectangle':
            console.log('creating rectangular logo');
            const rect = new Rectangle (data.fill,data.height,data.width,data.text,data.textColor);
            console.log("esto es " + typeof rect);
            fs.writeFile('./examples/logo.svg', rect.renderRectangle(),(err) =>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Your rectangular logo is ready!')
                }
            });
            break;

            case 'circle':
                console.log('Creating circular logo ')
            const circ = new Circle (data.fill,data.text,data.textColor,data.radius);
            fs.writeFile('./examples/logo.svg',circ.renderCircle(),(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Your circular logo is ready')
                }
            } )
        }
    });

}

init();