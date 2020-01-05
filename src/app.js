/** 定义dva */
export const dva = {
    config: {
        /** 配置出错时 */
        onError(err) {
            err.preventDefault();
        },
    },
};
/** 进行挂载时 */
export function render(oldRender) {
    oldRender();
}
