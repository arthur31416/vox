// flow

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/mapTo";
import { actionTypes } from "../actions";

const epic = (action$: Observable<Object>) =>
  action$
    .filter(action => action.type === actionTypes.ADD)
    .delay(1000)
    .mapTo({ type: actionTypes.PONG });

export default epic;
