import './index.css';

import { FC, useState } from 'react';
import { FlagCode } from 'react-flagpedia';

import { LanguageSwitch, LanguageSwitchDirection } from '@/lib';

const directions: LanguageSwitchDirection[] = [
    "down",
    "up",
    "right",
    "left",
    "down-left",
    "down-right",
    "up-left",
    "up-right",
    "left-down",
    "left-up",
    "right-down",
    "right-up",
];

const App: FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState<FlagCode>("gr");
    const [direction, setDirection] = useState<LanguageSwitchDirection>("down-left");
    const [flagsPerGroup, setFlagsPerGroup] = useState<number>(5);

    return (
        <div className="App">
            <div className="options">
                <h4>Direction</h4>
                <div className="directions">
                    {directions.map((dir) => (
                        <button onClick={() => setDirection(dir)}>{dir}</button>
                    ))}
                </div>
                <h4>Flags Per Group</h4>
                <div className="directions">
                    {[...new Array(10)].map((_, n) => (
                        <button onClick={() => setFlagsPerGroup(n)}>{n}</button>
                    ))}
                </div>
            </div>
            <div className="content">
                <LanguageSwitch
                    languages={["gr", "us", "es", "fr", "de", "pt", "it"]}
                    currentLanguage={currentLanguage}
                    direction={direction}
                    flagsPerGroup={flagsPerGroup}
                    onChange={setCurrentLanguage}
                />
            </div>
        </div>
    );
};

export default App;
