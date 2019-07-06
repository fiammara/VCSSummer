import faker from 'faker';

class Course {
    constructor(id, title, school, about, location, duration, date, price, logo = "", program) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.school = school;
        this.location = location;
        this.duration = duration;
        this.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
        this.price = price;
        this.logo = logo;
        this.program = program;
        this.reviews = [
            faker.random.number({ min: 1, max: 5 }),
            faker.random.number({ min: 1, max: 5 }),
            faker.random.number({ min: 1, max: 5 }),
            faker.random.number({ min: 1, max: 5 }),
            faker.random.number({ min: 1, max: 5 })
        ];
        this.lectors = [];
        this.certificates = [];
    }

    countRating = () => {
        return Math.round((this.reviews.reduce((acc, cur) => (acc + cur)) / this.reviews.length));
    }
};


class CourseCertificate {
    constructor(title, about, link, logo) {
        this.title = title;
        this.about = about;
        this.link = link;
        this.logo = logo;
    }
};

class Lector {
    constructor(firstName, lastName, photo, school, about, skills) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
        this.school = school;
        this.about = about;
        this.skills = skills;
    }
};

class School {
    constuctor(name, logo, addressStreet, addressCity, addressCountry = "Lietuva", email, phone, web, about) {
        this.name = name;
        this.logo = logo;
        this.addressStreet = addressStreet;
        this.addressCity = addressCity;
        this.addressCountry = addressCountry;
        this.contacts = { email, phone, web };
        this.about = about;
    }
};

class Review {
    constructor(rating, user, date, review) {
        this.rating = rating;
        this.user = user;
        this.date = date;
        this.review = this.review;
    }
}

const allCourses = [];
for (let i = 0; i < 10; i++) {
    allCourses.push(new Course(
        i,
        faker.commerce.productName(),
        faker.company.companyName(),
        faker.lorem.sentence(),
        faker.address.city(),
        faker.random.number({ min: 20, max: 180 }),
        faker.date.between('2019-08-01', '2019-12-31'),
        faker.random.number({ min: 99, max: 999 }),
        faker.image.image(),
        faker.lorem.paragraph()
    ));
};

export { allCourses };






