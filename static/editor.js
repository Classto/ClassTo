var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var top_pos = 0;

function changeIcon() {
    let icon = document.getElementById('m_get_bell_icon');
    
    if (icon.className === 'far fa-bell') {
      icon.className = 'far fa-bell-slash';
    } else {
      icon.className = 'far fa-bell';
    }
  }
  