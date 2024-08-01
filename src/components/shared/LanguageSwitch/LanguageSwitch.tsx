import React from 'react';
import { useTranslation } from 'react-i18next';
import languageIcon from '../../../assets/images/svg/world-language.svg';

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    document.documentElement.lang = i18n.language;

    return (
        <div className='choose-lang'>
            {i18n.language === 'en' && <span
                onClick={() => {
                    //window.location.reload(),
                        window.scroll({
                            top: 0,
                            behavior: 'smooth',
                        }),
                        i18n.changeLanguage('ar')
                }}
            >
                عربي <img src={languageIcon} alt='logo' />
            </span>}

            {i18n.language === 'ar' && <span
                onClick={() => {
                    //window.location.reload(),
                        window.scroll({
                            top: 0,
                            behavior: 'smooth',
                        }),
                        i18n.changeLanguage('en')
                }}
            >
                english <img src={languageIcon} alt='logo' />
            </span>}
        </div>
    );
}

export default LanguageSwitch;
