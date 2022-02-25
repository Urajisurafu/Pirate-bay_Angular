import { Action } from '@ngrx/store';

export enum ArticlesActions {
  LoadArticle = '[Articles Page] LoadArticle',
  PublishArticle = '[Articles Page] PublishArticle',
}

export interface Article {
  id: number;
  title: string;
  published: boolean;
}

export class LoadArticle implements Action {
  readonly type = ArticlesActions.LoadArticle;

  constructor(public payload: { article: Article }) {}
}

export class PublishArticle implements Action {
  readonly type = ArticlesActions.PublishArticle;

  constructor(public payload: { id: number }) {}
}

export type ArticlesUnion = LoadArticle | PublishArticle;
