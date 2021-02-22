import * as React from "react";
import { gql, useQuery } from '@apollo/client';
import Task2Solution from "./Task2/Task2Solution";
import Task3Solution from "./Task3/Task3Solution";
import Task4Solution from "./Task4/Task4Solution";
import Task5Solution from "./Task5/Task5Solution";

const GET_TASK_PLAYGROUND = gql`
query Audio($id: ID!) {
  audio(id: $id) {
    id,
    file,
    title
  }
}
`;
const TaskPlayground = () => {


  const { loading, error, data } = useQuery(GET_TASK_PLAYGROUND, {
    variables: { id: "papercup" }
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full my-10">
      <div className="max-w-md flex flex-col items-center mx-auto">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Task 1
        </h2>
        <p>
          1. ID : <code className="bg-orange-200">{data.audio.id}</code> <br />
          2. Name: <code className="bg-orange-200">{data.audio.title}</code> <br />
          3. S3 URL: <code className="bg-orange-200">{data.audio.file}</code>
        </p>
        <br />
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Task 2
        </h2>
        <Task2Solution {...data.audio} />
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Task 3
        </h2>
        <Task3Solution {...data.audio} />
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Task 4
        </h2>
        <Task4Solution {...data.audio} />
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Task 5
        </h2>
        <Task5Solution {...data.audio} />
        <div id="waveform" style={{ width: 150, height: 80 }}></div>
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          🚀
        </h2>
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Getting started
        </h2>

        <p>
          1. Git clone this repository <br />
          2. Run <code className="bg-orange-200">yarn install -dev</code> <br />
          3. Run <code className="bg-orange-200">yarn dev</code> <br />
          4. Go to localhost:3000, you will see a copy of this page running
          locally
        </p>
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5 mt-12">
          🚧
        </h2>
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Project Structure
        </h2>
        <p>
          The project is set-up with all the necessary packages installed for
          you to be able to complete the tasks. It uses Next.js framework as
          it&apos;s base, but familarity with it is not necessary.
        </p>
        <br />
        <p>
          You can breakdown your code in files as you desire, include all your
          custom components in{" "}
          <code className="bg-orange-200">components/TaskPlayground</code>{" "}
        </p>
        <br />
        <p>
          You can find this file in{" "}
          <code className="bg-orange-200">
            components/TaskPlayground/TaskPlayground.tsx
          </code>{" "}
          and modify to start on the task. Try modifying this file, Next.js will
          hot-reload the page for you.
        </p>

        <h2 className="text-gray-900 text-lg font-medium title-font mb-5 mt-12">
          ⚠
        </h2>
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Heads up
        </h2>
        <p>
          WaveSurfer is a great library and Next.js is great framework, but
          together they havee small issue. Next.js renders all the code on
          server side first, and then hydrates it on the front-end. This works
          great to generated static parts of the website, and if it detects the
          website has no dynamic elements, it will generate a static page. This
          causes a small problem when rendering WaveSurfer, since it is not
          designed specifically for server side rendering, we can an error when
          trying to import it. To get around the issue, we can import the
          modules when the component is mounted or when window is available.{" "}
          <br /> <br />
          Example code: <br />
        </p>
        <img src="/assets/warning.png" />
        <p>
          The above code can be surround with a if statement for window or
          handled on mount. Once the page is hydrated on the client-side, you
          can import the module and start using it.
        </p>
      </div>
    </div>
  );
};

export default TaskPlayground;
