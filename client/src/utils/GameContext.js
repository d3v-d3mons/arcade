import React, { useState } from 'react';

export const GameContext = React.createContext();

const GameProvider = ({ children }) => {
    const [currentGame, setCurrentGame] = useState({ _id: ""})

    return(
        <GameContext.Provider value={[currentGame, setCurrentGame]}>{children}</GameContext.Provider>
    );
};

export default GameProvider;