const dev = process.env.NODE_ENV !== 'production';

export const servers = dev ? 'http://localhost:3000' : 'https://salesforcenoob.onrender.com/';