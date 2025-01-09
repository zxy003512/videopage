// 解析并播放函数
function parseAndPlay() {
    const videoUrl = document.getElementById('videoUrl').value.trim();
    const parserBase = document.getElementById('parserSelect').value;
    
    if (!videoUrl) {
        alert('请先粘贴视频链接。');
        return;
    }

    // 验证URL格式
    try {
        new URL(videoUrl);
    } catch (e) {
        alert('请输入有效的视频链接。');
        return;
    }

    // 生成解析后的URL
    const parsedUrl = parserBase + encodeURIComponent(videoUrl);
    
    // 提示用户，尝试播放解析后的URL
    alert('正在尝试解析视频链接并播放。如果无法播放，请尝试使用其他解析接口。');

    // 设置iframe播放器的源
    const videoPlayerContainer = document.getElementById('videoPlayerContainer');
    const videoIframePlayer = document.getElementById('videoIframePlayer');
    videoIframePlayer.src = parsedUrl;
    // 显示播放器容器
    videoPlayerContainer.style.display = 'block';
    // 平滑滚动到播放器位置
    videoPlayerContainer.scrollIntoView({ behavior: 'smooth' });
}
