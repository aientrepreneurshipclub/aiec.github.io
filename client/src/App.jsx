import { Fragment, useEffect, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "/src/home/Home";
import Events from "./events/Events";
import Event from "./event/Event";
import About from "./About/About";
import Sign from "./sign/Sign";
import Activation from "./activation/Activation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import Template from "./Template";
import { getAttendee } from "./store/attendeeSlice";
import {setIsRegisted} from "./store/isRegistedSlice"
import Redirct from "./components/Redirct";
import Loader from "./components/Loader";
import {setEmails} from "./store/emailsSlice"
import NotFound from "./components/NotFound";
import RedirctHome from "./components/RedirctHome";
import Path from "./path/Path";
import Team from "./team/Team";
function App() {
  const lang = useSelector((state) => state.lang.value);
  const mode = useSelector((state) => state.mode.value);
  const key = useSelector((state) => state.token.value);
  const isLoad = useSelector((state) => state.isLoad.value);
  const attendee = useSelector((state) => state.attendee.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (key !== "" && key) {
      dispatch(getAttendee(key));
      dispatch(setEmails());
    }
  }, [key, dispatch]);
  useEffect(() => {
      dispatch(setIsRegisted(attendee.eventIDs));
  }, [attendee, dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          index: true,
          element: <RedirctHome />,
        },
        {
          path: "home",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "events",
          children: [
            {
              index: true,
              element: <Redirct />,
            },
            {
              path: ":eventsType",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Events />
                    </Suspense>
                  ),
                },
                {
                  path: ":eventId",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Event />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "about-us",
          element: (
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          ),
        },
        // {
        //   path: "path",
        //   element: (
        //     <Suspense fallback={<Loader />}>
        //       <Path />
        //     </Suspense>
        //   ),
        // },
        {
          path: "team",
          element: (
            <Suspense fallback={<Loader />}>
              <Team />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "activation/:activateCode",
      element: <Activation />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <Fragment>
      {isLoad && <Loader />}
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        theme={mode}
        style={{ zIndex: "6000", top: "50px" }}
        rtl={lang == "arabic"?"true":"false"}
      />
      <Sign />
    </Fragment>
  );
}

export default App;
