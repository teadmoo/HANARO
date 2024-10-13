'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-xs '>
        <h1 className='text-3xl font-bold mb-6'>로그인</h1>

        <form method='post' action='/api/auth/callback/credentials'>
          <label htmlFor='email' className='block mb-2'>
            이메일
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='block w-full px-4 py-2 border rounded mb-4'
            placeholder='your-email@example.com'
            required
          />

          <label htmlFor='password' className='block mb-2'>
            비밀번호
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='block w-full px-4 py-2 border rounded mb-4'
            placeholder='비밀번호를 입력하세요'
            required
          />

          <button
            type='submit'
            className='w-full py-2 bg-blue-500 text-white rounded mb-4'
          >
            로그인
          </button>
        </form>

        <div className='mt-4 space-y-2'>
          <button
            className='w-full flex items-center justify-center py-2 border rounded text-gray-700 hover:bg-gray-100'
            onClick={() => signIn('google')}
          >
            <Image
              src='/logo/google-logo.svg'
              alt='Google logo'
              width={20}
              height={20}
              className='mr-2'
            />
            Sign in with Google
          </button>

          <button
            className='w-full flex items-center justify-center py-2 border rounded text-gray-700 hover:bg-gray-100'
            onClick={() => signIn('github')}
          >
            <Image
              src='/logo/github-logo.svg'
              alt='GitHub logo'
              width={20}
              height={20}
              className='mr-2'
            />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
