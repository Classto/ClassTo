var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var top_pos = 0;

window.onload = () => {
  const spl = document.location.href.split('/');
  if (spl[spl.length - 1] === 'editor.html') {
    const today = new Date();
    let i = 0;
    document.getElementById('e_date').innerText = months[today.getMonth()] + ' ' + today.getDate() + '. ' + today.getFullYear();
      
    for (i = 0; i < 14; i++) {
      var sample = document.createElement('button');
      var sample_text = document.createElement('p');
      var sample_hr = document.createElement('hr');

      sample_text.innerText = 'Title';
      sample_hr.id = 'sample_hr';

      var len = sample_text.innerHTML.length;

      if(len <= 18) {
        sample_text.style.setProperty('font-size', '3.5vh');
      } else {
        sample_text.style.setProperty('font-size', 70 / len + 'vh');
      }
      sample_text.style.setProperty('color', '#53555c');
      sample_text.style.setProperty('font-family', '\'Barlow\', sans-serif');
      sample_text.style.setProperty('font-weight', 'bold');

      sample_text.style.setProperty('position', 'absolute');
      sample_text.style.setProperty('text-align', 'center');
      sample_text.style.setProperty('width', '20vw');
      sample_text.style.setProperty('height', '5vh');
      sample_text.style.setProperty('bottom', '7vh');
      sample_text.style.setProperty('left', '49%');
      sample_text.style.setProperty('transform', 'translateX(-50%)');
      sample_text.style.setProperty('background-color', 'rgba(0, 0, 0, 0)');
      
      sample.style.setProperty('transition', 'all 150ms linear')
      sample.style.setProperty('background-color', '#FEFEFE');
      sample.style.setProperty('box-shadow', '0px 4px 25px #327DFF45');
      sample.style.setProperty('position', 'absolute');
      sample.style.setProperty('height', '18vh');
      sample.style.setProperty('top', top_pos + 'vh');
      sample.style.setProperty('border-radius', '1.5vw');
      sample.style.setProperty('border', 'none');

      if (i%3 === 0) {
        sample.style.setProperty('width', '25%');
        sample.style.setProperty('margin-left', '9%');
      } else if (i%3 === 1) {
        sample.style.setProperty('width', '25%');
        sample.style.setProperty('margin-left', '37.5%');
      } else {
        sample.style.setProperty('width', '25%');
        sample.style.setProperty('margin-left', '66%');
        top_pos += 22;
      }

      document.getElementById('e_schs').appendChild(sample);
      sample.appendChild(sample_text);
      sample.appendChild(sample_hr);
      document.getElementById('e_schs').style.setProperty('height', i * 9.25 - 3 + 'vh');
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
