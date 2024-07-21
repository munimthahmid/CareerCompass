function simulateMouseEvents(element, eventName) {
  const mouseEvent = document.createEvent("MouseEvents");
  mouseEvent.initEvent(eventName, true, true);
  element.dispatchEvent(mouseEvent);
}

// Schedule your message section starts here

const now = new Date();

// Replace Hours, Mins and secs with your
// desired time in 24 hour time format e.g.

// const rt =
//   new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate(),
//     Hours,
//     Minutes,
//     Sec,
//     0
//   ) - now;

// to send message at 2.30PM
const rt = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  "22:27:00"
);

setTimeout(startTimer, rt);

// Schedule your message section ends here

// Replace My Contact Name with the name
// of your WhatsApp contact or group e.g. title="Peter Parker"
const contactName = "Laboni";

simulateMouseEvents(
  document.querySelector('[title="' + contactName + '"]'),
  "mousedown"
);

function startTimer() {
  setTimeout(myFunc, 3000);
}

startTimer();

const eventFire = (MyElement, ElementType) => {
  const MyEvent = document.createEvent("MouseEvents");
  MyEvent.initMouseEvent(
    ElementType,
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  MyElement.dispatchEvent(MyEvent);
};

function myFunc() {
  const messageBox = document.querySelectorAll("[contenteditable='true']")[1];

  // Replace My Message with your message use
  // to add spaces to your message
  const message = "Hello";

  // Replace 5 with the number of times you
  // want to send your message
  const counter = 5;

  for (let i = 0; i < counter; i++) {
    const event = document.createEvent("UIEvents");
    messageBox.innerHTML = message.replace(/ /gm, ""); // test it
    event.initUIEvent("input", true, true, window, 1);
    messageBox.dispatchEvent(event);

    eventFire(document.querySelector('span[data-icon="send"]'), "click");
  }
}
