import React from "react";
import "./YourComponent.css";
import OrderStatisticsChart from "./OrderStatisticsChart";

const OrderStatistics = () => {
  return (
    <div className="order-stats-container flex flex-col gap-5 width:30px my-div">
      <div className="category flex flex-col gap-1 justify-between items-center">
        <div className="total-sales">
          <h4>Order Statistics</h4>
        </div>
        <div className="total-sales">42.82k Total Sales</div>
      </div>
      <div className="category flex flex-row gap-1 justify-between items-left">
        <div className="category flex flex-col gap-1 justify-between items-left">
          <div className="total-orders">
            <br />
            <h3>
              <b>8,258</b>
            </h3>
            Total Orders
          </div>
        </div>
        <div>
          <OrderStatisticsChart />
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: "38%" }}></div>
      </div>
      <div className="category flex flex-row gap-2 justify-between items-center">
        <div className="category-icon items-center">📱</div>
        <div className="category-details items-left justify-between">
          <span>Electronic</span>
          <p>Mobiles, Earbuds, TV</p>
        </div>
        <span>82.5k</span>
      </div>
      <div className="category flex flex-row gap-2 justify-between items-center">
        <div className="category-icon items-center">📱</div>
        <div className="category-details items-left justify-between">
          <span>Fashion</span>
          <p>T-shirt, Jeans, Shoes</p>
        </div>
        <span>23.8k</span>
      </div>
      <div className="category flex flex-row gap-2 justify-between items-center">
        <div className="category-icon items-center">📱</div>
        <div className="category-details items-left justify-between">
          <span>Decor</span>
          <p>Fine Art, Dining</p>
        </div>
        <span>849k</span>
      </div>
      <div className="category flex flex-row gap-2 justify-between items-center">
        <div className="category-icon items-center">📱</div>
        <div className="category-details items-left justify-between">
          <span>Sports</span>
          <p>Football, Cricket Kit</p>
        </div>
        <span>99</span>
      </div>
      {/* Repeat similar blocks for other categories */}
    </div>
    //   <div className="total-orders">Total Orders</div>
    // <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
    //   <div className="card h-100">
    //     <div className="card-header d-flex align-items-center justify-content-between pb-0">
    //       <div className="card-title mb-0">
    //         <h5 className="m-0 me-2">Order Statistics</h5>
    //         <small className="text-muted">42.82k Total Sales</small>
    //       </div>
    //       <div className="dropdown">
    //         <button
    //           className="btn p-0"
    //           type="button"
    //           id="orederStatistics"
    //           data-bs-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           <i className="bx bx-dots-vertical-rounded"></i>
    //         </button>
    //         <div
    //           className="dropdown-menu dropdown-menu-end"
    //           aria-labelledby="orederStatistics"
    //         >
    //           <a className="dropdown-item" href="javascript:void(0);">
    //             Select All
    //           </a>
    //           <a className="dropdown-item" href="javascript:void(0);">
    //             Refresh
    //           </a>
    //           <a className="dropdown-item" href="javascript:void(0);">
    //             Share
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card-body">
    //       {/* Content */}
    //       <div class="d-flex justify-content-between align-items-center mb-3">
    //         <div class="d-flex flex-column align-items-center gap-1">
    //           <h2 class="mb-2">8,258</h2>
    //           <span>Total Orders</span>
    //         </div>
    //         <div id="orderStatisticsChart"></div>
    //       </div>
    //       <ul class="p-0 m-0">
    //         <li class="d-flex mb-4 pb-1">
    //           <div class="avatar flex-shrink-0 me-3">
    //             <span class="avatar-initial rounded bg-label-primary">
    //               <i class="bx bx-mobile-alt"></i>
    //             </span>
    //           </div>
    //           <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
    //             <div class="me-2">
    //               <h6 class="mb-0">Electronic</h6>
    //               <small class="text-muted">Mobile, Earbuds, TV</small>
    //             </div>
    //             <div class="user-progress">
    //               <small class="fw-semibold">82.5k</small>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="d-flex mb-4 pb-1">
    //           <div class="avatar flex-shrink-0 me-3">
    //             <span class="avatar-initial rounded bg-label-success">
    //               <i class="bx bx-closet"></i>
    //             </span>
    //           </div>
    //           <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
    //             <div class="me-2">
    //               <h6 class="mb-0">Fashion</h6>
    //               <small class="text-muted">T-shirt, Jeans, Shoes</small>
    //             </div>
    //             <div class="user-progress">
    //               <small class="fw-semibold">23.8k</small>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="d-flex mb-4 pb-1">
    //           <div class="avatar flex-shrink-0 me-3">
    //             <span class="avatar-initial rounded bg-label-info">
    //               <i class="bx bx-home-alt"></i>
    //             </span>
    //           </div>
    //           <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
    //             <div class="me-2">
    //               <h6 class="mb-0">Decor</h6>
    //               <small class="text-muted">Fine Art, Dining</small>
    //             </div>
    //             <div class="user-progress">
    //               <small class="fw-semibold">849k</small>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="d-flex">
    //           <div class="avatar flex-shrink-0 me-3">
    //             <span class="avatar-initial rounded bg-label-secondary">
    //               <i class="bx bx-football"></i>
    //             </span>
    //           </div>
    //           <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
    //             <div class="me-2">
    //               <h6 class="mb-0">Sports</h6>
    //               <small class="text-muted">Football, Cricket Kit</small>
    //             </div>
    //             <div class="user-progress">
    //               <small class="fw-semibold">99</small>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

