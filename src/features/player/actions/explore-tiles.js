import getSurroundingTiles from '../../../utils/surrounding-tiles';

export default function exploreTiles(newPos) {
  return dispatch => {

    const { tiles, paddingTiles } = getSurroundingTiles(newPos);

    dispatch({
      type: 'EXPLORE_TILES',
      payload: {
        tiles,
        paddingTiles
      }
    });
  };
}