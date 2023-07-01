import React from "react";
import { FaSave } from "react-icons/fa";
import EnglishFlag from "../../../public/flag-united-kingdom_1f1ec-1f1e7.png";
import TurkeyFlag from "../../../public/Flag_of_Turkey.svg.png";

const Form = () => {
  return (
    <div className="overflow-x-auto my-4 space-y-4">
      {/* Table form start*/}
      <div>
        <p>Form Title</p>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, officia.
        </small>
      </div>
      <div className="overflow-x-auto text-black my-4 border">
        <table className="table my-4">
          {/* head */}
          <thead>
            <tr className="bg-gray-300 text-lg">
              <th>Table Title</th>
              <th>Table Title</th>
              <th>Table Title</th>
              <th>Table Title</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <div className="flex flex-row gap-4">
                <td className="btn btn-primary">
                  <FaSave className="text-xl"></FaSave> Edit
                </td>
                <td className="btn btn-warning">
                  <FaSave className="text-xl"></FaSave>Delete
                </td>
              </div>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <div className="flex flex-row gap-4">
                <td className="btn btn-primary ">
                  <FaSave className="text-xl"></FaSave> Edit
                </td>
                <td className="btn btn-warning">
                  <FaSave className="text-xl"></FaSave>Delete
                </td>
              </div>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <div className="flex flex-row gap-4">
                <td className="btn btn-primary ">
                  <FaSave className="text-xl"></FaSave> Edit
                </td>
                <td className="btn btn-warning">
                  <FaSave className="text-xl"></FaSave>Delete
                </td>
              </div>
            </tr>
            {/* row 4 */}
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <div className="flex flex-row gap-4">
                <td className="btn btn-primary ">
                  <FaSave className="text-xl"></FaSave> Edit
                </td>
                <td className="btn btn-warning">
                  <FaSave className="text-xl"></FaSave>Delete
                </td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="join flex items-center justify-center">
        <button className="join-item mr-4">«</button>
        <button className="join-item  btn">1</button>
        <button className="join-item  btn btn-primary btn-active">2</button>
        <button className="join-item  btn">3</button>
        <button className="join-item  btn">4</button>
        <button className="join-item ml-4">»</button>
      </div>
      <div>
        <p>Form Title</p>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, officia.
        </small>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline">
            <img className="w-8" src={EnglishFlag} alt="" />
            English
          </button>
          <button className="btn btn-sm btn-outline">
            <img className="w-8" src={TurkeyFlag} alt="" /> Turkey
          </button>
        </div>
      </div>
      {/* Table form end*/}

      {/* Country form start*/}
      <div className="w-full my-6 max-w-7xl">
        <div className="flex flex-col w-full max-w-7xl">
          <label className="text-sm" htmlFor="Label title">
            Label title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <select className="select select-bordered w-full max-w-7xl">
              <option disabled selected>
                Choose
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-7xl">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between items-center gap-4 w-full">
        <div className="flex flex-col w-full max-w-7xl">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-7xl">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-7xl">
        <label className="text-sm" htmlFor="Label title">
          Label title
        </label>
        <textarea
          className="textarea textarea-bordered w-full  max-w-7xl"
          placeholder="Type here"
        ></textarea>
      </div>
      {/* Country form end*/}

      {/* Last form start*/}
      <div className="lg:flex">
        <div className="basis-[75%] border space-y-4">
          <div>
            <p>Form Title</p>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              officia.
            </small>
          </div>
          <div className="w-full my-6">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full  max-w-7xl"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <select className="select select-bordered w-full max-w-7x">
                <option disabled selected>
                  Choose
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>

          <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full max-w-7xl">
            <div className="flex flex-col w-full max-w-7xl">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="Label title">
                  Label title
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full  max-w-7xl"
                />
              </div>
            </div>

            <div className="flex flex-col  w-full max-w-7xl">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="Label title">
                  Label title
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full  max-w-7xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-7xl">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <textarea
              className="textarea textarea-bordered w-full  max-w-7xl"
              placeholder="Type here"
            ></textarea>
          </div>
        </div>

        <div className="basis-[25%] border">
          <div>
            <p>Form Title</p>
          </div>

          <div className="w-full my-6">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full  max-w-7xl"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <select className="select select-bordered w-full max-w-7x">
                <option disabled selected>
                  Choose
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-7xl">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <textarea
              className="textarea textarea-bordered w-full  max-w-7xl"
              placeholder="Type here"
            ></textarea>
          </div>
        </div>
      </div>
      {/* Last form end*/}
    </div>
  );
};

export default Form;
