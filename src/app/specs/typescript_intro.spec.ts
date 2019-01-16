describe('some typescript features', () => {
    describe('declaring typed variables', () => {
        it('implicit variable declaration', () => {
            let someString: string | number = 'taco';
            someString = 3.4;
            expect(someString).toBe(3.4);
       });
        it('typing anonymous objects', () => {
             const movie = {
                 title: 'The force awakens',
                 yearReleased: 2015
                };

            interface VoiceMail {
                from: string;
                message: string;
                answered?: boolean;
            }
            function logVoiceMail(call: VoiceMail) {
                // do something...
                console.log(`Got a call from ${call.from}  - the message is: ${call.message}`);
            }

            const vm1 = {
                date: 'Today',
                from: 'Joe',
                answered: false,
                message: 'Get your butt to the meeting, you are late!'
            };

            const vm2: VoiceMail = {
                from: 'Joe',
                message: 'I\'m In!',
                answered: false
            };
            logVoiceMail(vm1);
        });

        it('function types', () => {
        type MathOperation = (a: number, b: number) => number;
        let mathOp: MathOperation;

        mathOp = function(a, b) {
            return a + b;
        };

        mathOp = (x, y) => x * y;

        interface Movie {
            title: string;
            director: string;
            yearReleased: number;
            getAge: () => number;
        }

        const thor = {
            title: 'Thor: Ragnorak',
            director: 'Waititi',
            yearReleased: 2017,
            getAge: function() {
                return 22;
            }
        };


        });
    });
});
describe('classes', () => {
    it('creating them', () => {
        class Movie {
            constructor(public title: string, public director: string, public yearReleased: number) {}

            getInfo() {
                return `A movie ${this.title} by ${this.director} in ${this.yearReleased}`;
            }
        }
        const sw = new Movie('A new hope', 'Lukas', 1977);
        expect(sw.yearReleased).toBe(1977);
        console.log(sw.getInfo());
    });
});
describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('have a forEach', () => {
        numbers.forEach(n => console.log(n));
    });
    describe('producing an array', () => {
        it('has filter', () => {
            const isAnEvenNumber = (n: number) => n % 2 === 0;
            const evens = numbers.filter(isAnEvenNumber);
            expect(evens).toEqual([2, 4, 6, 8]);
        });

        it('transfoming an array', () => {
            const doubled = numbers.map(n => n * 2);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
    });
});
