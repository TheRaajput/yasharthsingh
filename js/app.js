$.scrollIt({
    topOffset: -50
});
// .............Home Section Animation................//
const TypeWriter = function(txtElement, words,wait=3000)
{
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function(){
    //Current Index of word
    const current = this.wordIndex % this.words.length;
    //Get Full Text
    const fulltxt = this.words[current];
    //Checj=k if deleting
    if (this.isDeleting) {
        //remove char
        this.txt = fulltxt.substring(0,this.txt.length-1);
    }
    else
    {
        // Add char
        this.txt = fulltxt.substring(0,this.txt.length+1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Type Speed
    let typeSpeed = 100;
    if (this.isDeleting) {
        typeSpeed /= 3;
    }
    
    //if word is complete

    if (!this.isDeleting && this.txt == fulltxt) {
        //Make pause at end
        typeSpeed = this.wait;
        //Set delete to true
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt == '') {
        this.isDeleting = false;
        //Move to next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;
    }
    setTimeout(()=>this.type(),typeSpeed)
}
// Init on DOM Load
document.addEventListener('DOMContentLoaded',init);

//INIT App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //INIT typewriter
    new TypeWriter(txtElement,words,wait)
}
//.............Home Section animation end.............//

//.............Work Section Animation..................//


