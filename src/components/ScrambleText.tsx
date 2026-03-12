import { useEffect, useState } from 'react';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#_';

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const ScrambleText = ({ text, className = '', delay = 0 }: ScrambleTextProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isScrambling, setIsScrambling] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        let intervalId: ReturnType<typeof setInterval>;

        const scramble = () => {
            setIsScrambling(true);
            let iteration = 0;

            intervalId = setInterval(() => {
                setDisplayText(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            if (char === ' ') return ' ';
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(intervalId);
                    setIsScrambling(false);
                }

                iteration += 1 / 3; // Controls speed of settling
            }, 30);
        };

        timeoutId = setTimeout(scramble, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, delay]);

    return (
        <span className={`${className} ${isScrambling ? 'terminal-cursor' : ''}`}>
            {displayText}
        </span>
    );
};

export default ScrambleText;
