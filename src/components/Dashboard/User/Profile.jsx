import { PaperClipIcon } from "@heroicons/react/20/solid";
import { UserAuth } from "../../auth/AuthContext";

const Profile = () => {
  const { currentUser } = UserAuth();

  const user = {
    name: currentUser.displayName,
    email: currentUser.email,
    imageUrl: currentUser.photoURL,
  };
  return (
    <div className="max-w-7xl mx-auto py-10 bg-white p-20 m-20 rounded-lg shadow-2xl">
      <div className="px-4 sm:px-0">
        <img
          className="h-20 w-20 mb-4 rounded-full"
          src={user.imageUrl}
          alt=""
        />
        <h1 className="text-6xl">Profile </h1>
        <h3 className="text-base font-semibold leading-7 text-neutral">
          Welcome Back, {user.name}!
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral"></p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Name of Pet
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Bacon and Biscuit
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              About Pets
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              American Bully and Labradoodle
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Profile;
