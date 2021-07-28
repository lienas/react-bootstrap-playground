const Star = ({marked, starId}) => {
    return (
        <span data-star-id={starId} className="star fs-3" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
    );
};

export default Star;
