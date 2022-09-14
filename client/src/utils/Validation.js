// 아이디 유효성 검사
export const idValidator = (id) => {
  // 영문 대소문자, 숫자만 가능. 최소 4자 최대 20자
  const idRegExp = /^[a-zA-Z0-9]{4,20}$/;
  return idRegExp.test(id);
}

// 비밀번호 유효성 검사
export const passwordValidator = (password) => {
  // 영문 대소문자, 숫자, 특수문자 모두 포함하여 8자 이상 20자 이하
  const passwordRegExp =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()])[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/;
  return passwordRegExp.test(password);
}

// 이름 유효성 검사
export const nameValidator = (name) => {
// 영문, 한글 이용하여 2글자 이상 16자 이하
const nameRegExp = /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}$/;
return nameRegExp.test(name);
}

// 이메일 유효성 검사
export const emailValidator = (email) => {
  // @가 들어간 주소
  const emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return emailRegExp.test(email);
  }

// 전화번호 유효성 검사
export const phoneValidator = (phone) => {
  // 숫자만 입력, 총 11개 숫자 입력
  const phoneRegExp = /^[0-9]{12}$/; // 오류 날 수 있음.
  return phoneRegExp.test(phone);
}
