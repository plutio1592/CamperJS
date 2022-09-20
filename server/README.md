### 데이터 베이스 초기설정
1. npm run setdb (DB 초기화 & 생성 및 API 값 저장 일괄 진행)
</br>
</br>

### 504 Gateway Time-out Err & 아이피 주소 TimeErr 발생 시
1. npm run resetdb (DB 초기화)
2. npm run api1 (camping Table API 값 추가)
3. npm run api2 (campingImageUrl Table API 첫번째 값 저장)
4. npm run api3 (campingImageUrl Table API 두번째 값 저장)

※. 위의 명령어를 순차적으로 입력하거나 공공 데이터포털 서버의 문제일 수 있으므로 2~30분 대기 후 입력
</br>
</br>

### Camper_DB 파일 활용 방법 (API 오류 발생 시 활용)
- mysql WorkBench 활용
  - https://defacto-standard.tistory.com/127
</br>
</br>
- mysql 터미널 활용
  - mysql 터미널 접속
  - ex) mysql -u root -p 1234
</br>
  - source <Camper_DB.sql 파일 경로> 입력
  - ex) source C:\JavaProJect\CamperJS\server\Camper_DB.sql


