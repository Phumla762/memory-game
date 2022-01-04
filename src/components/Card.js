import React from 'react';
import { images } from './Images/index';

class Card extends React.Component{
    characters = [];
      // created charcters array to store the character attribute(of the images).
      // at the event that a character is selected or clicked should return found and/or check. 
    handleClick = (event) => {
        let character = event.target;
        if(character.getAttribute("check") === "found"){
            return;
        } 
// if the selected image does not equal in value or quality then teh image should not display as a match or be stored in array of characters as a match.
        if ( character !== this.characters[0]){
            this.change(character);
            this.characters.push(character);
        } else {
            this.change(character);
            this.characters = [];
        }

        //if the selected items/images are found then they should be displayed.
        //they are displayed using the shift() method to remove a set in the array that isnt correctly matching. so if character1 and character2 arent matchign then shift out of array as they dont match.
        // aka if the attrributes dont match then it's taken out of the array.
        if (this.characters.length > 2){
            if (!this.checkName(this.characters[0], this.characters[1])){
                this.change(this.characters[0]);
                this.change(this.characters[1]);
                this.characters.shift();
                this.characters.shift();
            } else{
                this.characters.shift();
                this.characters.shift();
            }
        }

        // all the pictures in with the class name "image-blank are to be accessed. then be reset if still not matched up coz theyre incorrectly matched or dont have the attributes.
        let allPics = document.getElementsByClassName("image-blank");
        if(allPics.length < 1) {
            this.props.endGame(true);
            let reset = document.getElementsByClassName("image");
            for (let i=0; i < reset.length; i++) {
                reset[i].classList.add("image-blank");
                reset[i].setAttribute("check", "false");
                this.characters = [];
            }
        }
    }
    // the checName function calls that the first selected "image/character" and the second selected one have attributes that are to return true and display the attribute with "name" as it is an identifier.
    // the two characters are to be found true and show that the attribute exists.
    checkName = (character1, character2) => {
        if(character1.getAttribute("name") === character2.getAttribute("name")){
            character1.setAttribute("check", "found");
            character2.setAttribute("check", "found");
            return true;
        }
        return false;
    }

// created a function called change to be the target. This targets to check if the set attribute is found or not in the specified class too.
    change = (target) => {
        if(target.getAttribute("check") === "true"){
            target.setAttribute("check", "false");
            target.classList.add("image-blank");
        } else {
            target.setAttribute("check", "found");
            target.classList.remove("image-blank");
        }
    };
    render(){
        return (
            <div className="images">
            {images 
            .sort(()=> Math.random() - 0.5)
            .map((element) => {
                return (
                    <div className="image-blank"
                    style={{background:`url(${element.pic})`, width:"120px", height:"120px"}}
                    key="front"
                    onClick={this.handleClick}
                     />
                     );
                     })}
            </div>
        );
    }
}

export default Card;