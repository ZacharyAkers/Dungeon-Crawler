export default function closeLevelUpDialog() {
    return (dispatch, getState) => {
      const { chest } = getState().dialog;
      dispatch({
        type: 'PAUSE',
        payload: {
          pause: chest,
          chest
        }
      });
    };
  }