dodger.style.backgroundColor = "#ff5bab";


document.addEventListener('keydown', function(e) {
      if (e.which === 37) {
        moveDodgerLeft()
      }
      if (e.which === 39) { 
        moveDodgerRight()
      }
      if (e.which === 38){
        moveDodgerTop()
      }
  }
)


function moveDodgerLeft() {

    var leftNumbers =
dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
      
    }
  
}


function moveDodgerRight() {
  
    var leftNumbers =
dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
}

function moveDodgerTop() {
  
    var topNumbers =
dodger.style.top.replace('px', '')
    var left = parseInt(topNumbers, 10)
 

  
}

