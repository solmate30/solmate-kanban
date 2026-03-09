# Solmate Kanban Board

솔메이트 팀을 위한 간단한 칸반 보드 프로젝트 관리 도구

## 주요 기능

- **드래그 앤 드롭**: 카드를 자유롭게 이동하여 작업 상태 관리
- **카드 관리**: 제목, 설명, 담당자, 마감일, 우선순위 설정
- **라벨 시스템**: 색상별 라벨로 작업 분류
- **팀 멤버 관리**: 팀원 배정 및 관리
- **실시간 저장**: SQLite 데이터베이스 기반 자동 저장

## 기술 스택

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Database**: Turso (LibSQL), Drizzle ORM
- **Drag & Drop**: @hello-pangea/dnd
- **UI Components**: Lucide React, Sonner (Toast)

## 실행 방법

### 1. 의존성 설치

```bash
cd web
npm install
```

### 2. 환경 변수 설정

`.env` 파일을 생성하고 Turso 데이터베이스 설정:

```env
TURSO_DATABASE_URL=your_database_url
TURSO_AUTH_TOKEN=your_auth_token
```

### 3. 데이터베이스 마이그레이션

```bash
npm run db:push
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 프로젝트 구조

```
web/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React 컴포넌트
│   │   └── kanban/      # 칸반 보드 관련 컴포넌트
│   ├── actions/         # Server Actions
│   ├── db/              # 데이터베이스 스키마 및 설정
│   └── lib/             # 유틸리티 함수
└── package.json
```

## 개발

- `npm run dev`: 개발 서버 시작
- `npm run build`: 프로덕션 빌드
- `npm run start`: 프로덕션 서버 시작
- `npm run lint`: ESLint 검사
