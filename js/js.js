console.log("lets see if this remains in your code");



const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

// scales the whole poster

function scalePoster() {
  const posterStage = document.querySelector(".poster-stage");
  const posterWindow = document.querySelector(".poster-window");

  if (!posterStage || !posterWindow) return;

  const scale = Math.min(
    window.innerWidth / DESIGN_WIDTH,
    window.innerHeight / DESIGN_HEIGHT
  );

  const scaledWidth = DESIGN_WIDTH * scale;
  const scaledHeight = DESIGN_HEIGHT * scale;

  posterStage.style.width = `${scaledWidth}px`;
  posterStage.style.height = `${scaledHeight}px`;

  posterWindow.style.transform = `scale(${scale})`;
}

window.addEventListener("load", scalePoster);
window.addEventListener("resize", scalePoster);

$(document).ready(function () {

  // hides the screens that are not active
  
  $(".screen").not(".active").hide();
  $(".screen.active").show();

  // fades screens after clikc

  function showScreen(screenId) {
    const $currentScreen = $(".screen.active");
    const $nextScreen = $(screenId);

    if ($currentScreen[0] === $nextScreen[0]) return;

    $currentScreen.stop(true, true).fadeOut(55, function () {
      $currentScreen.removeClass("active");
      $nextScreen.addClass("active").hide().fadeIn(55);
    });
  }

  // closes any open popup and brings labels/exits back

  function closeAllPopups() {
    $(".info-popup").hide();
    $(".room-exit").show();
    $(".room-label").show();
  }

  // opens popup and hides room stuff

  function openPopup(popupId, exitClass, labelClass) {
    $(exitClass).hide();
    $(labelClass).hide();
    $(popupId).fadeIn(110);
  }

  // closes popup and brings room stuff back

  function closePopup(popupId, exitClass, labelClass) {
    $(popupId).fadeOut(110, function () {
      $(exitClass).show();
      $(labelClass).show();
    });
  }

  // start to hallway

  $("#enter-hallway").on("click", function () {
    closeAllPopups();
    showScreen("#hallway-screen");
  });

  // hallway back to start

  $("#hallway-exit").on("click", function () {
    closeAllPopups();
    showScreen("#start-screen");
  });

  // hallway to rooms

  $("#go-vanessa-room").on("click", function () {
    closeAllPopups();
    showScreen("#vanessa-room");
  });

  $("#go-kelsey-room").on("click", function () {
    closeAllPopups();
    showScreen("#kelsey-room");
  });

  $("#go-anna-room").on("click", function () {
    closeAllPopups();
    showScreen("#anna-room");
  });

  // room exits back to hallway

  $(".vanessa-room-exit").on("click", function () {
    closeAllPopups();
    showScreen("#hallway-screen");
  });

  $(".kelsey-room-exit").on("click", function () {
    closeAllPopups();
    showScreen("#hallway-screen");
  });

  $(".anna-room-exit").on("click", function () {
    closeAllPopups();
    showScreen("#hallway-screen");
  });

  // vanessa popup

  $("#open-vanessa-popup").on("click", function () {
    openPopup("#vanessa-popup", ".vanessa-room-exit", ".vanessa-room-label");
  });

  $("#vanessa-popup .close-popup").on("click", function () {
    closePopup("#vanessa-popup", ".vanessa-room-exit", ".vanessa-room-label");
  });

  // kelsey popup

  $("#open-kelsey-popup").on("click", function () {
    openPopup("#kelsey-popup", ".kelsey-room-exit", ".kelsey-room-label");
  });

  $("#kelsey-popup .close-popup").on("click", function () {
    closePopup("#kelsey-popup", ".kelsey-room-exit", ".kelsey-room-label");
  });

  // anna popup

  $("#open-anna-popup").on("click", function () {
    openPopup("#anna-popup", ".anna-room-exit", ".anna-room-label");
  });

  $("#anna-popup .close-popup").on("click", function () {
    closePopup("#anna-popup", ".anna-room-exit", ".anna-room-label");
  });
});