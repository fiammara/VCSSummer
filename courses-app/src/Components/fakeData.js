import faker from 'faker';

class Course {
    constructor(id, title, about, location, duration, date, price, logo = "", program) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.location = location;
        this.duration = duration;
        this.date = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
        this.price = price;
        this.logo = logo;
        this.program = program;
        this.reviews = [];
        this.school = '';
        this.lectors = [];
        this.certificates = [];
    }

    countRating = () => {
        let ratingSum = 0;
        this.reviews.forEach(el => {
            ratingSum += el.rating;
        })
        return Math.round((ratingSum / this.reviews.length));
    }
};


class Certificate {
    constructor(title, about, link, logo) {
        this.title = title;
        this.about = about;
        this.link = link;
        this.logo = logo;
        this.courses = [];
    }
};

class Lector {
    constructor(firstName, lastName, photo, about, skills) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
        this.about = about;
        this.skills = skills;
        this.school = '';
        this.courses = [];
    }
};

class School {
    constructor(name, logo, addressStreet, addressCity, addressCountry = "Lietuva", email, phone, web, about) {
        this.name = name;
        this.logo = logo;
        this.addressStreet = addressStreet;
        this.addressCity = addressCity;
        this.addressCountry = addressCountry;
        this.contacts = { email, phone, web };
        this.about = about;
        this.lectors = [];
    }
};

class Review {
    constructor(id, rating, user, date, review) {
        this.id = id;
        this.rating = rating;
        this.user = user;
        this.date = date;
        this.review = review;
        this.course = {};
    }
}

const allCourses = [];
for (let i = 0; i < 10; i++) {
    allCourses.push(new Course(
        i,
        faker.commerce.productName(),
        faker.lorem.sentence(),
        faker.address.city(),
        faker.random.number({ min: 20, max: 180 }),
        faker.date.between('2019-08-01', '2019-12-31'),
        faker.random.number({ min: 99, max: 999 }),
        faker.image.image(),
        faker.lorem.paragraph()
    ));
    const reviewCount = faker.random.number({ min: 2, max: 20 });
    for (let j = 0; j < reviewCount; j++) {
        const rating = faker.random.number({ min: 1, max: 5 });
        const user = faker.internet.userName();
        const date = faker.date.between('2019-01-01', '2019-07-06');
        const ymd = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
        const review = faker.lorem.sentence();
        allCourses[i].reviews.push(new Review(j, rating, user, ymd, review));
    };
    allCourses.forEach(el => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const photo = faker.internet.avatar();
        const about = faker.lorem.paragraph();
        const skills = faker.system.fileType();
        el.lector = new Lector(firstName, lastName, photo, about, skills)
    });
    allCourses.forEach(el => {
        const name = faker.company.companyName();
        const logo = faker.image.technics();
        const street = faker.address.streetAddress();
        const city = faker.address.city();
        const country = faker.address.country();
        const email = faker.internet.email();
        const phone = faker.phone.phoneNumber();
        const web = '/';
        const about = faker.lorem.paragraph();
        el.school = new School(name, logo, street, city, country, email, phone, web, about);
    });
    allCourses.forEach(el => {
        const title = `Certificate of ${faker.lorem.word()}`;
        const about = faker.lorem.sentence();
        const link = '/';
        const logo = 'https://ugcorigin.s-microsoft.com/100/488459bc-c120-4e7b-a179-377f9bb41fc8/200/v1/image.jpg';
        el.certificates.push(new Certificate(title, about, link, logo));
    });

};

export { allCourses };