// const data = {
//   income: 459.1,
//   expenses: 198.67,
//   profit: 260.43,
//   balance: 459.1,
//   history: [
//     { month: "Jan", expenses: 65 },
//     { month: "Feb", expenses: 39 },
//     { month: "Mar", expenses: 45 },
//     // ... add more history data here
//   ],
//   thisWeek: {
//     income: 0,
//     expenses: 65,
//     diff: -39,
//   },
// };
const ExpenseOverview = () => {
  return (
    <div className="order-stats-container flex flex-col gap-10 width:3px my-divv">
      <div className="card h-100">
        <div className="card-header category flex flex-row gap-1 justify-between items-center">
          {/* Content */}
          <ul class="nav nav-pills flex flex-row gap-10 he" role="tablist">
            <li class="nav-item">
              <button
                type="button"
                class="nav-link active"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#navs-tabs-line-card-income"
                aria-controls="navs-tabs-line-card-income"
                aria-selected="true"
              >
                Income
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="nav-link" role="tab">
                Expenses
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="nav-link" role="tab">
                Profit
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body px-0">
          {/* Content */}
          <div class="tab-content p-0">
            <div
              class="tab-pane fade show active"
              id="navs-tabs-line-card-income"
              role="tabpanel"
            >
              <div class="d-flex flex-row p-8 pt-5">
                <div class="avatar flex-shrink-0 me-10">
                  <img
                    src="./imagess/wallet.png"
                    alt="User"
                  />
                </div>
                <div>
                  <small class="text-muted d-block">Total Balance</small>
                  <div class="d-flex align-items-center">
                    <h6 class="mb-0 me-1">$459.10</h6>
                    <small class="text-success fw-semibold">
                      <i class="bx bx-chevron-up"></i>
                      42.9%
                    </small>
                  </div>
                </div>
              </div>
              <div id="incomeChart"></div>
              <div class="d-flex justify-content-center pt-4 gap-2">
                <div class="flex-shrink-0">
                  <div id="expensesOfWeek"></div>
                </div>
                <div>
                  <p class="mb-n1 mt-1">Expenses This Week</p>
                  <small class="text-muted">$39 less than last week</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>Total Balance: ${data.balance}</h1>
    //   <h2>Income: ${data.income}</h2>
    //   <h2>Expenses: ${data.expenses}</h2>
    //   <h2>Profit: ${data.profit}</h2>

    //   <h3>Expenses by month:</h3>
    //   <ul>
    //     {data.history.map(({ month, expenses }) => (
    //       <li key={month}>
    //         {month}: ${expenses}
    //       </li>
    //     ))}
    //   </ul>

    //   <h3>Expenses this week:</h3>
    //   <p>
    //     ${data.thisWeek.expenses} ({data.thisWeek.diff} less than last week)
    //   </p>
    // </div>
  );
};

const Transactions = () => {
  return (
    <div className="col-md-6 col-lg-4 order-2 mb-4 my-divv">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 class="card-title m-0 me-2">Transactions</h5>
          <div class="dropdown">
            <button
              class="btn p-0"
              type="button"
              id="transactionID"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bx bx-dots-vertical-rounded"></i>
            </button>
            <div
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="transactionID"
            >
              <a class="dropdown-item" href="javascript:void(0);">
                Last 28 Days
              </a>
              <a class="dropdown-item" href="javascript:void(0);">
                Last Month
              </a>
              <a class="dropdown-item" href="javascript:void(0);">
                Last Year
              </a>
            </div>
          </div>
          {/* Content */}
        </div>
        <div className="card-body">
        {/* Content */}
        <ul class="p-0 m-0">
                        <li class="d-flex mb-4 pb-1">
                          <div class="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/paypal.png" alt="User" class="rounded" />
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <small class="text-muted d-block mb-1">Paypal</small>
                              <h6 class="mb-0">Send money</h6>
                            </div>
                            <div class="user-progress d-flex align-items-center gap-1">
                              <h6 class="mb-0">+82.6</h6>
                              <span class="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        </ul>
        </div>
      </div>
    </div>
  );
};

const YourComponent = () => {
  return (
    <div className="category flex flex-row gap-10 justify-between items-center">
      <OrderStatistics />
      <ExpenseOverview />
      <Transactions />
    </div>
  );
};

export default YourComponent;


// <div class="dropdown">
//   <button
//     class="btn p-0"
//     type="button"
//     id="orederStatistics"
//     data-bs-toggle="dropdown"
//     aria-haspopup="true"
//     aria-expanded="false"
//   >
//     <i class="bx bx-dots-vertical-rounded"></i>
//   </button>
//   <div
//     class="dropdown-menu dropdown-menu-end"
//     aria-labelledby="orederStatistics"
//   >
//     <a class="dropdown-item" href="javascript:void(0);">
//       Select All
//     </a>
//     <a class="dropdown-item" href="javascript:void(0);">
//       Refresh
//     </a>
//     <a class="dropdown-item" href="javascript:void(0);">
//       Share
//     </a>
//   </div>
// </div>;
