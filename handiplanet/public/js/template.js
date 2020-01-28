/*
 * File Created: 2020-01-28 09:49:32
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
function loadTemplate(name, target) {
  fetch(`/handiplanet/views/${name}/${name}.html`).then((res) => {
    return res.text();
  }).then((html) => {
    target.innerHTML = html;
  }).catch((err) => {
    console.error(err);
  })
}