import React from 'react';
import { GameList } from '../game-list';
import { SearchBar } from '../search-bar';
import { Game } from '../../App';

type Props = {
  games: Game[];
};

export const FilterableGameList = ({ games }: Props) => {

  const [val, setVal] = React.useState('');
  const [fav, setFav] = React.useState(false)

  const favGames = games.filter((obj) => obj.inWishList === true);

  const filteredGames = (fav ? favGames : games).filter((obj) => {
    if (obj.name.toLowerCase().includes(val.toLowerCase())) return true;
    return false;
  });

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <SearchBar val={val} setVal={setVal} setFav={setFav}/>
        <GameList games={filteredGames} />
      </div>
    </>
  );
};
