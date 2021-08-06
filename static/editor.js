let plus_pos = 0;
let sch_count = 0;

showPannel(false);

window.onload = () => {
  // create saved schedule 
  //
  // let interval = setInterval(() => {
  //   sch_count++;
  //   createSch();
  //   if (sch_count === 5) {
  //     clearInterval(interval);
  //   }
  // }, 150);

  document.getElementById('add_btn').addEventListener('click', () => {
    document.getElementById('add_btn').style.setProperty('display', 'none');

    showPannel(true);
  });

  document.getElementById('add_pnl_btn').addEventListener('click', () => {
    document.getElementById('add_btn').style.setProperty('display', 'block');
      
    createSch();
    window.scrollBy(0, 270 + plus_pos);
  });

  window.addEventListener('resize', resizeHandler);

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
    document.getElementById('add_btn').style.setProperty('display', 'block');

    showPannel(false);
  });
}

//create schedule
function createSch() {
  var new_sch = document.createElement('div');
  new_sch.style.top = plus_pos + 'px';
  new_sch.className = 'schedule'

  var sch_title = document.createElement('h1');
  if (document.getElementById('add_pnl_title_input').value !== '') {
    sch_title.innerText = document.getElementById('add_pnl_title_input').value;
  }
  else {
    sch_title.innerText = 'Classto Schedule';
  }

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

  new_sch.append(sch_title);

  new_sch.append(t_vl1);
  new_sch.append(t_vl2);

  new_sch.append(title_i1);
  new_sch.append(title_i2);

  new_sch.append(time_i);
  new_sch.append(time);
  new_sch.append(m_vl1);
  new_sch.append(name_i);
  new_sch.append(name);
  new_sch.append(m_vl2);
  new_sch.append(id);
  new_sch.append(sch_hr);

  showPannel(false)
  document.getElementById('sch_div').append(new_sch);

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

//open or close schedule pannel
function showPannel(bool) {
  if (bool) {
    document.getElementById('add_pnl_link').style.setProperty('visibility', 'hidden');
    document.getElementById('add_pnl_link_input').style.setProperty('visibility', 'hidden');
    
    document.getElementById('pannel').style.display = "block";
  } else {
    document.getElementById('pannel').style.display = "none";
  }
}

//h1 tag of schedule's width limit
function resizeHandler(event) {
  const schedules = document.getElementsByClassName('schedule');
  for (let sch_num = 0; sch_num < schedules.length; sch_num++) {
    let schedule_title = schedules.item(sch_num).getElementsByTagName('h1').item(0)
    if (schedule_title.offsetWidth >= schedules.item(sch_num).clientWidth - 115) {
      schedule_title.innerText = schedule_title.innerText.slice(0, -6) + '...'
    }
  }
}
