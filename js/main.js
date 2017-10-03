var lightSwitch = document.querySelector('.switch')
var statusText = document.querySelector('.status')
var body = document.querySelector('body')

lightSwitch.addEventListener('click', function(){
  if (lightSwitch.className === 'switch on'){
    lightSwitch.className = 'switch off';
    statusText.innerText = 'Hey, who turned off the lights?';
    body.className = 'dark';
  } else {
    lightSwitch.className = 'switch on';
    statusText.innerText = "It's so bright in here!";
    body.className = 'light';
  }
})
