const posts = [
        {
            title: 'Building Phil Social, a minimalist social network',
            author: 'Phil Marshall',
            date: 'August 30, 2023',
            content: `
This project was a lot of fun to build! I got to use a lot of different technologies to put it together. The architecture is a
Django backend running in an AWS EC2 instance, combined with a React frontend served as a static site on AWS S3, with Cloudfront
acting as a CDN sitting in front of the S3 bucket. I used
[this Django + React template](https://github.com/sushil-kamble/django-react-auth) to get user authentication working, and
[this tutorial](https://testdriven.io/blog/django-docker-https-aws/) to deploy the backend to EC2.

I used Django Rest Framework to build the API, in particular using the features it provides for authentication, pagination, and
filtering.

I used [zustand](https://github.com/pmndrs/zustand), essentially a simplified version of the Redux state management
library, to manage the application state on the frontend.


See the live site [here](https://social.philmarshall.dev).
            `
            
            ,
            slug: 'sample-2'
        }
]
export default posts;