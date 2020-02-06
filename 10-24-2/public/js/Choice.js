// import Interactable from "./Interactable.js"

/* Displays several choices and */

class Choice extends Interactable {

  constructor () {
    super();
    this.choices = new Array();
  }

  add_choice (text, id_linked_scene,change_story=false) {
    // text is what is displayed for this choice
    // id_linked_scene is the id of the scene which relates to this choice
    this.choices.push([text,id_linked_scene,change_story]);
  }

  // DISPLAY -------------------------------------------------------------------

  display () {

      noFill();
      for (let i = 0 ; i < this.choices.length ; i++) {
        rect( bm,           // top left x coordinate
              h-(i+1.5)*bh,       // top left y coordinate
              bw,                 // box width
              bh,                 // box height
              10                  // rounded corners
        );
        text( this.choices.get(i).get(0),    // text
              (w-bw)/1.9,         // x coordinate
              h-(i+1.4)*bh        // y coordinate
        );

      } // END FOR
  } // END DISPLAY

  // INTERACTION ---------------------------------------------------------------

  interact () {
    if (mouseX > bm && mouseX < (w-bm)) {
      let closest_choice = parseInt((h-mouseY)/(1.5*bh));
      if (mouseY-closest_choice*bh*1.5 > 0.5*bh) {
        return (this.choices.get(i).get(1)); // id of the next scene according to the choice
      } // END IF
    } // END IF
    return (-1);
  } // END INTERACTION


}
