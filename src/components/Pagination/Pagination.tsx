import style from "./Pagination.module.scss";

export const Pagination = () => {
  return (
    <div className={style.pagination}>
      <button>iconleft</button>
      <p>Number</p>
      <button>iconRight</button>
    </div>
  );
};
