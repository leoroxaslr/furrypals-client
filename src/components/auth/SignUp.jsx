import React from "react";
import { Link } from "react-router-dom";
import LoginPic from "../../assets/images/pet care-pana.svg";
import { useRef, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const USER_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);

    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);

    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user, pwd).catch((error) => {
      alert.show(error);
    });
  };

  return (
    <>
      <section className="bg-white m-16">
        <div className="grid max-w-screen-2xl h-screen max-h-[70vh]  py-8 mx-auto lg:py-16 lg:grid-cols-12">
          <div className="hidden place-self-center w-96 lg:mt-0 lg:col-span-7 lg:flex">
            <img className="scale-150" src={LoginPic} alt="face" />
          </div>
          <div className="m-auto place-self-center lg:col-span-5 lg:flex">
            <div className="bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0 w-auto">
              <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-blue-950 md:text-3xl">
                  Create an account
                </h1>
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={signUp}
                >
                  <div className="uname">
                    <label
                      htmlFor="username"
                      className="text-sm font-medium text-gray-900 flex justify-between "
                    >
                      Your Email
                      <span className={validName ? "valid" : "hide"}>
                        <svg
                          className="w-[14px] h-[14px] text-gray-800 dark:text-white "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="green"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                      </span>
                      <span className={validName || !user ? "hide" : "invalid"}>
                        <svg
                          className="w-[14px] h-[14px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="red"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                        </svg>
                      </span>
                    </label>

                    <input
                      type="email"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2"
                      placeholder="username"
                    />
                    <p
                      id="uidnote"
                      className={
                        userFocus && !validName ? "instructions" : "offscreen"
                      }
                    >
                      4-24 characters <br />
                      Must begin with a letter. <br />
                      Letters, numbers, underscores, hypens allowed.
                    </p>
                  </div>

                  <div className="passw">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-900 flex justify-between "
                    >
                      Your Password
                      <span className={validPwd ? "valid" : "hide"}>
                        <svg
                          className="w-[14px] h-[14px] text-gray-800 dark:text-white "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="green"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                      </span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <svg
                          className="w-[14px] h-[14px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="red"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                        </svg>
                      </span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      autoComplete="off"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2"
                      placeholder="••••••••"
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      8-24 characters
                      <br />
                      Must include uppercase and lowercase <br /> letters,a
                      number and a special character. <br />
                      Allowed special character:
                      <span aria-label="exclamation mark">!</span>
                      <span aria-label="at symbol">@</span>
                      <span aria-label="hastag">#</span>
                      <span aria-label="Dollar Sign">$</span>
                    </p>
                  </div>
                  <div className="confirmpass">
                    <label
                      htmlFor="confirm_pwd"
                      className="text-sm font-medium text-gray-900 flex justify-between "
                    >
                      Confirm Password
                      <span
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      >
                        <svg
                          className="w-[14px] h-[14px] text-gray-800 dark:text-white "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="green"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                      </span>
                      <span
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      >
                        <svg
                          className="w-[14px] h-[14px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="red"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                        </svg>
                      </span>
                    </label>
                    <input
                      type="password"
                      id="confirm_pwd"
                      autoComplete="off"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2"
                      placeholder="••••••••"
                    />
                    <p
                      id="confnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      Must match the first password input field.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-offset-amber-400 focus:ring-yellow-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 lg:mr-28 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-800"
                      >
                        I accept the
                        <Link
                          className="font-medium text-gray-800 hover:underline lg:mr-5 mr-10"
                          href="#"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                    disabled={
                      !isChecked || !validName || !validPwd || !validMatch
                        ? true
                        : false
                    }
                    type="submit"
                    className="w-full text-white bg-purple-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-800">
                    Already have an account?
                    <Link
                      as={Link}
                      to="/signin"
                      className="pl-1 font-medium text-gray-800 hover:underline"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
