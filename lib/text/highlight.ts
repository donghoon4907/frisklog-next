/**
 * Like 검색 하이라이팅 처리
 *
 * @param keyword Like 검색 키워드
 * @param target 작업 대상
 */
export const convertAllToLike = (keyword: string, target: string) => {
    let output = target;

    const likeRegex = new RegExp(keyword, 'gi');
    // 중복 제거된 작업 대상 키워드
    const matched = new Set(target.match(likeRegex));

    for (let item of matched) {
        const regex = new RegExp(item, 'g');
        // 하이라이팅 대상 키워드를 모두 찾아 적용
        output = output.replace(
            regex,
            `<span class='highlight'>${item}</span>`,
        );
    }

    return output;
};
