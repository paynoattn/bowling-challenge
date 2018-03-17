import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class LocalForageServiceStub {
  getItem(key: string) { return Observable.of({ foo: 'bar' }); }

  setItem(key: string, item) { return Observable.of(item); }

  removeItem(key: string) {
    return Observable.of();
  }
}
