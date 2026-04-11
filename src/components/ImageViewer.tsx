import { useEffect } from 'react';

interface ImageViewerProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
}

export const ImageViewer = ({ images, currentIndex, onClose }: ImageViewerProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        
        if (currentIndex !== -1) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [currentIndex, onClose]);

    if (currentIndex === -1) return null;

    return (
        <div className="image-viewer show" onClick={onClose}>
            <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
                <button className="image-viewer-close" onClick={onClose}>&times;</button>
                <img src={images[currentIndex]} alt="Просмотр" />
            </div>
        </div>
    );
};