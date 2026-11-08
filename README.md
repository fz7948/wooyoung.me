# 📖 우영의 일기장 (Wooyoung's Log)

담백하고 차분한 에디토리얼 화이트톤의 개인 일기장 & PWA 웹사이트입니다.

---

## 🚀 Vercel로 1분 만에 배포하는 방법

터미널에서 아래 명령어를 실행하면 바로 배포가 진행됩니다:

```bash
cd /Users/wooyoung/Desktop/우영/wooyoung-log
npx vercel
```

### 최초 실행 시 안내:
1. `Set up and deploy?` ➔ `y` (엔터)
2. `Which scope?` ➔ 본인 계정 선택 (엔터)
3. `Link to existing project?` ➔ `n` (엔터)
4. `What's your project's name?` ➔ `wooyoung-log` (엔터)
5. `In which directory is your code located?` ➔ `./` (엔터)
6. ➔ 약 10초 뒤 `https://wooyoung-log.vercel.app` 과 같은 무료 HTTPS 주소가 생성됩니다!

---

## 📱 스마트폰(갤럭시/아이폰) 앱(PWA) 설치 방법

1. 배포된 주소(`https://wooyoung-log.vercel.app`)로 스마트폰에서 접속합니다.
2. 브라우저 하단에 **"홈 화면에 우영의 일기 추가"** 배너가 뜨면 탭하거나,
   크롬 메뉴 [⠇] ➔ **[홈 화면에 추가]** 또는 **[앱 설치]**를 누릅니다.
3. 스마트폰 바탕화면에 전용 'W' 아이콘이 생성되며, 주소창 없는 깔끔한 독립 앱으로 실행됩니다.

---

## ✍️ 새 일기 글 추가하는 방법

`index.html` 파일의 `<main class="log-list">` 안에 아래 블록을 복사해서 날짜와 내용만 적어주시면 됩니다:

```html
<article class="log-item" onclick="toggleLog(this)">
  <div class="log-date">2026. 11. 09 (월)</div>
  <h2 class="log-title">오늘의 일기 제목</h2>
  <p class="log-preview">
    목록에서 보일 한 줄 요약 미리보기...
  </p>
  <div class="log-content">
    <p>본문 내용 첫 번째 문단...</p>
    <p>본문 내용 두 번째 문단...</p>
  </div>
</article>
```

