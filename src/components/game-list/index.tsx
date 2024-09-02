import React from 'react';
import { GameRow } from '../game-row';
import { Game } from '../../App';

type Props = {
  games: Game[];
};

export const GameList = ({ games }: Props) => {
  const cat: string[] = [];

  return (
    <>
      <ul className="list-none">
        <li className="flex flex-col gap-4 items-center sm:items-start">
          {games.map((game, i) => {
            const isCategoryDisplayed = cat.includes(game.category);
            if (!isCategoryDisplayed) cat.push(game.category);
            return (
              <React.Fragment key={i}>
                <GameRow {...(isCategoryDisplayed ? { ...game, category: '' } : game)} />
              </React.Fragment>
            );
          })}
        </li>
      </ul>
    </>
  );
};
