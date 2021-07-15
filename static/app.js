var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var top_pos = 0;

window.onload = () => {
  const spl = document.location.href.split('/');
  if (spl[spl.length - 1] === 'editor.html') {
    const today = new Date();
    document.getElementById('e_date').innerText = months[today.getMonth()] + ' ' + today.getDate() + '. ' + today.getFullYear();
      
    for (let i = 0; i < 5; i++) {
      var sample = document.createElement('div');
      sample.style.setProperty('background-color', 'red');
      sample.style.setProperty('position', 'absolute');
      sample.style.setProperty('width', '100%');
      sample.style.setProperty('height', '50px');
      sample.style.setProperty('top', top_pos + 'vh');

      if (i%2 === 0) {
        sample.style.setProperty('background-color', 'blue');
        sample.style.setProperty('width', '50%');
      } else {
        sample.style.setProperty('background-color', 'red');
        sample.style.setProperty('margin-left', '50%');
        top_pos += 10;
      }

      document.getElementById('e_schs').appendChild(sample);
    }
  } else {
    document.getElementById('m_title').opacity = 0;
    document.getElementById('m_icon_div').opacity = 0;
    document.getElementById('m_get_github').opacity = 0;
    document.getElementById('m_get_start').opacity = 0;
    document.getElementById('copyright').opacity = 0;
    document.getElementById('m_get_bell').opacity = 0;
  }
}

function changeIcon() {
  let icon = document.getElementById('m_get_bell_icon');
  
  if (icon.className === 'far fa-bell') {
    icon.className = 'far fa-bell-slash';
  } else {
    icon.className = 'far fa-bell';
  }
}
