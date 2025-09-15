# React Native Expo + TypeScript + Nest 


### Libraries
+ **UseForm** + **react-router-dom** + **JWt** + **uuid**
### 1. git clone
```bash
git clone https://github.com/Fronik123/train-schedule.git
cd train-schedule
```

# Frontend
### 1.Go path
```bash
cd front-train
npm install
```

### 2. Go to root folder .env and and add url
```bash
SERVER_URL=http://localhost:3000
```

### 3. Run start
```bash
npm run ios
```

# Backend
### 1. Go path
```bash
cd sever-train
npm install
```

### 3. Add file to root folder .env and and path to database

```bash
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"
```

### 4. In .env add JWT_secret
```bash
JWT_SECRET=your_jwt_secret
```

### 5. Prisma db push

```bash
npx prisma db push
npx prisma generate
```

### 6. Run start
```bash
npm run start
```

