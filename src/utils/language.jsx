export const determineLanguage = (data) => {
    const { spanish, english } = data.portfolioLanguages;
    //console.log(data);
    if (spanish && english) {
        return 'es';
    } else if (!spanish && english) {
        return 'en';
    } else if (spanish && !english) {
        return 'es';
    } else {
        throw new Error('Both Spanish and English are false.');
    }
};