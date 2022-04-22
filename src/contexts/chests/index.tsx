import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const ModalContext = React.createContext({
  totalPoke: 0,
  openedPokes: {
    total: 0,
    positions: []
  },
  updateOpenedPokes: (position) => null
});

function PokesProvider(props: IProps) {
  const [pokesState, updatePokesState] = React.useState({
    totalPoke: 1,
    openedPokes: {
      total: 0,
      positions: []
    },
    updateOpenedPokes: (position) => {
      updatePokesState((prevState) => {
        return {
          totalPoke: prevState.totalPoke,
          openedPokes: {
            total: prevState.openedPokes.total + 1,
            positions: prevState.openedPokes.positions.concat(position),
          },
          updateOpenedPokes: prevState.updateOpenedPokes,
        };
      })
    }
  });

  return (
    <ModalContext.Provider value={pokesState}>{props.children}</ModalContext.Provider>
  )
}

export default PokesProvider;