let plus_pos = 0;

window.onload = function() {

  for(let count = 0; count < 5; count++) {
    createSch();
    plus_pos += 126;
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

function createSch() {
  var sch_div = document.createElement('div');
  sch_div.style.top = plus_pos + 'px';

  var sch_title = document.createElement('h1');
  sch_title.innerText = "테스트용 임시 스캐줄!"

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
  var time = document.createElement('p');
  time.id = 'time';
  time.innerText = '11:50 PM';

  var m_vl1 = document.createElement('div');
  m_vl1.id = 'm_vl1';
  var name_i = document.createElement('i');
  name_i.id = 'name_i';
  name_i.className = 'fas fa-id-badge';
  var name = document.createElement('p');
  name.id = 'name';
  name.innerText = '닉네임';
  var m_vl2 = document.createElement('div');
  m_vl2.id = 'm_vl2';
  var id = document.createElement('p');
  id.id = 'id';
  id.innerText = '111 1111 1111';

  var sch_hr = document.createElement('hr');

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

  document.getElementById('sch_div').append(sch_div);
}
