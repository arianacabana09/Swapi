'use strict';

const render = (root) => {
  root.empty();
  root.append(createOptions(state.families));
}

const state = {
  families: null
};

$( _ => {
  getJSON('https://swapi.co/api/species/', (error, json) => {
    if (error) {
      return alert(error.message);
    }
    state.families = json.results;
    console.log(json.results);
    console.log(json.results[0].name);

    const root = $("#root");
    render(root);

  });
})
