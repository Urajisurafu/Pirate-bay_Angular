import { Component, OnInit, DoCheck } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/actions/counter.actions';
import { LoadArticle, PublishArticle } from '../store/actions/articles.actions';
import { DeleteUsers, LoadUser } from '../store/actions/users.actions';
import {
  selectCountSum,
  selectUsersAll,
} from '../store/selectors/users.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {
    // this.store.subscribe((state) => console.log(state));

    this.store.pipe(select(selectCountSum)).subscribe((vl) => console.log(vl));
    this.store.pipe(select(selectUsersAll)).subscribe((vl) => console.log(vl));

    this.store.dispatch(
      new LoadArticle({
        article: {
          id: 1,
          title: 'Learn NgRx',
          published: false,
        },
      })
    );

    this.store.dispatch(
      new LoadArticle({
        article: {
          id: 2,
          title: 'JS',
          published: false,
        },
      })
    );

    this.store.dispatch(new PublishArticle({ id: 1 }));
    // this.store.dispatch(new PublishArticle({ id: 2 }));
  }

  addUser() {
    this.store.dispatch(
      new LoadUser({ user: { id: 1, name: 'Name', email: 'E-mail' } })
    );
  }

  removeUsers() {
    this.store.dispatch(new DeleteUsers());
  }

  // count$: Observable<number>;
  //
  // constructor(private store: Store<{ count: number }>) {
  //   this.count$ = store.select('count');
  // }
  //
  // increment() {
  //   this.store.dispatch(increment());
  // }
  //
  // decrement() {
  //   this.store.dispatch(decrement());
  // }
  //
  // reset() {
  //   this.store.dispatch(reset());
  // }
}
