let BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

window.TrelloPowerUp.initialize(
  { "show-settings": function(t){
    return t.popup({
      title:'goodbeast settings',
      url:'settings.html'
    })
  },
    "board-buttons": function (t) {
      var context = t.getContext();
      var boardId = context['board']
      return [
        {
          icon: BLACK_ROCKET_ICON,
          text: "Goodbeast G-sheet export",
          callback: function (t) {
            return t.popup({
              title:'integrator',
              url:'data.html'
            })
          },
        },
      ];
    },
  },
  {
    appKey: "d78e506dac377b3f018c928740480038",
    appName: "Goodbeast G-sheet export",
  }
);

