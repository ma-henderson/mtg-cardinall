import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestSearchCards } from "../store/search/actions";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchResults() {
  // REDUX HOOKS
  // =====> SELECTORS
  const { searchCards, isFetching } = useSelector((s) => s.search);
  console.log(searchCards);
  console.log(isFetching);

  // =====> ACTIONS
  const dispatch = useDispatch();
  const dispatchSearchCards = useCallback((searchString) =>
    dispatch(requestSearchCards(searchString), [dispatch])
  );

  // Component Logic
  const [searchParam, setSearchParam] = useState("");
  const handleSearchChange = (e) => {
    setSearchParam(e);
  };

  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: "#eee",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={()=>dispatchSearchCards(searchParam)}
      >
        search
      </Button>
      <h3>the cards: </h3>
      {searchCards.length > 0 && searchCards.map((card) => <p>{card.name}</p>)}
    </div>
  );
}
