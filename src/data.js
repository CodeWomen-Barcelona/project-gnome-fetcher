const URL =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

export const loadGnomes = async () =>
  fetch(URL).then((response) => response.json());
