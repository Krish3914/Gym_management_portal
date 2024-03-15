export const Footer = () => {
  return (
    <footer class="content-footer footer bg-footer-theme absolute bottom-0">
      <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div class="mb-2 mb-md-0 hidden lg:block">
          Product by Maskottchen Technology
          <a
            href="https://maskottchen.tech/"
            target="_blank"
            class="footer-link fw-bolder"
            className=" text-[#696cff]"
          >
            {" "}
            Click Here
          </a>
        </div>
      </div>
    </footer>
  );
};
