type Name = string | number;

let 이름: Name = "minjae"; // Union type 다양한 타입 들어올 수 있게 해준다.
let 이름들: string[] = ["kim", "park"];
let 이름쌍: { name?: string } = { name: "kim" };

// 함수에도 타입 지장
function 함수(x: number): number {
  return x * 2;
}

// 배열에 쓸 수 있는 튜플 타입
type Member = [number, boolean];
let john: Member = [123, true];

// 객체에 타입지정해야할 속성 많을 땐

type Members = {
  [key: string]: string;
  // 모든 오브젝트 속성
  // 글자로 된 모든 객체 속성의 타입은 스트링이다
};
let jane: Members = { name: "kim" };

// 클래스도 타입지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
