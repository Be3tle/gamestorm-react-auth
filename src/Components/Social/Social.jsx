import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="p-2 mb-6">
        <h2 className="text-xl mb-4">Find Us On</h2>
        <a
          className="p-2 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-2 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-2 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Social;
