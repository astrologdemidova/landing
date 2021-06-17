import React from "react";

export const FortunaTextWinner = ({ typePrize }) => {
    if (!typePrize) return null;

    if (typePrize !== '2000 RUB') {
        return (
            <div style={{display: 'block', width: '100%', textAlign: 'center'}}>
                <p>Ура! Поздравляю! Супер призз</p>
            </div>
        )
    };

    return (
        <>
            <p>Ура! Поздравляю</p>
        </>
    )
}