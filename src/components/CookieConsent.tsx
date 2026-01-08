import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

interface CookieConsentProps {
    onPrivacyClick: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onPrivacyClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage for consent
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 w-full z-[9999] px-4 pb-4 md:pb-6"
                >
                    <div className="container-custom max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-neutral-100 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">

                            {/* Icon & Text */}
                            <div className="flex-1 flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-800 font-medium text-sm md:text-base leading-tight">
                                        Este site utiliza cookies
                                    </p>
                                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                                        Utilizamos cookies para personalizar sua experiência e analisar nosso tráfego.
                                        Ao continuar navegando, você concorda com nossa{' '}
                                        <button
                                            onClick={onPrivacyClick}
                                            className="text-primary hover:underline font-medium"
                                        >
                                            Política de Privacidade
                                        </button>.
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="w-full md:w-auto flex gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 md:flex-none bg-primary hover:bg-primaryDark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-primary/20 whitespace-nowrap"
                                >
                                    Aceitar e Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
