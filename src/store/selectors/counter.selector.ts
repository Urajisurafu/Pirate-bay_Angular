const selectArticles = (state: State) => state.articles;

export const selectArticlesList = createSelector(
  selectArticles,
  (state: ArticlesState) => state.list
);

export const selectArticlesByUser = createSelector(
  selectArticlesList,
  (articles, props) => {
    return articles.filter((item) => item.user_id === props.user_id);
  }
);
