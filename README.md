# React Native Expo + TypeScript + Nest 


### Libraries
+ **UseForm** + **react-router-dom** + **JWt** + **uuid**
### 1. git clone
```bash
git clone https://github.com/Fronik123/train-schedule.git
cd train-schedule
npm install
```

# Frontend
### 1.Go path
```bash
cd front-train
npm install
```

### 2. Run start
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

DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"

### 4. Prisma migrate

```bash
npx prisma migrate dev
```

### 5. Run start
```bash
npm run start
```

