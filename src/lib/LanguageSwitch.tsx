import { useEffect, useMemo, useState } from 'react';
import { Flag, FlagCode, FlagProps } from 'react-flagpedia';

import styles from './LanguageSwitch.module.css';
import { LanguageSwitchDirection } from './types';
import { createDirectionalMovement } from './utils';

export type LanguageSwitchProps = {
    languages: FlagCode[];
    currentLanguage: FlagCode;
    direction?: LanguageSwitchDirection;
    flagsPerGroup?: number;

    width?: number;
    height?: number;
    gap?: number;

    flagProps?: FlagProps;

    onChange?: (languageCode: FlagCode) => void;
};

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
    languages,
    currentLanguage,
    direction = "down",
    flagsPerGroup,
    width = 40,
    height = 30,
    gap = 8,
    flagProps,
    onChange,
}) => {
    const [activeLanguage, setActiveLanguage] = useState<FlagCode>(currentLanguage);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (currentLanguage !== activeLanguage) {
            if (isOpen) {
                setIsOpen(false);
                setTimeout(() => setActiveLanguage(currentLanguage), 300);
            } else {
                setActiveLanguage(currentLanguage);
            }
        }
    }, [currentLanguage]);

    const getDirectionalMovement = useMemo(
        () =>
            createDirectionalMovement({
                width,
                height,
                gap,
                flagsPerGroup: flagsPerGroup || languages.length,
            })[direction],
        [width, height, gap, flagsPerGroup, direction],
    );

    return (
        <div className={styles.container}>
            <div className={styles.activeLanguage}>
                <Flag {...flagProps} code={activeLanguage} style={{ width, height }} onClick={toggleOpen} />
            </div>
            <div className={styles.otherLanguages}>
                {languages
                    .filter((lang) => lang !== activeLanguage)
                    .map((lang, index) => ({
                        code: lang,
                        ...getDirectionalMovement(index),
                    }))
                    .map((lang) => (
                        <Flag
                            {...flagProps}
                            code={lang.code}
                            style={{
                                width,
                                height,
                                ...(isOpen && {
                                    transform: `translate(${lang.dx}px, ${lang.dy}px)`,
                                }),
                                ...(lang.code === currentLanguage && {
                                    zIndex: 1001,
                                }),
                            }}
                            onClick={() => onChange?.(lang.code)}
                            key={lang.code}
                        />
                    ))}
            </div>
        </div>
    );
};

export default LanguageSwitch;
