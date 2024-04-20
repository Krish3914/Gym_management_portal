// export const Footer = () => {
//   return (
//     <footer class="content-footer footer bg-footer-theme absolute bottom-0">
//       <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
//         <div class="mb-2 mb-md-0 hidden lg:block">
//           Product by 
//           <a
//             href="https://maskottchen.tech/"
//             target="_blank"
//             class="footer-link fw-bolder"
//             className=" text-[#696cff]"
//           >
//             {" "}
//             Maskottchen Technology
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };
export const Footer = () => {
  return (
    <footer className="content-footer footer bg-footer-theme fixed bottom-0 w-full">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0 hidden lg:block">
          Product by{' '}
          <a
            href="https://maskottchen.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link fw-bolder text-[#696cff]"
          >
            Maskottchen Technology
          </a>
        </div>
      </div>
    </footer>
  );
};
