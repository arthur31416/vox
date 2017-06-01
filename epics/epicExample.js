// flow

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

console.log("00000000000");
export default (action$: Observable<Object>) =>
  action$
    // .filter(action => action.type === "ADD")
    .map(n => `Observable: ${n}`)
    .action$.map(x => {
      console.log("x-----");
      debugger;
      return x;
    });
// .subscribe(x => console.log("-----------", x));
