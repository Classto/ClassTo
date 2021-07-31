let plus_pos = 0;
let sch_count = 0;

window.onload = () => {
  // let interval = setInterval(() => {
  //   sch_count++;
  //   createSch();
  //   if (sch_count === 5) {
  //     clearInterval(interval);
  //   }
  // }, 150);

  document.getElementById('add_btn_plus').style.setProperty('opacity', '1');
  document.getElementById('add_btn_submit').style.setProperty('opacity', '0');

  document.getElementById('add_btn').addEventListener('click', () => {
    if (document.getElementById('add_btn_plus').style.opacity === '1') {
      document.getElementById('add_btn_plus').style.setProperty('opacity', '0');
      document.getElementById('add_btn_submit').style.setProperty('opacity', '1');

      openPnl();
    } else {
      document.getElementById('add_btn_plus').style.setProperty('opacity', '1');
      document.getElementById('add_btn_submit').style.setProperty('opacity', '0');
      
      createSch();
      window.scrollBy(0, 270 + plus_pos);
    }
  });

  document.getElementById('add_pnl_type_input').addEventListener('change', (event) => {
    if (event.target.value === 'link') {
      document.getElementById('add_pnl_id').style.setProperty('visibility', 'hidden');
      document.getElementById('add_pnl_id_input').style.setProperty('visibility', 'hidden');
      document.getElementById('add_pnl_pw').style.setProperty('visibility', 'hidden');
      document.getElementById('add_pnl_pw_input').style.setProperty('visibility', 'hidden');

      document.getElementById('add_pnl_link').style.setProperty('visibility', 'visible');
      document.getElementById('add_pnl_link_input').style.setProperty('visibility', 'visible');
    } else {
      document.getElementById('add_pnl_id').style.setProperty('visibility', 'visible');
      document.getElementById('add_pnl_id_input').style.setProperty('visibility', 'visible');
      document.getElementById('add_pnl_pw').style.setProperty('visibility', 'visible');
      document.getElementById('add_pnl_pw_input').style.setProperty('visibility', 'visible');

      document.getElementById('add_pnl_link').style.setProperty('visibility', 'hidden');
      document.getElementById('add_pnl_link_input').style.setProperty('visibility', 'hidden');
    }
  });

  document.getElementById('add_pnl_header_i').addEventListener('click', () => {
    document.getElementById('add_btn_plus').style.setProperty('opacity', '1');
    document.getElementById('add_btn_submit').style.setProperty('opacity', '0');
    addPnlVisibility(1);
  });
}

function changeIcon() {
  let icon = document.getElementById('m_get_bell_icon');
    
  if (icon.className === 'far fa-bell') {
    icon.className = 'far fa-bell-slash';
  } else {
    icon.className = 'far fa-bell';
  }
}

function createSch() {
  var sch_div = document.createElement('div');
  sch_div.style.top = plus_pos + 'px';

  var sch_title = document.createElement('h1');
  sch_title.innerText = document.getElementById('add_pnl_title_input').value;

  var t_vl1 = document.createElement('div');
  var t_vl2 = document.createElement('div');
  t_vl1.id = 't_vl1';
  t_vl2.id = 't_vl2';

  var title_i1 = document.createElement('i');
  var title_i2 = document.createElement('i');
  title_i1.id = 'title_i1';
  title_i2.id = 'title_i2';
  title_i1.className = 'fas fa-edit';
  title_i2.className = 'fas fa-external-link-alt';

  var time_i = document.createElement('i');
  time_i.id = 'time_i';
  time_i.className = 'fas fa-clock';
  var time = document.createElement('span');
  time.id = 'time';
  time.innerText = document.getElementById('add_pnl_time_input').value;

  var m_vl1 = document.createElement('div');
  m_vl1.id = 'm_vl1';
  var name_i = document.createElement('i');
  name_i.id = 'name_i';
  name_i.className = 'fas fa-id-badge';
  var name = document.createElement('span');
  name.id = 'name';
  name.innerText = document.getElementById('add_pnl_nickname_input').value;
  var m_vl2 = document.createElement('div');
  m_vl2.id = 'm_vl2';
  var id = document.createElement('span');
  id.id = 'id';
  id.innerText = document.getElementById('add_pnl_id_input').value;

  var sch_hr = document.createElement('hr');

  document.getElementById('sch_div').style.setProperty('height', 270 + plus_pos + 'px');

  sch_div.append(sch_title);

  sch_div.append(t_vl1);
  sch_div.append(t_vl2);

  sch_div.append(title_i1);
  sch_div.append(title_i2);

  sch_div.append(time_i);
  sch_div.append(time);
  sch_div.append(m_vl1);
  sch_div.append(name_i);
  sch_div.append(name);
  sch_div.append(m_vl2);
  sch_div.append(id);
  sch_div.append(sch_hr);

  addPnlVisibility(1);
  document.getElementById('sch_div').append(sch_div);

  m_vl1.style.setProperty('left', parseInt(time.clientWidth + 1 ,10) + 38 + 'px');
  name_i.style.setProperty('left', parseInt(time.clientWidth + 1 ,10) + 54 + 'px');
  name.style.setProperty('left', parseInt(time.clientWidth + 1 ,10) + 80 + 'px');
  m_vl2.style.setProperty('left', parseInt(name.clientWidth + 1 ,10) + parseInt(time.clientWidth + 1 ,10) + 90 + 'px');
  id.style.setProperty('left', parseInt(name.clientWidth + 1 ,10) + parseInt(time.clientWidth + 1 ,10) + 103 + 'px');

  plus_pos += 126;
}

function openPnl() {
  addPnlVisibility(0);
  document.getElementById('add_pnl_link').style.setProperty('visibility', 'hidden');
  document.getElementById('add_pnl_link_input').style.setProperty('visibility', 'hidden');
}

function addPnlVisibility(type) {
  switch (type) {
    //0 : pnl open, 1 : pnl close(submit)
    case 0:
      document.getElementById('add_pnl_background').style.setProperty('display', 'inline');
      document.getElementById('add_pnl').style.setProperty('display', 'inline');
      document.getElementById('add_pnl_background').style.setProperty('opacity', '1');
      document.getElementById('add_pnl').style.setProperty('opacity', '1');
      break;
    case 1:
      let add_pnl_anim = document.getElementById('add_pnl').addEventListener('animationend', setDisplay(document.getElementById('add_pnl')));
      let add_pnl_bg_anim = document.getElementById('add_pnl_background').addEventListener('animationend', setDisplay(document.getElementById('add_pnl_background')));
      document.getElementById('add_pnl').style.setProperty('opacity', '0');
      document.getElementById('add_pnl_background').style.setProperty('opacity', '0');

      document.getElementById('add_pnl').removeEventListener('animationend', add_pnl_anim);
      document.getElementById('add_pnl_background').removeEventListener('animationend', add_pnl_bg_anim);
      break;
  }
}

function setDisplay(obj) {
  obj.style.setProperty('display', 'none');
}
