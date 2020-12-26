import React from "react";

export const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">Contact Page</h1>
        <form>
          <div className="mb-1 my-5">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

            <label for="exampleInputPassword1" className="form-label my-3">
              Type Your Content Here !
            </label>
            <textarea
              resize="false"
              cols="20"
              rows="5"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
