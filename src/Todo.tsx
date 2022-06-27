export const Todo = (props) => {
  const { title, userid } = props;
  return <p key={userid}>{`${title}(ユーザーid:${userid})`}</p>;
};
