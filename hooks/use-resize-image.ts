import { RefObject, useState, useEffect } from 'react';

export const useResizeImage = (wrapperRef: RefObject<HTMLDivElement>) => {
    // 이미지 로딩 여부
    const [ready, setReady] = useState<boolean>(true);

    useEffect(() => {
        const imgs = wrapperRef?.current?.querySelectorAll('img');
        // 이미지가 없는 게시물인 경우
        if (imgs?.length === 0) {
            setReady(false);
        }
        // 이미지 리사이징
        imgs?.forEach((img, idx) => {
            const obj = new Image();

            obj.src = img.src;

            obj.addEventListener('load', function () {
                const width = this.width;

                const height = this.height;

                const wrapper = img.parentNode as ParentNode;

                wrapper?.classList.add('fr-thumbnail');

                wrapper?.style.paddingBottom = `calc(${height / width} * 100%)`;

                img.classList.add('fr-thumbnail__image');

                if (idx === imgs.length - 1) {
                    setReady(false);
                }
            });
        });
    }, []);

    return [ready];
};
