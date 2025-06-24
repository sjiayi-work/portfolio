import { useEffect, useState } from 'react';

interface TypingEffectProp {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
}

const TypingEffect = ({ typingSpeed = 80, deletingSpeed = 50, delayBetweenWords = 2000, words }: TypingEffectProp) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentWord = words[currentIndex % words.length];
        
        const handleTyping = () => {
            if (isDeleting) {
                // Deleting logic
                setCurrentText((prev) => prev.substring(0, prev.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => prev + 1); // Move to the next word
                }
            } else {
                // Typing logic
                setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
                if (currentText === currentWord) {
                    // Wait before deleting
                    setTimeout(() => setIsDeleting(true), delayBetweenWords);
                }
            }
        };
        
        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout); // Cleanup timeout
        
    }, [currentText, isDeleting, currentIndex, typingSpeed, deletingSpeed, delayBetweenWords, words]);
    
    // Use a non-breaking space as a placeholder when the text is empty, so UI won't be jumpy
    const displayText = currentText || '\u00A0';
    
    return <span>{ displayText }</span>;
};

export default TypingEffect;