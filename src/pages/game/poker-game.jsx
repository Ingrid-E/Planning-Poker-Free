import { PokerTable, Player, PokerCard} from '../../components';

function PokerGame() {
  return (
    <div className="poker-game">
      <h1>Game Table</h1>
      <Player></Player>
      <PokerTable></PokerTable>
      <PokerCard></PokerCard>
    </div>
  );
}

export default PokerGame;