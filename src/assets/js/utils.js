export function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
}