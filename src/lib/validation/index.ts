import * as z from 'zod';

export const SignupValidation = z.object({ 
    username:z.string().min(2,{message:'too short'}),
    name:z.string().min(2,{message:'It is too short name'}),
    password:z.string().min(8,{message:'Password must be at least 8 characters'}),
    email:z.string().email()
})
export const SigninValidation = z.object({ 

    password:z.string().min(8,{message:'Password must be at least 8 characters'}),
    email:z.string().email()
})

export const PostValidation = z.object({ 

    caption: z.string().min(5).max(2200),
    file:z.custom<File[]>(),
    location:z.string().min(2).max(100),
    tags:z.string(),
})