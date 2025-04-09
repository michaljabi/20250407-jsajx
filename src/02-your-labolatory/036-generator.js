function* generate4Numbers() {
    yield 100;
    yield 200;
    yield 300;
    yield 400;
}


generate4Numbers().next(); //=
generate4Numbers().next(); //=
generate4Numbers().next(); //=
generate4Numbers().next(); //=
generate4Numbers().next(); //=
generate4Numbers().next(); //=


const ref = generate4Numbers();

ref.next(); //=
ref.next(); //=
ref.next(); //=
ref.next(); //=
ref.next(); //=

for (const x of generate4Numbers()) {
    console.log(x);
}

const ref2 = generate4Numbers();
ref2.next(); //=
ref2.next(); //=
ref2.next(); //=
ref2.next(); //=
ref2.next(); //=