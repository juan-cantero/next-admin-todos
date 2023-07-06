import React from 'react';
import Image from 'next/image';

export interface User {
  name?: string;
  image?: string;
  email?: string;
  roles?: string[];
}

interface Props {
  user: User;
}

export const Avatar = ({ user }: Props) => {
  console.log(user);
  return (
    <div className="mt-8 text-center">
      <Image
        src={user.image ?? ''}
        width={150}
        height={150}
        alt=""
        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
      />
      <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
        {user.name ?? ''}
      </h5>
      <span className="hidden text-gray-400 lg:block">
        {user.roles?.join(' ')}
      </span>
    </div>
  );
};
