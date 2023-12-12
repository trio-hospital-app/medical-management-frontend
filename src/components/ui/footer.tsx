import { Footer } from "flowbite-react";

function FooterComponent() {
  return (
    <div className="fixed bottom-0 right-0 left-0 z-[30] bg-white h-[30px]">
      <Footer container>
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}

export default FooterComponent;
