### 데이터 베이스 초기설정
npm run setdb
</br>
### package.json 초기설정 (시퀄라이즈 에러 임시해결)
mysql 유저와 패스워드 입력 필요


{
  "development": {
    "username": "root",
    "password": "",
    "database": "camper_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": 71031780,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": 71031780,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}