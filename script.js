const greeting = document.getElementById('greeting');
const generate = document.getElementById('generate');
const activity = document.getElementById('activity');
const date = new Date();

let day;
switch (date.getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 4:
    day = 'Wednesday';
    break;
  case 5:
    day = 'Thursday';
    break;
  case 6:
    day = 'Friday';
    break;
  case 7:
    day = 'Saturday';
    break;
}
greeting.innerHTML = `Happy ${day}!`;

async function getActivity() {
  const api = 'http://www.boredapi.com/api/activity/';

  try {
    let response = await fetch(api);
    let data = await response.json();
    activity.innerHTML = data.activity;
  } catch (err) {
    console.log(err);
    activity.innerHTML = 'Let\'s start coding';
  }
  
  generate.innerHTML = 'Pick another activity';
}

generate.addEventListener('click', getActivity);

