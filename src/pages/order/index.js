import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Item from "../../components/Item";
import ReactPaginate from "react-paginate";
const Order = () => {
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState();
  // const url = "http://localhost:4000/order_items?limit=5";
  const url = "https://unshelled-api.cyclic.app/order_items?limit=5";

  const getData = async (page) => {
    return await axios
      .get(`${url}&offset=${page}`, {
        auth: {
          username: auth.username,
          password: auth.password,
        },
      })
      .then((res) => {
        if (data !== res.data) {
          // return;

          setData(res.data);
          // return res.data;
        }
      })
      .catch((err) => {
        if (err) {
          console.log("There was an error.");
        }
      });
  };
  // const data = useMemo(() => {
  //   return getData(currentPage);
  // }, [currentPage]);

  useEffect(() => {
    console.log("Auth is: " + auth.username);
    if (auth === null || auth.username === null || auth.password === null) {
      //   console.log("Auth is null");
      // setAuthState(false);
    } else {
      getData(0);
    } //eslint-disable-next-line
  }, [auth]);

  //   if (authState === false) {
  //     console.log("No auth");
  //     return <Navigate to={"/login"} />;
  //   }
  if (auth) {
    if (data) {
      console.log(data);
      const totalPages = Math.ceil(data.total / data.limit);
      // return <p>There are {data.total} items here.</p>;
      return (
        <>
          {data.data.map((item) => {
            return <Item props={item} key={item._id} />;
          })}
          <p>This is page {data.offset + 1} </p>
          {/* <Paginate
            // url={url}
            // pageNumber={data.offset}
            totalItems={data.total}
            limit={data.limit}
            // dataSetterFunction={setData}
            // auth={auth}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          /> */}
          <ReactPaginate
            pageCount={totalPages}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(e) => {
              const pageNumber = e.selected;
              getData(pageNumber);
            }}
            pageRangeDisplayed={5}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </>
      );
    } else {
      return <p>Hold on</p>;
    }
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default Order;
