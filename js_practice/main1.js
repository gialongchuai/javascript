console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve()
  .then(() => {
    console.log('C');
    setTimeout(() => console.log('D'), 0);
    Promise.resolve()
      .then(() => console.log('E'))
      .then(() => console.log('F'));
  })
  .then(() => console.log('G'));

queueMicrotask(() => console.log('H'));

async function run() {
  console.log('I');
  await Promise.resolve();
  console.log('J');
}
run();

setTimeout(() => console.log('K'), 0);

console.log('L');

// A I L C H J E G F B K D

// vòng đầu macro toàn script nên: A -> run() in I -> L
// trong đó:
// + micro: pro(5) -> queue(15) -> pro(19)
// + macro: set(3) -> set(24)

// vòng 2 từng ông micro: C -> H -> J
// trong đó:
// + micro: pro(9)
// + macro: set(3) -> set(24) -> set(8)

// vòng 3 từng ông micro tiếp: E -> F -> G
// trong đó:
// + micro: sau khi xử lý ông pro(9) thì tiếp then sau luôn là G
// theo đúng là vậy không hiểu sao trình duyệt nào cũng theo thứ tự
// E -> G -> F ........
// + macro: set(3) -> set(24) -> set(8)

// vòng 4: từng ông macro còn lại: B -> K -> D