import _ from "lodash";

const someId = _.padStart(10, 6, "0");

const html = `
<div>    some   text


    ${someId}  </div>


      `;

console.log(html);
