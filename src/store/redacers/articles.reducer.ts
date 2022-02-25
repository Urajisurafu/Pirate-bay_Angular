import {
  Article,
  ArticlesActions,
  ArticlesUnion,
} from '../actions/articles.actions';

export interface State {
  articles: { [id: number]: Article };
  count: number;
}

const initialState: State = {
  articles: {},
  count: 0,
};

export function articlesReducer(
  state: State = initialState,
  action: ArticlesUnion
) {
  switch (action.type) {
    case ArticlesActions.LoadArticle:
      return {
        ...state,
        articles: {
          ...state.articles,
          [action.payload.article.id]: action.payload.article,
        },
      };
    case ArticlesActions.PublishArticle:
      return {
        ...state,
        articles: {
          ...{ ...state.articles[action.payload.id], published: true },
          ...state.articles,
        },
      };
    default:
      return state;
  }
}
