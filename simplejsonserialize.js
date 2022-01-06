"use strict";
var jsonSerialize;
(function (jsonSerialize) {
    class Email {
        constructor(email) {
            this.email = email;
            if (!this.email.includes("@")) {
                throw new Error(`Not an email address: ${this.email}`);
            }
        }
        asString() {
            return this.email;
        }
    }
    const testClass = new Email('testemail@papirfly.com');
    class User {
        constructor(id, email) {
            this.id = id;
            this.email = email;
            if (!this.id) {
                throw new Error('User ID cannot be empty!');
            }
        }
        toObject() {
            return {
                id: this.id,
                email: this.email.asString()
            };
        }
        serialize() {
            return JSON.stringify(this.toObject());
        }
        static fromSerialized(serialized) {
            const user = JSON.parse(serialized);
            return new User(user.id, new Email(user.email));
        }
    }
    const user = new User("20", new Email("mohammad@papirfly.com"));
    console.log(user);
    const json = user.serialize();
    console.log(json);
    const user2 = User.fromSerialized(json);
    console.log(user2);
})(jsonSerialize || (jsonSerialize = {}));
