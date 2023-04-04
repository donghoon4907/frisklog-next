export const copyToClipboard = (textarea: HTMLTextAreaElement) => {
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(textarea.value || '')
            .then(() => alert('클립보드에 저장되었습니다.'))
            .catch(() => alert('클립보드에 저장 중 오류가 발생했습니다.'));
    } else {
        textarea.focus();

        textarea.select();

        try {
            document.execCommand('copy');

            alert('클립보드에 저장되었습니다.');
        } catch {
            alert('클립보드에 저장 중 오류가 발생했습니다.');
        }
    }
};
