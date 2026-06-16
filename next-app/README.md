# Next.js on Vercel — 기본 템플릿

Vercel에 바로 배포 가능한 최소 Next.js 15 (App Router) + TypeScript + Tailwind CSS 템플릿입니다.

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 스크립트

- `npm run dev` — 개발 서버 실행
- `npm run build` — 프로덕션 빌드
- `npm run start` — 빌드된 앱 실행
- `npm run lint` — ESLint 실행

## Vercel 배포

1. 이 폴더를 GitHub 저장소에 푸시합니다.
2. [vercel.com/new](https://vercel.com/new) 에서 저장소를 임포트합니다.
3. **Root Directory**가 `next-app`인지 확인하고 (또는 이 폴더만 별도로 푸시), 추가 설정 없이 **Deploy** 를 누릅니다. Vercel이 Next.js를 자동 감지합니다.

또는 CLI 사용:

```bash
npm i -g vercel
vercel
```

## 구조

```
app/
  layout.tsx     # 루트 레이아웃
  page.tsx       # 첫 페이지
  globals.css    # Tailwind 진입점
```
