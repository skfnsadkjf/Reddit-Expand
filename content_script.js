let expanders = document.querySelectorAll( ".expando-button" );
let i = 0;
function grimClick( e ) {
  if ( !e.target.classList.contains( "expando-button" ) ) {
    if ( i < expanders.length ) {
    	expanders[i].click();
    }
    let twoLess = i - 2;
    if ( twoLess >= 0 ) {
      let elem = expanders[twoLess];
      elem.click();
      elem.scrollIntoView();
    }
    i++;
    console.log( i );
  }
}
document.addEventListener( "click" , grimClick );